# 🚀 Setup & Deployment Instructions

## Step 1: Create a GitHub Repository

1. Go to [GitHub.com](https://github.com) and log in to your account
2. Click the **+** icon in the top-right corner and select **New repository**
3. Repository name: `LiorProject`
4. Description: `LBY's Last Days Countdown - A hilarious countdown timer`
5. Choose **Public** (so it can be shared)
6. **Do NOT** initialize with README, .gitignore, or license (we already have these)
7. Click **Create repository**

## Step 2: Connect Local Repository to GitHub

After creating the repository, GitHub will show you commands. Run these in your terminal:

```bash
cd path/to/LiorProject
git branch -M main
git remote add origin https://github.com/Yuval-Mastey_operativ/LiorProject.git
git push -u origin main
```

**Note:** Replace `Yuval-Mastey_operativ` with your actual GitHub username if different.

## Step 3: Enable GitHub Pages

1. Go to your repository on GitHub: `https://github.com/Yuval-Mastey_operativ/LiorProject`
2. Click **Settings** (top menu)
3. Scroll down to **Pages** in the left sidebar
4. Under "Build and deployment":
   - Source: Select **GitHub Actions**
   - This will automatically deploy from the `.github/workflows/deploy.yml` file we created

## Step 4: View Your Live App

After pushing and the workflow completes (~2-5 minutes):

**Your app will be live at:**
```
https://Yuval-Mastey_operativ.github.io/LiorProject/
```

### Monitor Deployment:
1. Go to your repository
2. Click the **Actions** tab
3. Watch for the "Deploy to GitHub Pages" workflow to complete
4. Once it shows a ✅ green check, your app is live!

## Step 5: Share the Countdown! 🎉

Copy your GitHub Pages URL and share it with:
- Your team
- Your boss
- Everyone who wants to celebrate LBY's departure!

## 🔄 Updating Quotes

To update quotes or make any changes:

1. Edit files locally (e.g., `src/quotes.json`)
2. Commit and push to GitHub:
   ```bash
   git add .
   git commit -m "Update quotes for LBY countdown"
   git push
   ```
3. GitHub Actions will automatically rebuild and redeploy
4. Check the Actions tab to confirm deployment completed

## 🎨 Making Custom Changes

### Update Target Date:
Edit `src/CountdownTimer.jsx`:
```javascript
const targetDate = new Date('2026-03-05T00:00:00').getTime();
```

### Change Colors:
Edit `src/CountdownTimer.css` - modify the gradient in `.countdown-container`:
```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

### Add More Quotes:
Add to `src/quotes.json` array:
```json
{
  "day": 29,
  "text": "Your custom quote here",
  "type": "roast"
}
```

## ⚠️ Troubleshooting

**App shows blank page?**
- Wait 2-3 minutes after pushing for deployment to complete
- Check GitHub Actions tab for errors
- Verify you're using the correct GitHub Pages URL

**Quotes not updating?**
- Make sure you push to the `main` branch
- Check that `src/quotes.json` is valid JSON (no trailing commas)
- Wait for GitHub Actions workflow to complete

**Build failed?**
- Check the Actions tab for error messages
- Verify `src/CountdownTimer.jsx` has no syntax errors
- Try running `npm run build` locally to test

## 📞 Need Help?

- Check the README.md for more info
- Visit the Actions tab to see detailed build logs
- GitHub Pages documentation: https://docs.github.com/en/pages

---

**Happy countdown! 🎉 Let's celebrate LBY's legendary departure!**
