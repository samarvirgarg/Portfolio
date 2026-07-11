# Portfolio Website Audit Report
## Samarvir Garg | samarvirgarg.dev
### Audit Date: July 11, 2026

---

## 1. CONTENT ACCURACY

| # | Issue | Location | Why It Matters | Severity | Suggested Fix |
|---|-------|----------|----------------|----------|---------------|
| 1.1 | **Education section defined but NEVER rendered** | `data.js` (lines 41-54), no `Education.jsx` component exists | Visitors cannot see your education history. `educationData` is exported but never imported by any component. | **Critical** | Create `Education.jsx` component and add it to `App.jsx` render tree |
| 1.2 | **UniQuery GitHub link returns 404** | `data.js` line 167: `github: 'https://github.com/samarvirgarg/uniquery'` | Broken link - visitors clicking "Code" get a 404 page | **Critical** | Either create the repo or update the link to the correct URL |
| 1.3 | **Experience IDs skip from 4 to 6** | `data.js` lines 90-101 (id:4) → 102 (id:6) | Inconsistent ID scheme, missing id:5. While not visible to users, indicates data entry error | **Low** | Renumber IDs sequentially (1-6) |
| 1.4 | **Research Assistant typed as 'leadership'** | `data.js` line 88: `type: 'leadership'` | Research is an academic/professional role, not leadership. Misleading categorization in the timeline | **Medium** | Change to `type: 'work'` or create new `type: 'research'` |
| 1.5 | **Stats say "12+ Technologies" but 41 skills exist** | `data.js` line 37: `{ label: 'Technologies', value: '12+' }` | Understates your technical breadth. You have 41 skills listed | **Medium** | Update to `value: '40+'` |
| 1.6 | **About section mentions "healthcare data visualization" but research is classified as leadership** | `data.js` lines 30-31 (about) vs line 88 (experience type) | Inconsistent narrative - about section frames research as professional work, but timeline categorizes it as leadership | **Low** | Align categorization - research should be `type: 'work'` |
| 1.7 | **Devpost links may be broken** | `data.js` lines 134, 21 (devpost URLs) | Devpost returns connection refused/timeout. Links may not resolve for visitors | **Medium** | Verify Devpost URLs are correct and accessible |
| 1.8 | **Emergency Route project has `github: '#'`** | `data.js` line 145 | Placeholder `#` link - clicking "Code" does nothing | **High** | Either add real GitHub link or remove the Code button for this project |
| 1.9 | **Duplicate social links definition** | `Hero.jsx` lines 12-17, `Contact.jsx` lines 20-25 | Same social links defined twice. If you update one, you must remember to update the other | **Medium** | Extract to `data.js` and import in both components |

---

## 2. FUNCTIONALITY / E2E TESTING

| # | Issue | Location | Why It Matters | Severity | Suggested Fix |
|---|-------|----------|----------------|----------|---------------|
| 2.1 | **No JavaScript errors in console** | All pages | ✅ Good - no runtime errors detected | N/A | N/A |
| 2.2 | **Theme toggle works correctly** | `Navbar.jsx` | ✅ Good - dark/light mode toggles properly | N/A | N/A |
| 2.3 | **Navigation anchors work** | All nav links | ✅ Good - smooth scroll to sections works | N/A | N/A |
| 2.4 | **Blog routing works** | `App.jsx` | ✅ Good - hash-based routing for blog posts works | N/A | N/A |
| 2.5 | **Contact form has validation** | `Contact.jsx` | ✅ Good - required fields are marked | N/A | N/A |
| 2.6 | **All project images are placeholders** | `Projects.jsx` lines 37-44 | Every project shows "PLACEHOLDER: Project screenshot" - no actual project images | **High** | Add real project screenshots or remove placeholder text |
| 2.7 | **Volunteering section commented out** | `App.jsx` line 71: `{/* <Volunteering /> */}` | Section is imported but never rendered. Dead code | **Low** | Either uncomment and display, or remove the import and component |
| 2.8 | **Blog post "Back to blog" link uses hash routing** | `BlogPost.jsx` line 42 | Works but may confuse users expecting browser back button to work | **Low** | Consider adding browser history integration |

---

## 3. UI / UX & ACCESSIBILITY

| # | Issue | Location | Why It Matters | Severity | Suggested Fix |
|---|-------|----------|----------------|----------|---------------|
| 3.1 | **No `prefers-reduced-motion` support** | `AnimatedBackground.jsx`, all components using framer-motion | Users who prefer reduced motion see all animations. WCAG 2.1 Level AAA violation | **High** | Add `prefers-reduced-motion` media query check and disable/reduce animations |
| 3.2 | **External links in Projects.jsx missing `rel="noopener noreferrer"`** | `Projects.jsx` - 2 links with `target="_blank"` without `rel` | Security risk - target="_blank" without noopener allows `window.opener` attacks | **High** | Add `rel="noopener noreferrer"` to all external links |
| 3.3 | **Images have no alt text** | All project images in `Projects.jsx` | Screen readers cannot describe images. WCAG violation | **Medium** | Add descriptive alt text to all images |
| 3.4 | **Heading hierarchy may have issues** | BlogList uses `<h1>`, BlogPost uses `<h1>` | Multiple h1 tags on different pages is acceptable for SPA, but verify heading nesting within each view | **Low** | Audit heading hierarchy in each route |
| 3.5 | **Skip-to-content link added** | `App.jsx` | ✅ Good - accessibility improvement already implemented | N/A | N/A |
| 3.6 | **ARIA labels on interactive elements** | 8 elements with aria-label | ✅ Good - theme toggle, social icons, scroll indicator have labels | N/A | N/A |
| 3.7 | **Focus states implemented** | `index.css` | ✅ Good - `*:focus-visible` styles added | N/A | N/A |
| 3.8 | **Tap targets may be too small on mobile** | Social icons, skill tags | Some interactive elements may be smaller than 44x44px minimum | **Medium** | Verify minimum tap target sizes on mobile breakpoints |
| 3.9 | **Color not sole indicator** | Skills section, experience tags | Tags use color + text, which is good | N/A | N/A |

---

## 4. PERFORMANCE

| # | Issue | Location | Why It Matters | Severity | Suggested Fix |
|---|-------|----------|----------------|----------|---------------|
| 4.1 | **`gray-matter` is a Node.js dependency in browser bundle** | `package.json` line 17 | gray-matter is for parsing YAML frontmatter in Node.js. It's not used in the browser (blogs.js uses custom parser). Adds unnecessary bundle size | **Medium** | Remove from dependencies: `npm uninstall gray-matter` |
| 4.2 | **Canvas animation runs continuously** | `AnimatedBackground.jsx` | requestAnimationFrame loop never pauses, even when tab is not visible. Wastes battery on mobile | **Medium** | Add visibility change listener to pause animation when tab is hidden |
| 4.3 | **179MB node_modules** | `node_modules/` | Large dependency tree. framer-motion is ~150KB gzipped which is acceptable | **Low** | Consider tree-shaking unused framer-motion features |
| 4.4 | **No image optimization** | `public/` folder | No WebP/AVIF formats, no lazy loading for below-fold images | **Medium** | Convert images to WebP, add loading="lazy" to below-fold images |
| 4.5 | **Font loading strategy** | `index.html` | Uses `font-display: swap` via Google Fonts CSS which is good | N/A | N/A |
| 4.6 | **No code splitting** | `App.jsx` | All components loaded upfront. Blog components could be lazy loaded | **Low** | Use React.lazy() for BlogList and BlogPost components |

---

## 5. SEO & METADATA

| # | Issue | Location | Why It Matters | Severity | Suggested Fix |
|---|-------|----------|----------------|----------|---------------|
| 5.1 | **No Open Graph tags** | `index.html` | LinkedIn, Twitter, Facebook previews will show generic/ugly cards when shared | **High** | Add og:title, og:description, og:image, og:url meta tags |
| 5.2 | **No Twitter Card tags** | `index.html` | Twitter previews will be generic | **High** | Add twitter:card, twitter:title, twitter:description meta tags |
| 5.3 | **No favicon** | `index.html` | Browser tab shows generic icon. Looks unprofessional | **High** | Add favicon (SVG or ICO) to public folder and link in index.html |
| 5.4 | **No sitemap.xml** | `public/` | Search engines may not discover all pages efficiently | **Low** | Generate sitemap.xml for main page and blog posts |
| 5.5 | **No robots.txt** | `public/` | Search engines have no crawling instructions | **Low** | Add basic robots.txt allowing all crawling |
| 5.6 | **Meta description is generic** | `index.html` line 7 | "Portfolio of Samarvir Garg - Student Developer, Leader, and Innovator" is okay but could be more specific | **Low** | Consider adding specific skills or value proposition |
| 5.7 | **Title tag is good** | `index.html` line 6 | ✅ "Samarvir Garg \| Student Developer" is descriptive and concise | N/A | N/A |

---

## 6. CODE QUALITY

| # | Issue | Location | Why It Matters | Severity | Suggested Fix |
|---|-------|----------|----------------|----------|---------------|
| 6.1 | **EmailJS credentials hardcoded in client code** | `Contact.jsx` lines 7-9 | API keys exposed in frontend bundle. Anyone can extract and abuse them | **Critical** | Move to environment variables (VITE_* vars) or backend proxy |
| 6.2 | **Volunteering component imported but commented out** | `App.jsx` line 9, 71 | Dead code - import creates unnecessary bundle size | **Low** | Remove import and component file, or uncomment render |
| 6.3 | **Duplicate social links definition** | `Hero.jsx` and `Contact.jsx` | Same data defined twice. DRY violation | **Medium** | Extract to data.js and import |
| 6.4 | **Education data defined but not used** | `data.js` lines 41-54 | Dead data - never imported or rendered | **Low** | Either use it or remove it |
| 6.5 | **Inconsistent ID scheme** | `data.js` | Experience IDs: 1,2,3,4,6,7 (skips 5). Project IDs: 1,2,3,6,4,5 (out of order) | **Low** | Renumber sequentially |
| 6.6 | **No error boundary** | `App.jsx` | If any component throws, entire app crashes with white screen | **Medium** | Add React Error Boundary component |
| 6.7 | **Console logging in production** | `blogs.js` line 56: `console.warn(...)` | Console warnings in production code | **Low** | Remove or use proper logging service |

---

## 7. SECURITY & BASIC HYGIENE

| # | Issue | Location | Why It Matters | Severity | Suggested Fix |
|---|-------|----------|----------------|----------|---------------|
| 7.1 | **EmailJS credentials exposed in client code** | `Contact.jsx` lines 7-9 | SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY visible in browser bundle. Attackers can send spam emails via your EmailJS account | **Critical** | Move to environment variables: `VITE_EMAILJS_SERVICE_ID`, etc. |
| 7.2 | **External links missing `rel="noopener noreferrer"`** | `Projects.jsx` | 2 links with `target="_blank"` without security attributes | **High** | Add `rel="noopener noreferrer"` to all external links |
| 7.3 | **No CAPTCHA/spam protection on contact form** | `Contact.jsx` | Form can be automated for spam submissions | **Medium** | Add honeypot field or reCAPTCHA |
| 7.4 | **Phone number exposed** | `data.js` line 17 | Personal phone number visible to all visitors | **Low** | Consider removing or making it optional |
| 7.5 | **Dependencies may have vulnerabilities** | `package.json` | Not checked for known CVEs | **Medium** | Run `npm audit` and update vulnerable packages |
| 7.6 | **GitHub links are public** | `data.js` | ✅ Expected for portfolio - GitHub repos should be public | N/A | N/A |

---

## 8. CROSS-BROWSER / DEVICE

| # | Issue | Location | Why It Matters | Severity | Suggested Fix |
|---|-------|----------|----------------|----------|---------------|
| 8.1 | **Canvas animation may lag on low-end devices** | `AnimatedBackground.jsx` | 8 blobs + 60 particles + grid + aurora = heavy rendering. May stutter on older phones | **Medium** | Add performance detection and reduce particle count on low-end devices |
| 8.2 | **No canvas fallback** | `AnimatedBackground.jsx` | If canvas fails, no background is shown | **Low** | Add CSS gradient fallback |
| 8.3 | **CSS `backdrop-filter` may not work in older browsers** | `index.css` `.glass` class | Safari < 9, older Chrome may not support it | **Low** | Add `-webkit-backdrop-filter` (already present) and fallback background |
| 8.4 | **Hash-based routing** | `App.jsx` | Works in all browsers. SPA routing via hash is universally supported | N/A | N/A |
| 8.5 | **Touch interactions** | All hover effects | Hover effects translate to touch on mobile, which is acceptable | N/A | N/A |

---

## 9. MARKET / COMPETITIVE BENCHMARK

| # | Issue | Location | Why It Matters | Severity | Suggested Fix |
|---|-------|----------|----------------|----------|---------------|
| 9.1 | **No project screenshots** | `Projects.jsx` | All projects show "PLACEHOLDER" - looks unfinished and unprofessional | **High** | Add real screenshots or mockups for each project |
| 9.2 | **No live demo links** | Most projects have `live: null` | Recruiters want to see working demos, not just code | **High** | Deploy projects and add live links where possible |
| 9.3 | **No GitHub contribution graph** | Missing section | Shows consistent coding activity. Common in strong portfolios | **Medium** | Add GitHub contribution calendar widget |
| 9.4 | **No testimonials/references** | Missing section | Social proof strengthens credibility | **Low** | Add quotes from professors, teammates, or managers |
| 9.5 | **Education section missing from rendered page** | No Education component | Major omission - recruiters expect to see education | **Critical** | Create and add Education component |
| 9.6 | **No "Currently open to" status** | Hero section | Recruiters want to know if you're available for internships/jobs | **Medium** | Add explicit availability statement (e.g., "Open to Summer 2027 Internships") |
| 9.7 | **No case study style project breakdowns** | Projects section | Top portfolios have detailed project pages with problem/solution/impact | **Medium** | Consider adding project detail pages with screenshots, architecture diagrams, metrics |
| 9.8 | **No GitHub stats/activity** | Missing section | Shows technical credibility and consistency | **Low** | Add GitHub stats widget or contribution graph |
| 9.9 | **Blog has only 1 post** | `content/blogs/` | Thin content. More posts would show depth of knowledge | **Low** | Write more technical blog posts over time |

---

## SUMMARY TABLE

| Category | Critical | High | Medium | Low | Total |
|----------|----------|------|--------|-----|-------|
| 1. Content Accuracy | 2 | 1 | 3 | 3 | 9 |
| 2. Functionality | 0 | 1 | 0 | 2 | 3 |
| 3. UI/UX & Accessibility | 0 | 2 | 2 | 2 | 6 |
| 4. Performance | 0 | 0 | 3 | 2 | 5 |
| 5. SEO & Metadata | 0 | 3 | 0 | 3 | 6 |
| 6. Code Quality | 1 | 0 | 2 | 4 | 7 |
| 7. Security | 1 | 1 | 2 | 1 | 5 |
| 8. Cross-Browser | 0 | 0 | 1 | 2 | 3 |
| 9. Market/Benchmark | 1 | 2 | 3 | 3 | 9 |
| **TOTAL** | **5** | **10** | **16** | **22** | **53** |

---

## PRIORITIZED ACTION PLAN

### 🔴 CRITICAL (Fix Immediately)

1. **Create Education component** - Education data exists but is never rendered. Major content gap.
2. **Fix UniQuery GitHub link** - Returns 404. Either create repo or update URL.
3. **Move EmailJS credentials to environment variables** - API keys exposed in client code.
4. **Update "12+ Technologies" stat to "40+"** - Understates your skills.

### 🟠 HIGH PRIORITY (Fix This Week)

5. **Add Open Graph and Twitter Card meta tags** - Essential for LinkedIn/social sharing.
6. **Add favicon** - Basic professionalism.
7. **Add project screenshots** - All projects show "PLACEHOLDER".
8. **Add `rel="noopener noreferrer"` to external links** - Security fix.
9. **Add `prefers-reduced-motion` support** - Accessibility requirement.
10. **Fix Emergency Route project `github: '#'`** - Broken placeholder link.
11. **Add live demo links** - Recruiters want to see working projects.

### 🟡 MEDIUM PRIORITY (Fix This Month)

12. **Extract duplicate social links to data.js** - DRY violation.
13. **Remove `gray-matter` dependency** - Unnecessary Node.js package in browser bundle.
14. **Add error boundary** - Prevent white screen on component errors.
15. **Optimize canvas animation** - Pause when tab hidden, reduce particles on low-end devices.
16. **Add CAPTCHA to contact form** - Spam protection.
17. **Add GitHub contribution graph** - Shows consistent activity.
18. **Add "Open to Opportunities" status** - Recruiters want to know availability.
19. **Fix Research Assistant type** - Should be 'work' not 'leadership'.
20. **Add image lazy loading** - Performance optimization.
21. **Add case study style project pages** - Competitive advantage.
22. **Run `npm audit`** - Check for vulnerable dependencies.

### 🟢 LOW PRIORITY (Nice to Have)

23. **Renumber experience/project IDs** - Sequential ordering.
24. **Add sitemap.xml and robots.txt** - SEO improvement.
25. **Remove dead code** (Volunteering component, unused education data).
26. **Add canvas fallback gradient** - Graceful degradation.
27. **Add testimonials section** - Social proof.
28. **Write more blog posts** - Content depth.
29. **Add GitHub stats widget** - Technical credibility.
30. **Add tap target size verification** - Mobile accessibility.
31. **Add browser history integration for blog** - Better UX.
32. **Remove console.warn from production code** - Clean console.

---

## QUICK WINS (Low Effort, High Impact)

These can be fixed in under 30 minutes each:

1. ✏️ Update stats value from "12+" to "40+" (1 line change)
2. ✏️ Fix UniQuery GitHub link (1 line change)
3. ✏️ Change Research Assistant type from 'leadership' to 'work' (1 line change)
4. ✏️ Add `rel="noopener noreferrer"` to 2 links in Projects.jsx (2 line changes)
5. ✏️ Add favicon to index.html (3 lines)
6. ✏️ Add OG meta tags to index.html (10 lines)
7. ✏️ Remove `gray-matter` from package.json (1 line + npm uninstall)
8. ✏️ Fix Emergency Route `github: '#'` (1 line change)

---

## NOTES

- LinkedIn returns HTTP 999 which is LinkedIn's anti-bot protection, not a broken link. This is expected.
- Devpost links may work in browsers but return 000 to curl due to anti-bot measures. Verify manually.
- The animated background is visually impressive but should respect `prefers-reduced-motion`.
- Overall code quality is good with clean component structure and proper data separation.
- The design is modern and competitive for 2026 standards.
- Main gaps are: missing Education section, placeholder images, and missing SEO metadata.
