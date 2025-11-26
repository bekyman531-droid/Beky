# TON Referral Keeper Landing Page

A modern, responsive landing page for the TON Referral Keeper platform—built with pure HTML5, Tailwind CSS, and Alpine.js.

## 🚀 Quick Start

This is a **static HTML site** with no build process required. Simply open `index.html` in a browser or deploy to any static hosting platform.

### Project Files
- `index.html` - Main landing page
- `privacy.html` - Privacy Policy
- `terms.html` - Terms of Service
- `support.html` - Support/Help center
- `app.js` - Interactive Alpine.js application logic
- `styles.css` - Custom animations and styling
- `DEPLOYMENT.md` - Deployment guide (see below)

## ✨ Features

- **📱 Mobile-First Responsive Design** - Works beautifully on all devices
- **🎨 Modern UI with Glass Morphism** - Dark blue Tonkeeper-inspired theme
- **✨ Animated Floating Coins** - Dynamic CSS and Alpine.js animations
- **📊 Live Animated Counters** - Real-time user, deposit, and reward statistics
- **💬 Telegram Integration** - Bot links, community chat, and in-app browser optimization
- **🎯 Copy-to-Clipboard** - Easy referral code sharing with visual feedback
- **⚡ Performance Optimized** - CDN-based dependencies, lazy loading, optimized images
- **🔒 Complete Legal Pages** - Privacy Policy, Terms of Service, Support center
- **♿ Accessible** - Semantic HTML, ARIA labels, keyboard navigation

## 🛠️ Tech Stack

- **HTML5** - Semantic markup
- **Tailwind CSS** - Utility-first CSS via CDN
- **Alpine.js** - Lightweight reactive JavaScript framework
- **Custom CSS** - Advanced animations and transitions

## 📋 Deployment

This site is ready to deploy to any static hosting platform with zero configuration:

- **[Vercel](https://vercel.com)** - Connect GitHub, automatic deployments
- **[Netlify](https://netlify.com)** - Git integration, drag-and-drop deployment
- **[Cloudflare Pages](https://pages.cloudflare.com)** - Fast global CDN

**👉 See [DEPLOYMENT.md](./DEPLOYMENT.md) for complete deployment instructions including:**
- One-click deploy flows for Vercel, Netlify, and Cloudflare Pages
- Lighthouse performance audit steps
- Telegram in-app browser testing checklist
- Quality assurance procedures
- Production URL tracking

## 🔗 External Links

- **Telegram Bot:** `https://t.me/TONReferralKeeperBot?start=web2025`
- **Community Chat:** `https://t.me/community`
- **Email Support:** `support@tonreferralkeeper.com`

## 📊 Performance

- ⚡ **Lighthouse Score:** Target 90+
- 🚀 **First Contentful Paint:** < 1.8s
- 📦 **Optimized Images:** External CDN with fallbacks
- 🔄 **Smooth Animations:** GPU-accelerated CSS transforms

## 🧪 Testing

### Local Testing
1. Open `index.html` in your browser
2. Test all interactive elements:
   - Navigation menu
   - Referral code copying
   - Telegram links
   - Responsive layout on mobile

### Lighthouse Audit
1. Open site in Chrome
2. DevTools → Lighthouse
3. Run audit for Desktop and Mobile
4. Target scores: 90+ for all metrics

### Telegram In-App Browser
1. Send site URL to yourself in Telegram
2. Open link in Telegram's in-app browser
3. Verify:
   - Layout is responsive
   - All links work
   - Animations are smooth
   - No console errors

## 📝 Customization

### Update Branding
- Edit `index.html` for title, meta tags, colors
- Modify Telegram links to your bot/community
- Update email in footer to your support address

### Modify Colors
In `index.html`, search for CSS custom properties:
```css
:root {
  --color-primary: #0f172a;
  --color-secondary: #1e3a5f;
  --color-accent: #00d4ff;
}
```

### Add New Sections
- Edit `index.html` directly
- Use existing Tailwind CSS classes for consistency
- Test responsiveness with DevTools

## 🐛 Troubleshooting

### CDN Resources Not Loading
- Check browser console for blocked requests
- Verify internet connection
- Try incognito mode to bypass browser cache

### Animations Stuttering
- Check browser GPU acceleration settings
- Reduce other open tabs/applications
- Test on different browsers

### Telegram Links Not Opening
- Verify bot username is correct
- Ensure Telegram app is installed
- Test on different devices

## 📄 License

All rights reserved. This project is proprietary.

## 📧 Support

- **Email:** support@tonreferralkeeper.com
- **Telegram Community:** https://t.me/community
- **Telegram Bot:** https://t.me/TONReferralKeeperBot?start=web2025

---

**Status:** Production Ready  
**Last Updated:** 2025  
**Version:** 1.0
