---
title: "Building a Persistent AI Assistant on Telegram Using Xiaomi MiMo, Azure, and Hermes Agent"
date: "2026-07-08"
slug: "persistent-ai-assistant-telegram-xiaomi-mimo"
excerpt: "How I built a 24/7 AI assistant on Telegram with persistent memory, using Xiaomi MiMo as the reasoning engine, Hermes Agent for tool use, and OpenViking for long-term context."
tags: ["ai", "telegram", "hermes-agent", "xiaomi-mimo", "cloud"]
coverImage: ""
---

## What You Are Building

There are four components in this setup. I will explain what each one is and why I chose it.

### Xiaomi MiMo API (the brain)

This is the language model that generates responses. The specific model is called mimo-v2.5-pro. It is a reasoning model, which means it is designed to think through problems step by step rather than just predicting the next word. It has a 1 million token context window, which means it can hold very long conversations or process large documents without forgetting what came earlier.

You access MiMo through Xiaomi's Token Plan. This is a pay-per-use API. You send a text prompt to Xiaomi's servers, the model processes it, and you get a response back. The cost depends on how many tokens (roughly, words) you send and receive. For casual personal use, this costs less than a dollar per month.

I chose MiMo because it is a strong reasoning model at a lower price point than comparable models from OpenAI or Anthropic. The API is also OpenAI-compatible, meaning any tool that works with OpenAI's API format can also work with MiMo by just changing the base URL.

### Hermes Agent (the body)

Hermes Agent is an open-source framework built by Nous Research. Think of it as the operating system for your AI assistant. The language model (MiMo) is just the brain that generates text. Hermes gives that brain hands and eyes. It lets the AI run terminal commands, search the web, read and write files, manage skills (reusable procedures), and connect to messaging platforms like Telegram.

Hermes has two main parts:
- The CLI (command line interface) for interacting with it from your terminal
- The gateway, which is a background process that listens for messages from Telegram and routes them to the AI

Without Hermes, you would just have an API you could call manually. With Hermes, you have a fully autonomous assistant that can use tools, remember context, and operate continuously.

### Azure Virtual Machine (the house)

Your assistant needs to run somewhere 24/7. If you run it on your laptop, it stops working when you close the lid or shut down. A virtual machine (VM) is a computer that runs in the cloud. It is always on, always connected to the internet, and you can access it from anywhere through SSH.

Azure is Microsoft's cloud platform. If you are a student, you get $100 in free credits through the GitHub Student Developer Pack, which is enough to run a small VM for an entire year without paying anything. I used Azure because of this free tier, but you could also use AWS, Google Cloud, or any other cloud provider.

### OpenViking (the memory)

By default, an AI assistant forgets everything between conversations. You tell it your name on Monday, and on Tuesday it has no idea who you are. OpenViking fixes this. It is a local memory plugin that stores information in a vector database running on your server.

When you tell the assistant something like "my favorite programming language is Python" or "I prefer concise responses," OpenViking encodes that information into a mathematical representation (called a vector embedding) and stores it. On future conversations, when your message is semantically related to something you said before, OpenViking retrieves that context and injects it into the prompt. The result is an assistant that builds a persistent understanding of you over time.

OpenViking runs locally on your server. Your conversation data never leaves your machine.

## Prerequisites

Before you start, make sure you have these:

**A GitHub account with the Student Developer Pack** — This gives you the Azure credits. If you are a student with a .edu email, go to education.github.com/pack and apply. Approval usually takes a few minutes to a few days. Once approved, you get access to $100 in Azure credits (among many other benefits).

**A Telegram account** — Telegram is a messaging app similar to WhatsApp or Signal. You probably already have it. If not, download it from telegram.org and create an account.

**A Xiaomi MiMo API key** — Go to mimo.mi.com and create an account. Once logged in, look for the Token Plan section in the dashboard. Subscribe to the Token Plan (there is a free tier to start with). After subscribing, you will see an API key on the Token Plan page. Copy this key and save it somewhere safe.

**Basic terminal familiarity** — You should know how to open a terminal, run commands, and navigate directories.

## Step 1: Create an Azure Virtual Machine

A virtual machine is a computer that exists in the cloud. You interact with it entirely through the terminal. It runs Ubuntu Linux, has its own storage, memory, and processing power, and stays online 24/7 as long as the account is active.

### Creating the VM:

1. Go to portal.azure.com and sign in with the account you used for the Student Developer Pack.
2. In the search bar at the top, type "Virtual Machines" and click on it.
3. Click the "+ Create" button and select "Azure virtual machine."
4. Fill in these settings:
   - **Subscription:** Select "Azure for Students"
   - **Resource group:** Click "Create new" and name it something like `hermes-rg`
   - **Virtual machine name:** `hermes-server`
   - **Region:** Choose the one closest to you geographically
   - **Image:** Select "Ubuntu Server 24.04 LTS - x64 Gen2"
   - **Size:** Search for "B1s" — 1 vCPU, 1 GB RAM, smallest free-tier eligible size
5. Under "Administrator account," choose SSH public key or Password and set credentials.
6. Under "Inbound port rules," make sure SSH (port 22) is checked.
7. Click "Review + Create" then "Create."
8. Wait for deployment to finish. Copy the "Public IP address" from the VM overview page.

> **Cost note:** The B1s size costs roughly $7.60/month at full price. With $100 in student credits, you can run this VM for over a year.

## Step 2: Connect to Your Server via SSH

SSH (Secure Shell) is a protocol for connecting to another computer over the internet and interacting with it through a terminal.

```bash
ssh azureuser@<your-azure-ip>
```

Replace `<your-azure-ip>` with the IP address from Step 1. If you see a fingerprint confirmation prompt, type `yes`.

Once connected, update the system:

```bash
sudo apt update && sudo apt upgrade -y
```

Install the tools we need:

```bash
sudo apt install -y curl git python3 python3-pip python3-venv
```

## Step 3: Install Hermes Agent

Hermes Agent is the framework that makes everything work. It handles receiving messages, sending them to the model, executing tools, managing memory, and sending responses back.

```bash
curl -fsSL https://hermes-agent.nousresearch.com/install.sh | bash
```

Reload your shell:

```bash
source ~/.bashrc
```

Verify installation:

```bash
hermes --version
```

### Configure the model provider:

```bash
nano ~/.hermes/config.yaml
```

Set the model section to:

```yaml
model:
  base_url: https://token-plan-sgp.xiaomimimo.com/anthropic
  default: mimo-v2.5-pro
  provider: xiaomi
```

Save and exit (Ctrl+X, then Y, then Enter).

### Add your API key:

```bash
nano ~/.hermes/.env
```

Add this line:

```
XIAOMI_API_KEY=your-mimo-api-key-here
```

### Test the connection:

```bash
hermes chat -q "Say hello in one sentence."
```

If MiMo replies, the connection is working.

## Step 4: Create a Telegram Bot

Telegram bots are special accounts controlled by software instead of a human. You create one through @BotFather.

### Create the bot:

1. Open Telegram and search for "@BotFather"
2. Send `/newbot`
3. Provide a display name (e.g., "My AI Assistant")
4. Provide a unique username ending in "bot" (e.g., "sam_ai_helper_bot")
5. BotFather sends you a bot token — copy and save it

### Get your Telegram user ID:

1. Search for "@userinfobot" in Telegram
2. Send any message
3. It replies with your numeric user ID

## Step 5: Connect the Telegram Bot to Hermes

```bash
nano ~/.hermes/.env
```

Add these lines:

```
TELEGRAM_BOT_TOKEN=your-bot-token-here
TELEGRAM_ALLOWED_USERS=your-telegram-user-id
```

> **Important:** Always set `TELEGRAM_ALLOWED_USERS`. Without it, anyone can message your bot and run up your API bill.

## Step 6: Install OpenViking for Persistent Memory

This is the step that makes your assistant actually useful over time.

### Install Ollama:

```bash
curl -fsSL https://ollama.com/install.sh | sh
```

Pull the embedding model:

```bash
ollama pull nomic-embed-text
```

### Run the Hermes memory setup:

```bash
hermes memory setup
```

Select OpenViking as the memory provider and local Ollama for embeddings.

### Verify and enable the service:

```bash
systemctl --user status openviking
systemctl --user enable openviking
```

Add the endpoint to your environment:

```bash
nano ~/.hermes/.env
```

Add:

```
OPENVIKING_ENDPOINT=http://localhost:1933
```

## Step 7: Start the Gateway

The gateway connects Hermes to Telegram. It is a long-running background process.

### Run as a service (recommended):

```bash
hermes gateway install
```

Check status:

```bash
hermes gateway status
```

### Or run in the foreground (for debugging):

```bash
hermes gateway run
```

### Test it:

Open Telegram, search for your bot, and send "hello." You should get a response within a few seconds.

## Step 8: Test the Full Setup

**Test 1: Basic model connection**
Send: "What model are you using?"

**Test 2: Memory persistence**
Send: "Remember that my name is [your name]."
Then: "What is my name?"

**Test 3: Tool use**
Send: "What time is it in Tokyo right now?"

If all three tests pass, your setup is complete.

## Pros and Cons

### Pros

- **Always available.** The bot runs 24/7 on Azure. You can message it from any device with Telegram.
- **Persistent memory.** OpenViking stores facts, preferences, and context across conversations. The assistant gets more useful the more you use it.
- **Low cost for students.** The Azure VM is free with student credits. MiMo charges per token, but casual use costs less than one dollar per month.
- **Full tool access.** Hermes can run terminal commands, search the web, read and write files, manage skills, and connect to other services.
- **Customizable.** You can add skills, change the assistant's personality, set up cron jobs, and connect it to other platforms.
- **Local-first memory.** OpenViking runs on your own server. Your data never leaves your machine.
- **Open source.** Both Hermes Agent and OpenViking are open source.

### Cons

- **Requires a running server.** If the Azure VM goes down, the bot goes offline.
- **Single point of failure at the API level.** If the MiMo API is unavailable, the bot cannot respond.
- **Token costs scale with usage.** Long conversations with tool use consume significantly more tokens.
- **Multi-step initial setup.** The first setup takes 30 to 60 minutes.
- **No built-in web interface.** Everything happens through Telegram or the CLI.
- **Ollama uses server resources.** Running the embedding model uses some of your VM's limited RAM.

## Troubleshooting

**The bot does not respond:**
```bash
hermes gateway status
journalctl --user -u hermes-gateway -n 50
```

**API errors or "model not found":**
```bash
hermes chat -q "hello"
```
Verify the API key and base URL in `~/.hermes/.env` and `~/.hermes/config.yaml`.

**OpenViking memory not working:**
```bash
systemctl --user status openviking
journalctl --user -u openviking -f
```

> The best AI assistant is not the one with the most features. It is the one that is always there when you need it.
