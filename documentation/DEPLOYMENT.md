# Deployment Guide

## Local Development

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```
   This will open the presentation at `http://localhost:3000`

## Deploy to Vercel

### Option 1: Using Vercel CLI (Recommended)

1. **Install Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Deploy:**
   ```bash
   vercel
   ```
   - Follow the prompts
   - Choose "yes" to link to existing project or create new one
   - The deployment URL will be provided

### Option 2: Using Vercel Dashboard

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Enterprise AI 2032 presentation"
   git remote add origin https://github.com/yourusername/enterprise-ai-2032-presentation.git
   git push -u origin main
   ```

2. **Connect to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will automatically detect it's a static site
   - Click "Deploy"

### Option 3: Quick Deploy

1. **Drag and drop the project folder to [vercel.com/new](https://vercel.com/new)**
   - Vercel will automatically deploy it
   - You'll get a live URL instantly

## Environment Configuration

- **Framework Preset:** Other (Static Site)
- **Build Command:** Not needed (static files)
- **Output Directory:** `.` (root directory)
- **Install Command:** `npm install`

## Live URL

Once deployed, your presentation will be available at:
`https://your-project-name.vercel.app`

Share this link with your university for live viewing!

## Updating the Presentation

1. Make changes to the code
2. Commit and push to GitHub (if using GitHub integration)
3. Vercel will automatically redeploy
4. Or run `vercel --prod` for manual deployment

## Custom Domain (Optional)

You can add a custom domain in Vercel dashboard:
1. Go to your project settings
2. Add domain (e.g., `enterprise-ai-2032.com`)
3. Follow DNS configuration instructions