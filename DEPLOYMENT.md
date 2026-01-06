# 🚀 Deploy Your Portfolio to GitHub Pages

## Quick Deployment Steps:

### Step 1: Create GitHub Repository

1. Go to https://github.com/new
2. Name your repo: `portfolio` (or any name you like)
3. Keep it **Public**
4. **Don't** initialize with README (we already have code)
5. Click "Create repository"

### Step 2: Configure Vite for GitHub Pages

Update `vite.config.ts` - change line 6 to:

```typescript
export default defineConfig(({ mode }) => ({
  base: '/portfolio/', // Replace 'portfolio' with your repo name
  server: {
    host: "::",
    port: 8080,
  },
  // ... rest stays the same
}));
```

### Step 3: Initialize Git & Push

Run these commands in your terminal:

```bash
cd ./Developer/CODE/Portfolio

# Initialize git
git init

# Add all files
git add .

# Commit
git commit -m "Initial portfolio commit"

# Add your GitHub repo (replace YOUR-USERNAME and REPO-NAME)
git remote add origin https://github.com/YOUR-USERNAME/REPO-NAME.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 4: Deploy to GitHub Pages

```bash
npm run deploy
```

This will:
- Build your portfolio
- Create a `gh-pages` branch
- Push the built files to GitHub

### Step 5: Enable GitHub Pages

1. Go to your repo on GitHub
2. Click **Settings** → **Pages**
3. Under "Source", select **gh-pages** branch
4. Click **Save**

**Your portfolio will be live at:**
`https://YOUR-USERNAME.github.io/REPO-NAME/`

---

## 🔒 Important: Protect Your API Keys!

Before pushing to GitHub:

1. Make sure `.env` is in `.gitignore` (it already is!)
2. Your API keys are safe and won't be pushed
3. When deployed, you'll need to add them via GitHub Secrets or environment variables

---

## 📝 Quick Checklist:

- [ ] Create GitHub repository
- [ ] Update `vite.config.ts` with base path
- [ ] Initialize git and push code
- [ ] Run `npm run deploy`
- [ ] Enable GitHub Pages in repo settings
- [ ] Visit your live portfolio! 🎉

---

## Need Help?

Let me know your GitHub username and I can configure everything for you! 😊
