# 🚀 Quick Deployment Guide — Netlify

## Pre-Deployment Checklist ✅

Before deploying, ensure:
- [ ] All files are committed to Git repository
- [ ] Branch name matches: `feature/landing-v1-unfair-advantage` (or `main`)
- [ ] Test locally by opening `index.html` in browser

## Netlify Deployment Steps

### 1️⃣ Create New Site

1. Log in to [Netlify](https://app.netlify.com)
2. Click **"Add new site"** → **"Import an existing project"**
3. Choose your Git provider (GitHub/GitLab/Bitbucket)
4. Select repository
5. Select branch: `feature/landing-v1-unfair-advantage` or `main`

### 2️⃣ Configure Build Settings

```
Build command:     (leave empty or type: echo "no build")
Publish directory: .
```

Click **"Deploy site"**

### 3️⃣ Enable Netlify Forms (CRITICAL!)

**After first deployment:**

1. Go to **Site settings** → **Forms**
2. Toggle **"Enable form detection"** → ON
3. Go to **Forms** tab (top navigation)
4. Click **"Notifications"**
5. Click **"Add notification"** → **"Email notification"**
6. Enter email: `info@gocoding.tech`
7. Select form: `apply`
8. Save

### 4️⃣ Test Everything

**Critical tests after deployment:**

1. **Form Submission Test**
   - Go to live site
   - Scroll to "Apply to Join" section
   - Fill out and submit form
   - ✅ Should redirect to `/thank-you` page
   - ✅ Email should arrive at `info@gocoding.tech`

2. **Calendly Embed Test**
   - On thank-you page
   - ✅ Calendly booking widget should load
   - ✅ Fallback link should work if embed fails

3. **Navigation Test**
   - Click all menu items in header
   - ✅ Smooth scroll to sections
   - ✅ Mobile menu toggle works

4. **Responsive Test**
   - Test on mobile device
   - ✅ Burger menu works
   - ✅ Forms are usable
   - ✅ Text is readable

5. **FAQ & Courses Accordion Test**
   - Click FAQ questions
   - ✅ Expand/collapse works
   - Click course modules
   - ✅ Expand/collapse works

## 🔧 Troubleshooting

### Form not submitting?

**Check:**
- Netlify Forms is enabled in site settings
- Form has `data-netlify="true"` attribute
- Form has `name="apply"` attribute
- Hidden field `form-name` exists
- Redeploy site after enabling forms

### Email notifications not arriving?

**Check:**
- Forms → Notifications → Email is configured
- Correct email: `info@gocoding.tech`
- Check spam folder
- Wait 2-3 minutes after submission

### Calendly not loading?

**Check:**
- URL is correct: `https://calendly.com/resulted/15`
- No ad blockers interfering
- Iframe not blocked by browser security
- Use fallback link if embed fails

### Redirect not working?

**Check:**
- `netlify.toml` file is in root directory
- Redirects syntax is correct
- Redeploy site after adding `netlify.toml`

## 📊 Performance Optimization

After deployment, run:

1. **Lighthouse Audit** (Chrome DevTools)
   - Target: Performance 90+
   - Target: Accessibility 90+
   - Target: Best Practices 90+
   - Target: SEO 90+

2. **Mobile-Friendly Test**
   - Google Mobile-Friendly Test
   - Test on real devices

3. **Cross-Browser Test**
   - Chrome ✅
   - Safari ✅
   - Firefox ✅
   - Edge ✅

## 🎯 Post-Launch Tasks

- [ ] Share live URL with stakeholders
- [ ] Monitor form submissions in Netlify dashboard
- [ ] Set up Google Analytics (optional)
- [ ] Create custom domain (optional)
- [ ] Add SSL certificate (Netlify auto-provisions)
- [ ] Submit to Google Search Console

## 📈 Success Metrics to Track

Monitor these KPIs:

1. **Traffic**
   - Page views
   - Unique visitors
   - Bounce rate
   - Time on page

2. **Conversions**
   - Form submissions (applications)
   - Calendly bookings
   - Application → Call conversion rate

3. **User Behavior**
   - Most viewed sections
   - Average scroll depth
   - Mobile vs desktop split

## 🆘 Support

Need help? Contact:
- **Email:** info@gocoding.tech
- **Netlify Docs:** https://docs.netlify.com/forms/setup/

---

**Estimated Deployment Time:** 10-15 minutes  
**Difficulty:** Beginner-friendly ✅