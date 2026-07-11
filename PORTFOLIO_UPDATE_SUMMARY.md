# Portfolio Update Summary

## Content Changes Applied

### 1. AI Engineer Job Start Date
- **Changed:** May 2024 → May 2026
- **File:** `src/data.js` (line 62)

### 2. Resume Link Updated
- **Changed:** `/Samarvir_Resume_Summer.pdf` → `/Samarvir_Resume_Blueprint.pdf`
- **Reason:** Blueprint version includes UniQuery project and Flutter/Firebase in frameworks section
- **File:** `src/data.js` (line 23)
- **Action:** Copied Blueprint resume PDF to `public/` folder

### 3. VP Social Experience Added
- **Position:** VP Social
- **Organization:** Chestnut Residence Council
- **Period:** Sep 2025 to Apr 2026
- **Description:** Led planning and execution of annual Dinner Dance at Shangri-La Hotel, managed budget, coordinated logistics for 200+ attendees
- **Tags:** Leadership, Event Management, Budgeting, Vendor Relations
- **Type:** leadership
- **File:** `src/data.js` (added as id: 6)

### 4. UniQuery Project Added
- **Title:** UniQuery
- **Technologies:** Flutter, Firebase, Cloud Firestore, Firebase Auth, FCM, Role-Based Access
- **Description:** Cross-platform academic query management system with role-based access control
- **GitHub:** https://github.com/samarvirgarg/uniquery
- **Featured:** Yes (appears in featured projects grid)
- **File:** `src/data.js` (added as id: 6)

### 5. Skills Section Updated
**New skills added:**
- **Languages:** Dart
- **Frameworks:** Flutter, Firebase
- **Tools:** Android SDK, Cloud Firestore
- **Concepts:** Role-Based Access Control, Firebase Auth, Firebase Cloud Messaging, Firebase Storage, Mobile Development

**Total skills count:** 41 (up from 31)

### 6. Blog Section Replaced
- **Removed:** `data-viz-healthcare.md` and `autonomous-biathlon-robot.md`
- **Added:** `persistent-ai-assistant-telegram-xiaomi-mimo.md`
- **Title:** "Building a Persistent AI Assistant on Telegram Using Xiaomi MiMo, Azure, and Hermes Agent"
- **Date:** July 8, 2026
- **Tags:** ai, telegram, hermes-agent, xiaomi-mimo, cloud
- **Content:** Full tutorial covering MiMo API, Hermes Agent, Azure VM setup, OpenViking memory, and Telegram bot configuration

---

## UI/Design Improvements

### Accessibility Enhancements

1. **Skip-to-Content Link**
   - Added keyboard-accessible skip link for screen readers
   - Appears on focus when pressing Tab
   - Links to main content area
   - **Files:** `src/App.jsx`, `src/index.css`

2. **Enhanced Focus States**
   - Added `*:focus-visible` styles with accent color outline
   - Removed default outline for mouse users (`*:focus:not(:focus-visible)`)
   - **File:** `src/index.css`

3. **Improved ARIA Labels**
   - Added `aria-label="Scroll down to about section"` to scroll indicator
   - Added `aria-hidden="true"` to decorative arrow icon
   - **File:** `src/components/Hero.jsx`

4. **Error Message Contrast Fix**
   - Replaced `text-red-400` with custom `.error-text` class
   - Light mode: `#dc2626` (darker red for better contrast)
   - Dark mode: `#ef4444` (standard red)
   - **Files:** `src/index.css`, `src/components/Contact.jsx`

### Design Polish

1. **Smooth Scrolling**
   - Added `scroll-behavior: smooth` to HTML element
   - **File:** `src/index.css`

2. **Main Content ID**
   - Added `id="main-content"` to all `<main>` elements
   - Enables skip-to-content functionality
   - **File:** `src/App.jsx`

---

## Files Modified

| File | Changes |
|------|---------|
| `src/data.js` | Date, resume URL, VP Social, UniQuery, skills |
| `src/App.jsx` | Skip-to-content links, main content IDs |
| `src/index.css` | Smooth scrolling, skip styles, focus states, error colors |
| `src/components/Hero.jsx` | ARIA labels for scroll indicator |
| `src/components/Contact.jsx` | Error message color class |
| `content/blogs/` | Removed 2 old posts, added 1 new post |
| `public/` | Added Samarvir_Resume_Blueprint.pdf |

---

## Testing Results

### Dark Mode
- ✅ Hero section renders correctly
- ✅ VP Social visible in Experience section (6 entries total)
- ✅ UniQuery visible in Projects section (6 featured projects)
- ✅ All 41 skills rendering in Skills section
- ✅ New blog post displays correctly
- ✅ Blog post detail page renders with code blocks, lists, headings

### Light Mode
- ✅ All content visible with proper contrast
- ✅ Purple accent color works well on light background
- ✅ Text hierarchy clear (headings, body, metadata)
- ✅ Interactive elements (buttons, links) properly styled

### Accessibility
- ✅ Skip-to-content link functional
- ✅ Focus states visible for keyboard navigation
- ✅ ARIA labels on interactive elements
- ✅ Error messages readable in both themes

---

## How to Run

```bash
cd ~/GitHub-Projects/Portfolio
npm run dev
```

Local URL: http://localhost:5173

**Note:** No changes were pushed to GitHub. All updates are local only.
