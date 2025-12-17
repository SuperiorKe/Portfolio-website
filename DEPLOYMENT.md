# Vercel Deployment Guide

## Prerequisites

1. **GitHub Account** - Your code should be in a GitHub repository
2. **Vercel Account** - Sign up at [vercel.com](https://vercel.com) (free tier is sufficient)

## Deployment Steps

### Option 1: Deploy via Vercel Dashboard (Recommended)

1. **Push your code to GitHub**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Import Project to Vercel**
   - Go to [vercel.com/new](https://vercel.com/new)
   - Click "Import Git Repository"
   - Select your GitHub repository (`superiatech-v2`)
   - Vercel will auto-detect it's a Vite project

3. **Configure Project Settings**
   - **Framework Preset**: Vite (auto-detected)
   - **Root Directory**: `./` (leave as default)
   - **Build Command**: `npm run build` (auto-detected)
   - **Output Directory**: `dist` (auto-detected)
   - **Install Command**: `npm install` (auto-detected)

4. **Environment Variables** (if needed)
   - Add any environment variables in the Vercel dashboard
   - For this portfolio, you likely don't need any

5. **Deploy**
   - Click "Deploy"
   - Wait for build to complete (~1-2 minutes)
   - Your site will be live at `your-project-name.vercel.app`

### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel
   ```
   - Follow the prompts
   - For production deployment: `vercel --prod`

## Post-Deployment

### Custom Domain (Optional)

1. Go to your project settings in Vercel dashboard
2. Navigate to "Domains"
3. Add your custom domain (e.g., `kennmacharia.dev`)
4. Follow DNS configuration instructions

### Image Optimization

**Vercel automatically optimizes images** when deployed:
- Images are automatically converted to WebP format when supported by the browser
- Images are served via Vercel's CDN with automatic compression
- No additional configuration needed

**Note**: Your PNG images will work perfectly. Vercel's Image Optimization API will:
- Serve WebP to browsers that support it
- Fall back to original format for older browsers
- Automatically compress and optimize

### Performance Optimization

Vercel automatically:
- ✅ Optimizes images (WebP conversion, compression)
- ✅ Minifies CSS and JavaScript
- ✅ Enables Gzip/Brotli compression
- ✅ Serves via global CDN
- ✅ Provides SSL certificates

## Build Verification

Before deploying, verify your build works locally:
```bash
npm run build
npm run preview
```

Visit `http://localhost:4173` to preview the production build.

## Troubleshooting

### Build Fails
- Check Node.js version (Vercel uses Node 20.x by default)
- Verify all dependencies are in `package.json`
- Check build logs in Vercel dashboard

### Images Not Loading
- Ensure images are in `public/images/` directory
- Check image paths in components match actual filenames
- Verify images are committed to Git

### Styles Not Applying
- Ensure `tailwind.config.js` includes all file paths
- Check that `postcss.config.js` is present
- Verify `src/index.css` imports Tailwind directives

## File Structure Checklist

Ensure these files exist:
- ✅ `vercel.json` - Vercel configuration
- ✅ `tailwind.config.js` - Tailwind configuration
- ✅ `postcss.config.js` - PostCSS configuration
- ✅ `public/resume.pdf` - Resume file
- ✅ `public/images/projects/*.png` - Project images

## Quick Deploy Commands

```bash
# Build locally to test
npm run build

# Deploy to Vercel (first time)
vercel

# Deploy to production
vercel --prod

# View deployment logs
vercel logs
```

## Next Steps After Deployment

1. ✅ Test all links (GitHub, LinkedIn, Email, WhatsApp)
2. ✅ Verify resume download works
3. ✅ Check images load correctly
4. ✅ Test on mobile devices
5. ✅ Run Lighthouse audit for performance
6. ✅ Share your portfolio URL!

---

**Your portfolio is ready to deploy!** 🚀

