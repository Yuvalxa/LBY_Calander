# 📸 Daily Pictures Feature - ADDED! 

Your LBY countdown app now includes **28 different pictures** that change automatically each day! Here's everything you need to know.

---

## ✨ What's New

### Daily Picture Display
- ✅ New picture displays each day automatically
- ✅ Beautiful animations with hover effects
- ✅ Responsive design (scales for mobile/tablet/desktop)
- ✅ Custom caption for each day
- ✅ Smooth transitions between days

### Current Setup
- **Placeholder SVG images** with colorful backgrounds and day numbers
- Ready for you to replace with **real Lior pictures**
- All 28 days mapped and ready to go

---

## 🎯 How It Works

### The Picture System
```
Today (Feb 5) → Shows DAY 1 picture
Tomorrow (Feb 6) → Shows DAY 2 picture
...continues daily...
March 5 → Shows DAY 28 picture (FINAL!)
```

### File Structure
```
src/
├── images/
│   ├── day-01.svg  ← Your pictures here
│   ├── day-02.svg
│   └── ... day-28.svg
└── pictures.json   ← Maps days to captions
```

---

## 🚀 Replace Placeholder Images with Real Photos

### Quick 3-Step Process

**Step 1: Prepare Your Pictures**
- Gather 28 photos of Lior (or as many as you have)
- Portrait orientation works best
- JPG or PNG format (smaller = faster)
- Recommended: ~400x500 pixels

**Step 2: Replace the SVG Files**
- Go to `src/images/` folder
- Replace `day-01.svg` with `day-01.jpg` (your photo)
- Replace `day-02.svg` with `day-02.jpg` (your photo)
- Continue for all 28 days (or however many you have)

**Step 3: Update pictures.json**
- Open `src/pictures.json`
- Change `.svg` to `.jpg` (or your image format)
- Optionally update captions if desired

**Step 4: Push to GitHub**
```bash
git add src/images/
git add src/pictures.json
git commit -m "Add Lior's daily pictures!"
git push
```
Auto-deploys in 3 minutes! 🚀

---

## 📝 Example: How to Replace Images

### Before (Placeholder):
```json
{
  "day": 1,
  "image": "/LiorProject/src/images/day-01.svg",
  "caption": "Day 1 - The Beginning of the End"
}
```

### After (Your Photos):
```json
{
  "day": 1,
  "image": "/LiorProject/src/images/day-01.jpg",
  "caption": "Day 1 - Looking Fresh!"
}
```

---

## 🎨 Current Captions (You Can Customize These Too!)

- Day 1: "The Beginning of the End"
- Day 2: "Countdown Intensifies"
- Day 7: "One Week Wonder"
- Day 14: "Officially Halfway There"
- Day 21: "One Week Left"
- Day 28: "IT'S TODAY!!!"
- ...and 22 more!

All captions are in `src/pictures.json` - feel free to customize!

---

## 🎯 Picture Ideas

- **Funny moments** with the team
- **Office photos** of Lior at work
- **Silly faces** and expressions
- **Memes** about his departure
- **Professional headshots** with funny filters
- **Themed pictures** (one genre per day)
- **Animated GIFs** (yep, these work too!)
- **Message boards** with team messages
- **Countdown graphics** you create
- **Photo collages** from his time here

---

## ✅ Features Included

- 🎨 **Beautiful Display** - Rounded corners, shadows, hover effects
- 📱 **Mobile Optimized** - Scales perfectly on phones/tablets
- ⚡ **Fast Loading** - Optimized for web
- 🔄 **Auto-Updates** - Picture changes at midnight daily
- 🏷️ **Smart Captions** - Custom text for each day
- 💫 **Smooth Animations** - Slide and fade effects

---

## 📁 What Was Added

**New Files:**
- `src/images/` folder with 28 SVG placeholders
- `src/pictures.json` - Picture configuration
- `PICTURES_GUIDE.md` - Detailed replacement instructions

**Updated Files:**
- `src/CountdownTimer.jsx` - Added picture display logic
- `src/CountdownTimer.css` - Added picture styling & animations

---

## 🔧 Advanced Options

### Use External URLs
```json
{
  "day": 1,
  "image": "https://example.com/lior-picture.jpg",
  "caption": "Day 1"
}
```

### Same Picture for Multiple Days
Just copy the same image path to multiple days in `pictures.json`.

### Mix Local and External
```json
{
  "day": 1,
  "image": "/LiorProject/src/images/day-01.jpg",
  "caption": "Local image"
},
{
  "day": 2,
  "image": "https://example.com/lior.jpg",
  "caption": "External image"
}
```

---

## 📊 Picture Statistics

- **Total picture slots:** 28
- **Supported formats:** JPG, PNG, WebP, SVG, GIF
- **Recommended aspect ratio:** 4:5 (portrait)
- **Ideal size:** 400x500 pixels
- **Recommended file size:** <500KB each

---

## ❓ FAQ

**Q: Do I have to use all 28 days?**  
A: No! Use as many as you want. Unused days will show the last picture you defined.

**Q: Can I change pictures after deployment?**  
A: Yes! Just update the files and push. Auto-redeploys in 3 minutes.

**Q: What if a picture doesn't load?**  
A: Check the file path in `pictures.json` and verify the image exists.

**Q: Can I use animated GIFs?**  
A: Absolutely! Just use `.gif` extension in the path.

**Q: What size should pictures be?**  
A: 400x500 pixels (4:5 ratio) looks best. Smaller sizes load faster.

---

## 📖 Full Documentation

For complete details on replacing images, see: [PICTURES_GUIDE.md](PICTURES_GUIDE.md)

---

## 🎉 Next Steps

1. **Gather Lior pictures** (28 is ideal, but use whatever you have)
2. **Replace the SVG files** in `src/images/` with your JPG/PNG files
3. **Update `pictures.json`** with new file paths and captions
4. **Commit and push** to GitHub
5. **Share the link** with your team! 📸

---

## 🚀 Current Status

✅ Picture display system ready  
✅ 28 placeholder images created  
✅ Daily rotation logic implemented  
✅ Mobile responsive styling added  
✅ GitHub deployment configured  

**All you need to do:** Add your Lior photos! 📸

---

**Ready to add your pictures?** Check [PICTURES_GUIDE.md](PICTURES_GUIDE.md) for detailed instructions.

**Questions?** See [README.md](README.md) for general project info.
