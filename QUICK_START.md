# ⚡ QUICK START GUIDE - LBY's Countdown

## 🎯 TL;DR - Deploy in 5 Minutes

### Step 1: Create GitHub Repo
1. Go to https://github.com/new
2. Name it: `LiorProject`
3. Make it Public
4. Click "Create"

### Step 2: Push Your Code
Copy-paste these commands (replace YOUR_USERNAME):
```bash
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/LiorProject.git
git push -u origin main
```

### Step 3: Enable GitHub Pages
1. Go to repo → Settings → Pages
2. Source: GitHub Actions
3. Done! ✅

### Step 4: View Your App
Wait 3 minutes, then visit:
```
https://YOUR_USERNAME.github.io/LiorProject/
```

---

## 📝 Edit Quotes Anytime

1. Open `src/quotes.json`
2. Change any quote text
3. Save & commit:
   ```bash
   git add src/quotes.json
   git commit -m "Update quotes"
   git push
   ```
4. App updates in 3 minutes! 🎉

---

## 🧪 Test Locally First

```bash
npm install
npm run dev
```

Then visit: http://localhost:5173/LiorProject/

---

## 📱 What You Get

✅ **28-day countdown** to March 5, 2026  
✅ **Real-time timer** (days:hours:minutes:seconds)  
✅ **Funny daily quotes** (mix of roasts & facts)  
✅ **Beautiful animations** (glassmorphism UI)  
✅ **Mobile responsive** (works on phones!)  
✅ **Easy quote management** (just edit JSON)  

---

## 🎨 Current Quotes Flavor

- Roasts: "Only 26 days until we get a quiet conference room!"
- Facts: "Fact: LBY invented the strategic last-minute email"
- Final: "IT'S TODAY! LBY is officially LEAVING!"

All 28 quotes about Lior's departure = pure comedy! 😄

---

## 🚨 Common Issues

| Issue | Solution |
|-------|----------|
| Blank page | Wait 3 min for deploy, check Actions tab |
| Quotes not showing | Verify `quotes.json` has valid JSON |
| Build failed | Check Actions tab for error details |
| Can't access app locally | Run `npm run dev` first |

---

## 📞 Need More Info?

- **Full setup:** See `SETUP.md`
- **Deployment details:** See `DEPLOYMENT_READY.md`
- **Project info:** See `README.md`

---

**That's it! Your countdown is ready to deploy! 🚀**
