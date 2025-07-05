# Deployment Guide

## Cloudflare Pages Deployment

This project is configured for deployment on Cloudflare Pages with static export.

### Setup Instructions

1. **Connect your repository to Cloudflare Pages:**
   - Go to [Cloudflare Pages](https://pages.cloudflare.com/)
   - Click "Create a project"
   - Connect your Git repository

2. **Configure build settings:**
   ```
   Framework preset: Next.js (Static HTML Export)
   Build command: npm run build:cloudflare
   Build output directory: out
   Root directory: (leave blank unless in subdirectory)
   ```

3. **Environment Variables (if needed):**
   Add these in Cloudflare Pages settings:
   ```
   NODE_ENV=production
   NEXT_TELEMETRY_DISABLED=1
   ```

4. **Custom Domain:**
   - Add your custom domain in Cloudflare Pages
   - Update the `metadataBase` URL in `app/layout.tsx`
   - Update the `baseUrl` in `app/sitemap.ts`
   - Update the Sitemap URL in `public/robots.txt`

### Build Commands

- **Development:** `npm run dev`
- **Production build:** `npm run build:cloudflare`
- **Preview locally:** `npm run preview`
- **Type checking:** `npm run type-check`
- **Linting:** `npm run lint`

### Performance Optimizations Included

- Static export for faster loading
- Image optimization disabled for static hosting
- Security headers configured
- Caching headers for static assets
- Console removal in production
- SEO optimizations (sitemap, robots.txt, meta tags)
- PWA manifest

### Files Created for Production

- `public/_headers` - Cloudflare Pages headers configuration
- `public/_redirects` - Cloudflare Pages redirects configuration
- `public/robots.txt` - Search engine indexing rules
- `public/manifest.json` - PWA manifest
- `app/sitemap.ts` - Dynamic sitemap generation
- `.env.production` - Production environment variables
- `.env.local.example` - Template for local environment variables

### Post-Deployment Checklist

- [ ] Verify all pages load correctly
- [ ] Check that images and assets are loading
- [ ] Test SEO meta tags with tools like [OpenGraph.xyz](https://www.opengraph.xyz/)
- [ ] Verify sitemap is accessible at `/sitemap.xml`
- [ ] Test robots.txt at `/robots.txt`
- [ ] Check performance with [PageSpeed Insights](https://pagespeed.web.dev/)
- [ ] Verify security headers with [SecurityHeaders.com](https://securityheaders.com/)

### Monitoring and Analytics

Consider adding:
- Google Analytics or Cloudflare Analytics
- Error monitoring (Sentry, etc.)
- Performance monitoring
- Uptime monitoring

### Domain Configuration

Remember to update these URLs with your actual domain:
- `metadataBase` in `app/layout.tsx`
- `baseUrl` in `app/sitemap.ts`
- Sitemap URL in `public/robots.txt`
- Environment variables in `.env.production`
