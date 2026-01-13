# ✅ Post-Deployment Testing Checklist

Use this checklist after deploying to Netlify to ensure everything works correctly.

---

## 🌐 Website Accessibility

### Desktop Testing
- [ ] Site loads without errors
- [ ] All images/icons display correctly
- [ ] No broken links
- [ ] Favicon appears in browser tab
- [ ] Page title displays correctly

### Mobile Testing
- [ ] Site loads on mobile device
- [ ] Text is readable (not too small)
- [ ] No horizontal scrolling
- [ ] Images scale correctly
- [ ] Touch targets are accessible

---

## 🧭 Navigation Testing

### Sticky Header
- [ ] Header stays fixed when scrolling down
- [ ] Header shows shadow/background when scrolled
- [ ] Logo links back to top
- [ ] "Apply to Join" button in header works

### Menu Links
- [ ] "What it is" → scrolls to #what-it-is
- [ ] "What you get" → scrolls to #what-you-get
- [ ] "Courses" → scrolls to #courses
- [ ] "Bonus" → scrolls to #bonus
- [ ] "How it works" → scrolls to #how-it-works
- [ ] "Pricing" → scrolls to #pricing
- [ ] "FAQ" → scrolls to #faq
- [ ] Smooth scroll animation works
- [ ] Scroll accounts for header height (no content hidden)

### Mobile Menu
- [ ] Burger icon appears on mobile
- [ ] Menu opens when burger clicked
- [ ] Menu items work (scroll to sections)
- [ ] Menu closes after clicking item
- [ ] Menu closes when clicking outside

---

## 📝 Content Display

### All Sections Present
- [ ] Hero section (#top) displays
- [ ] Reality check section displays
- [ ] What it is section displays
- [ ] Why it works section displays
- [ ] What you get section (5 cards) displays
- [ ] Courses section (9 modules) displays
- [ ] Bonus section displays
- [ ] How it works section (4 steps) displays
- [ ] Who it's for section displays
- [ ] Pricing section displays
- [ ] Apply form section displays
- [ ] FAQ section (6 questions) displays
- [ ] Footer displays

### Typography & Spacing
- [ ] Headings hierarchy is clear (H1 > H2 > H3)
- [ ] Text is readable (good contrast)
- [ ] Line spacing is comfortable
- [ ] No text overflow issues
- [ ] Bullet points display correctly

---

## 🎛 Interactive Elements

### FAQ Accordion
- [ ] Click question 1 → answer expands
- [ ] Click again → answer collapses
- [ ] Icon rotates (▼ → ▲)
- [ ] All 6 FAQ items work
- [ ] Multiple items can be open simultaneously

### Courses Accordion
- [ ] Click course 1 header → content expands
- [ ] Click again → content collapses
- [ ] Icon rotates (▼ → ▲)
- [ ] All 9 course modules work
- [ ] Content is readable when expanded

### CTA Buttons
- [ ] All "Apply to Join" buttons scroll to #apply form
- [ ] Buttons have hover effect
- [ ] Buttons are clickable on mobile

---

## 📧 Form Testing (CRITICAL!)

### Form Display
- [ ] All 8 form fields display:
  - [ ] Full name
  - [ ] Email
  - [ ] Role (dropdown)
  - [ ] Business type (dropdown)
  - [ ] Grades served (dropdown)
  - [ ] Enrollment range (dropdown)
  - [ ] Biggest bottleneck (dropdown)
  - [ ] Goal for next 90 days (textarea)
- [ ] "Submit Application" button displays
- [ ] Micro-copy displays below button

### Form Submission
- [ ] Fill out all required fields
- [ ] Click "Submit Application"
- [ ] Form submits without errors
- [ ] **Redirects to /thank-you page** ✅
- [ ] Thank you page loads correctly

### Email Notification
- [ ] **Check info@gocoding.tech inbox**
- [ ] Email arrives within 2-3 minutes
- [ ] Email contains all 8 form fields
- [ ] Email subject: "New form submission: apply"
- [ ] Check spam folder if not in inbox

### Form Validation
- [ ] Try submitting empty form → validation errors show
- [ ] Try invalid email format → validation error
- [ ] Goal textarea requires at least 10 characters
- [ ] All dropdowns require selection

---

## 🎯 Thank You Page

### Page Display
- [ ] Thank you page loads at /thank-you
- [ ] ✅ icon displays
- [ ] "Application Submitted" heading displays
- [ ] Instructions text displays

### Calendly Embed
- [ ] **Calendly widget loads** ✅
- [ ] Can scroll through available times
- [ ] Can select a time slot
- [ ] Booking form appears when time selected
- [ ] Fallback link displays below embed
- [ ] Fallback link works (opens Calendly in new tab)

---

## 🎨 Design & UX

### Visual Quality
- [ ] Colors match design system (purple accent)
- [ ] Spacing is consistent
- [ ] Cards have proper shadows/borders
- [ ] Buttons look professional
- [ ] No visual glitches or overlaps

### Responsive Design
- [ ] Test on desktop (1920px, 1440px, 1024px)
- [ ] Test on tablet (768px, 1024px)
- [ ] Test on mobile (375px, 414px, 390px)
- [ ] Content adjusts properly at all sizes
- [ ] No horizontal overflow
- [ ] Touch targets are large enough (48px+)

---

## ⚡ Performance

### Load Speed
- [ ] Page loads in < 3 seconds
- [ ] No long waiting times
- [ ] Images load quickly (minimal images used)
- [ ] No layout shifts (CLS)

### Lighthouse Audit
Run in Chrome DevTools:
- [ ] Performance: 90+ ✅
- [ ] Accessibility: 90+ ✅
- [ ] Best Practices: 90+ ✅
- [ ] SEO: 90+ ✅

---

## 🔍 SEO & Meta

### Page Title & Meta
- [ ] Browser tab shows: "Unfair Advantage Systems — Micro-MBA..."
- [ ] Meta description present (view source)
- [ ] Open Graph tags present (test with social share preview)

### Semantic HTML
- [ ] View source → proper heading hierarchy
- [ ] Forms have labels
- [ ] Links have descriptive text

---

## 🌍 Cross-Browser Testing

Test on multiple browsers:
- [ ] Chrome (latest) ✅
- [ ] Firefox (latest) ✅
- [ ] Safari (latest) ✅
- [ ] Edge (latest) ✅
- [ ] Mobile Safari (iOS) ✅
- [ ] Chrome Mobile (Android) ✅

---

## 📊 Analytics (Optional)

If you added analytics:
- [ ] Tracking code fires on page load
- [ ] Form submissions tracked
- [ ] Button clicks tracked
- [ ] Scroll depth tracked

---

## 🐛 Common Issues to Check

### Form Issues
- ❌ Form not submitting → **Check Netlify Forms is enabled in dashboard**
- ❌ No email → **Check Forms → Notifications settings**
- ❌ Redirect not working → **Check netlify.toml exists and is deployed**

### Visual Issues
- ❌ Burger menu not working → **Test on mobile device, not just browser resize**
- ❌ Accordion not opening → **Check browser console for JS errors**
- ❌ Calendly not loading → **Check for ad blockers, use fallback link**

### Performance Issues
- ❌ Slow loading → **Run Lighthouse, check for external resource delays**
- ❌ Layout shifts → **Ensure all elements have proper sizing**

---

## ✅ Final Sign-Off

Once all items are checked:
- [ ] **Website is production-ready**
- [ ] **Form submissions working and emailing to info@gocoding.tech**
- [ ] **Calendly booking functional**
- [ ] **Mobile experience tested**
- [ ] **No critical errors or bugs**

---

## 📞 Support

Issues found? Contact: **info@gocoding.tech**

---

**Checklist Version:** 1.0  
**Last Updated:** 2026-01-13