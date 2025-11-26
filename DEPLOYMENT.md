# Deployment Guide

This document provides step-by-step instructions for deploying the **TON Referral Keeper** landing page to Vercel, Netlify, and Cloudflare Pages, along with quality assurance checks.

## Table of Contents

- [Project Overview](#project-overview)
- [Pre-deployment Checklist](#pre-deployment-checklist)
- [Vercel Deployment](#vercel-deployment)
- [Netlify Deployment](#netlify-deployment)
- [Cloudflare Pages Deployment](#cloudflare-pages-deployment)
- [Quality Assurance](#quality-assurance)
  - [Lighthouse Performance Audit](#lighthouse-performance-audit)
  - [Telegram In-App Browser Check](#telegram-in-app-browser-check)
- [Post-deployment](#post-deployment)
- [Production URLs](#production-urls)

---

## Project Overview

This is a **static HTML site** built with:
- **HTML5** semantic markup
- **Tailwind CSS** (via CDN)
- **Alpine.js** (via CDN)
- **Custom CSS animations** (`styles.css`)
- **Interactive JavaScript** (`app.js`)

### Project Files
- `index.html` - Main landing page
- `privacy.html` - Privacy Policy
- `terms.html` - Terms of Service
- `support.html` - Support/Help center
- `app.js` - Alpine.js application logic
- `styles.css` - Custom animations and styling
- `.gitignore` - Git ignore configuration

**No build step required** - this is a static site ready to deploy as-is.

---

## Pre-deployment Checklist

Before deploying to any platform, verify:

- [ ] All HTML files are present (`index.html`, `privacy.html`, `terms.html`, `support.html`)
- [ ] `app.js` and `styles.css` are included
- [ ] `.gitignore` is configured
- [ ] External CDN links are working (Tailwind CSS, Alpine.js, Unsplash images)
- [ ] All internal links are correct (relative paths)
- [ ] Telegram bot/chat links are configured: `https://t.me/TONReferralKeeperBot?start=web2025` and `https://t.me/community`
- [ ] Email support link is correct: `support@tonreferralkeeper.com`
- [ ] No sensitive credentials are hardcoded

---

## Vercel Deployment

Vercel provides the easiest one-click deployment experience for static sites.

### Option 1: Deploy with Git Integration (Recommended)

1. **Push your code to GitHub/GitLab/Bitbucket**
   ```bash
   git push origin main
   ```

2. **Go to [vercel.com](https://vercel.com)** and sign in with your Git provider

3. **Click "New Project"**
   - Select your repository
   - Vercel will auto-detect that this is a static site
   - **No build command needed** - leave it empty

4. **Configure Environment** (optional)
   - Framework Preset: `Other` (static)
   - Build Command: Leave empty
   - Output Directory: Leave empty (default `.`)
   - Install Command: Leave empty

5. **Click "Deploy"**
   - Vercel will automatically deploy and provide a unique URL
   - Enable automatic deployments on every push

### Option 2: Deploy with Vercel CLI

```bash
# Install Vercel CLI globally
npm i -g vercel

# Deploy from project directory
vercel

# Follow the prompts to link your project
# Choose your production domain when prompted
```

### Option 3: Deploy via Git Webhook (Existing Repository)

1. Go to [vercel.com/import](https://vercel.com/import)
2. Paste your GitHub/GitLab repository URL
3. Follow the setup wizard
4. Vercel will deploy on every push to your default branch

### Vercel Documentation
- [Vercel Static Site Deployment](https://vercel.com/docs/concepts/deployments/overview)
- [Vercel CLI Reference](https://vercel.com/docs/cli)

---

## Netlify Deployment

Netlify offers drag-and-drop deployment and Git integration with easy build and deployment settings.

### Option 1: Deploy with Git Integration (Recommended)

1. **Push your code to GitHub/GitLab/Bitbucket**
   ```bash
   git push origin main
   ```

2. **Go to [netlify.com](https://netlify.com)** and sign in with your Git provider

3. **Click "New site from Git"**

4. **Select your repository**

5. **Configure Build Settings**
   - **Build Command:** Leave empty (or keep default)
   - **Publish Directory:** `.` (root directory)
   - **Environment Variables:** None needed for this project

6. **Click "Deploy site"**
   - Netlify will automatically deploy and assign a unique URL
   - Any future pushes to the main branch will auto-deploy

### Option 2: Deploy with Netlify CLI

```bash
# Install Netlify CLI globally
npm i -g netlify-cli

# Deploy from project directory
netlify deploy --prod

# Follow the prompts to authenticate and select your site
```

### Option 3: Drag & Drop Deployment

1. Go to [netlify.com](https://netlify.com) and log in
2. Drag and drop your project folder (or select the root directory)
3. Netlify will deploy your site immediately

### Option 4: Netlify TOML Configuration (Optional)

Create a `netlify.toml` file in your project root for advanced configuration:

```toml
[build]
  publish = "."
  command = ""

[context.production]
  environment = { CONTEXT = "production" }

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### Netlify Documentation
- [Netlify Deployment Guide](https://docs.netlify.com/site-deploys/create-deploys/)
- [Netlify CLI Reference](https://docs.netlify.com/cli/overview/)

---

## Cloudflare Pages Deployment

Cloudflare Pages provides fast, secure deployment with Cloudflare's global network.

### Option 1: Deploy with Git Integration (Recommended)

1. **Push your code to GitHub/GitLab/Bitbucket**
   ```bash
   git push origin main
   ```

2. **Go to [dash.cloudflare.com](https://dash.cloudflare.com)** and select your account

3. **Click "Pages" in the left sidebar** (under "Workers & Pages")

4. **Click "Create a project"** → **"Connect to Git"**

5. **Select your repository** from the list

6. **Configure Build Settings**
   - **Production branch:** `main` (or your default branch)
   - **Build command:** Leave empty
   - **Build output directory:** `.` (root directory)
   - **Environment variables:** None needed for this project

7. **Click "Save and Deploy"**
   - Cloudflare will deploy your site and assign a unique `*.pages.dev` URL
   - Any future pushes will auto-deploy

### Option 2: Deploy with Wrangler CLI

```bash
# Install Wrangler CLI
npm i -g wrangler

# Deploy from project directory
wrangler pages deploy .

# Follow the prompts to authenticate and create your project
```

### Option 3: Create `wrangler.toml` (Optional)

For advanced configuration, create a `wrangler.toml` file:

```toml
name = "ton-referral-keeper"
pages_build_output_dir = "."

[env.production]
name = "ton-referral-keeper-prod"
```

### Cloudflare Pages Documentation
- [Cloudflare Pages Deployment Guide](https://developers.cloudflare.com/pages/platform/deployments/)
- [Wrangler CLI Reference](https://developers.cloudflare.com/workers/wrangler/)

---

## Quality Assurance

After deploying to any platform, perform the following checks:

### Lighthouse Performance Audit

Lighthouse is an automated tool that audits your site for performance, accessibility, best practices, and SEO.

#### Run Lighthouse Locally (Chrome DevTools)

1. **Open your deployed site in Chrome**
2. **Open Chrome DevTools** (`F12` or `Cmd+Option+I`)
3. **Click "Lighthouse" tab** (may require scrolling through tabs)
4. **Select "Desktop" or "Mobile"** (test both)
5. **Click "Analyze page load"**
6. **Wait for the audit to complete**

#### Lighthouse Metrics to Check

- **Performance Score:** Aim for ≥ 90
- **Accessibility Score:** Aim for ≥ 90
- **Best Practices Score:** Aim for ≥ 90
- **SEO Score:** Aim for ≥ 90
- **First Contentful Paint (FCP):** < 1.8s (Good)
- **Largest Contentful Paint (LCP):** < 2.5s (Good)
- **Cumulative Layout Shift (CLS):** < 0.1 (Good)

#### Run Lighthouse via Command Line

If you prefer command-line testing:

```bash
# Install Lighthouse globally
npm i -g lighthouse

# Run audit on your deployed URL
lighthouse https://your-production-url.com --view

# Generate detailed report
lighthouse https://your-production-url.com --output=html --output-path=./lighthouse-report.html
```

#### Optimize if Needed

- **Compression:** Ensure Gzip/Brotli compression is enabled (most platforms do this automatically)
- **CDN Usage:** Verify Tailwind CSS and Alpine.js load from CDN
- **Image Optimization:** Unsplash images are already optimized
- **Caching:** Configure cache headers for static assets

#### Remote Lighthouse Testing

- [PageSpeed Insights](https://pagespeed.web.dev/) - Enter your URL
- [Web.dev Measure](https://web.dev/measure/) - Google's tool
- [GTmetrix](https://gtmetrix.com/) - Free performance analysis

---

### Telegram In-App Browser Check

The site is designed to work seamlessly within Telegram's in-app browser.

#### Manual Testing Steps

1. **Open Telegram on mobile device**

2. **Send yourself this link:**
   ```
   https://your-production-url.com
   ```

3. **Tap the link in Telegram** to open in the in-app browser

4. **Verify the following:**

   - [ ] **Page Loads Correctly**
     - All text and images render properly
     - No 404 errors in console
     - Layout is responsive and mobile-friendly

   - [ ] **Navigation Works**
     - All internal links navigate correctly
     - Hamburger menu (mobile) opens and closes
     - Sticky navigation bar is visible at top

   - [ ] **Interactive Elements Function**
     - Click "Join Community" → Opens Telegram chat in new window
     - Click "Start Earning" → Opens Telegram bot with start parameter
     - Animated counters display correct values
     - Floating coins animate smoothly

   - [ ] **Copy-to-Clipboard Feature**
     - Click referral code or wallet address
     - Visual feedback appears (toast notification)
     - Code/address is copied to clipboard

   - [ ] **Telegram Modal**
     - Modal may auto-open after 8 seconds
     - Close button (✕) works
     - "Open Telegram" link opens bot

   - [ ] **Performance**
     - Page responds quickly to taps
     - Animations are smooth (no stuttering)
     - No console errors or warnings

   - [ ] **Responsiveness**
     - Layout adapts to portrait and landscape
     - Touch targets are large enough to tap
     - Text is readable without zooming

#### Browser Console Check

1. **Open DevTools in Telegram in-app browser:**
   - Android: Long-press on page → "Inspect Element"
   - iOS: Limited console access; check for errors in page behavior

2. **Look for:**
   - No red error messages
   - CDN resources load successfully
   - Alpine.js initializes without errors

#### Test Links

- **Telegram Bot Link:** `https://t.me/TONReferralKeeperBot?start=web2025`
- **Community Chat Link:** `https://t.me/community`
- **Support Email:** `support@tonreferralkeeper.com`

All should open correctly from within Telegram.

---

## Post-deployment

After successful deployment and QA checks:

1. **Update DNS Records** (if using custom domain)
   - Add CNAME or A record pointing to your deployment platform
   - Wait for DNS propagation (usually 5-30 minutes)

2. **Test Custom Domain**
   - Access site via custom domain
   - Verify SSL certificate is valid
   - Re-run Lighthouse audit on custom domain

3. **Set Up Monitoring** (Optional)
   - Enable status page monitoring
   - Configure uptime alerts
   - Set up error tracking

4. **Update Links**
   - Update social media links to point to new URL
   - Update email signatures
   - Update Telegram bio/links

5. **Enable Analytics** (Optional)
   - Add Google Analytics or similar
   - Track user engagement and traffic

---

## Production URLs

Once deployed, update the URLs below with your live production domains:

### Primary Production URL
```
🔗 PRODUCTION URL: [INSERT URL HERE]
   Example: https://tonreferralkeeper.com
   or: https://ton-keeper.vercel.app
   or: https://ton-keeper.netlify.app
   or: https://ton-keeper.pages.dev
```

### Alternative Deployment URLs
```
📌 Vercel:     [INSERT VERCEL URL HERE]
📌 Netlify:    [INSERT NETLIFY URL HERE]
📌 Cloudflare: [INSERT CLOUDFLARE URL HERE]
```

### Domain Configuration
```
🌐 Custom Domain: [INSERT CUSTOM DOMAIN HERE]
   SSL Certificate: [Auto/Manual]
   Renewal Status: [Status]
```

### Staging/Preview URL (Optional)
```
🔗 Staging URL: [INSERT STAGING URL HERE]
   Branch: [BRANCH NAME]
   Purpose: Testing new features
```

---

## Troubleshooting

### Common Issues and Solutions

#### Issue: Site Not Deploying
- **Solution:** Check if `index.html` exists in project root
- **Solution:** Verify `.gitignore` isn't excluding important files
- **Solution:** Check deployment logs in platform dashboard

#### Issue: External Resources Not Loading (CDN timeouts)
- **Solution:** Vercel/Netlify/Cloudflare have fallback CDN caching
- **Solution:** Check browser console for specific failed resources
- **Solution:** Test with different CDN versions if needed

#### Issue: Telegram Links Not Working
- **Solution:** Verify Telegram bot ID is correct: `TONReferralKeeperBot`
- **Solution:** Ensure start parameter is correct: `?start=web2025`
- **Solution:** Test link directly in browser first, then in Telegram

#### Issue: Lighthouse Score Low
- **Solution:** Run lighthouse in incognito mode
- **Solution:** Check for render-blocking resources
- **Solution:** Enable compression and caching headers

#### Issue: Layout Issues on Mobile
- **Solution:** Test in responsive design mode (Chrome DevTools)
- **Solution:** Verify Tailwind CSS loads correctly
- **Solution:** Check for hardcoded viewport sizes

---

## Support

For deployment issues or questions:

- 📧 **Email Support:** [support@tonreferralkeeper.com](mailto:support@tonreferralkeeper.com)
- 💬 **Telegram Chat:** [Community Group](https://t.me/community)
- 🤖 **Telegram Bot:** [TON Referral Keeper Bot](https://t.me/TONReferralKeeperBot?start=web2025)

---

**Last Updated:** 2025  
**Version:** 1.0  
**Status:** Production Ready
