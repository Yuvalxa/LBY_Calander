# 📸 How to Add Your Lior Pictures

Your countdown app now displays a **different picture for each day!** Here's how to replace the placeholder images with real photos of Lior.

## 🎯 Quick Overview

- **28 placeholder images** in `src/images/` folder (one for each day)
- **Pictures.json** maps each day to its image file
- App automatically displays the **correct picture for today**
- Pictures update at midnight daily

---

## 📁 File Structure

```
src/
├── images/
│   ├── day-01.svg     ← Replace with your picture
│   ├── day-02.svg     ← Replace with your picture
│   ├── day-03.svg     ← Replace with your picture
│   └── ... day-28.svg
└── pictures.json      ← Maps days to images
```

---

## ✅ Step-by-Step: Replace Images

### Option 1: Use JPG/PNG Photos (Recommended)

**Step 1:** Prepare your images
- Gather 28 photos of Lior (or however many you have)
- Recommended size: 400x500 pixels (portrait orientation)
- Supported formats: JPG, PNG, WebP
- Smaller file sizes = faster loading!

**Step 2:** Copy images to `src/images/` folder
1. Open the `src/images/` folder on your computer
2. Replace each `day-01.svg`, `day-02.svg`, etc. with your JPG/PNG files
3. Keep the same naming: `day-01.jpg`, `day-02.jpg`, etc.

**Step 3:** Update `src/pictures.json`
- Change image paths from `.svg` to your file extension
- Example:
```json
{
  "day": 1,
  "image": "/LiorProject/src/images/day-01.jpg",  // Changed from .svg to .jpg
  "caption": "Day 1 - The Beginning of the End"
}
```

**Step 4:** Commit and push
```bash
git add src/images/
git add src/pictures.json
git commit -m "Add Lior's daily pictures"
git push
```

### Option 2: Use External Image URLs

If you prefer hosting images elsewhere (Google Drive, Imgur, etc.):

1. Upload your image to a public hosting service
2. Get the direct image URL
3. Update `src/pictures.json`:
```json
{
  "day": 1,
  "image": "https://example.com/lior-day-1.jpg",  // Your URL here
  "caption": "Day 1 - The Beginning of the End"
}
```

---

## 🎨 Tips for Best Results

### Image Format
- **Portrait orientation** looks best (vertical photos)
- **4:5 aspect ratio** is ideal (400x500 pixels)
- **JPG files** are smallest (better for web)
- **PNG** if you need transparency

### File Size
- Keep images under 500KB each for fast loading
- Use compression tools like:
  - https://tinypng.com/
  - https://imageresizer.com/
  - Built-in photo editing tools

### Picture Ideas
- Professional headshots
- Funny office moments
- Memes about Lior
- Team photos
- Themed pictures (one per day)
- Countdown-style graphics
- Animated GIFs (supported!)

---

## 🔄 How It Works

### The Countdown Logic
```javascript
// App calculates how many days from Feb 5 to the current date
// Day 1 = Feb 5 (28 days left)
// Day 2 = Feb 6 (27 days left)
// ...
// Day 28 = Mar 5 (0 days left - TODAY!)
```

### Picture Mapping
```json
{
  "day": 1,
  "image": "path/to/image.jpg",
  "caption": "Day 1 - The Beginning of the End"
}
```

- **day**: Which day of countdown (1-28)
- **image**: Full path or URL to the image
- **caption**: Text shown below the picture

---

## ❓ Common Questions

**Q: Can I use GIFs?**  
A: Yes! GIFs work perfectly. Just use `.gif` extension.

**Q: What if I don't have 28 pictures?**  
A: That's okay! Use the same picture for multiple days by duplicating entries in `pictures.json`.

**Q: Can I change pictures after deployment?**  
A: Absolutely! Just update the files, commit, and push. GitHub Pages will redeploy within 3-5 minutes.

**Q: Image isn't showing?**  
A: 
- Check file path in `pictures.json` is correct
- Make sure filename matches exactly (case-sensitive on some servers)
- Verify image file exists in `src/images/` folder
- Check browser console (F12) for errors

**Q: How do I find my image path?**  
A: The format is: `/LiorProject/src/images/your-filename.jpg`

---

## 📝 Example: Full Setup

### Your pictures.json
```json
{
  "pictures": [
    {
      "day": 1,
      "image": "/LiorProject/src/images/day-01.jpg",
      "caption": "Day 1 - Looking fresh!"
    },
    {
      "day": 2,
      "image": "/LiorProject/src/images/day-02.jpg",
      "caption": "Day 2 - Still got it"
    },
    {
      "day": 3,
      "image": "https://example.com/funny-lior.jpg",
      "caption": "Day 3 - Peak comedy"
    }
  ]
}
```

---

## 🚀 Quick Commands

```bash
# After replacing images, use these commands:

# Add the changed images
git add src/images/

# Update the picture config
git add src/pictures.json

# Commit your changes
git commit -m "Update Lior's daily pictures!"

# Push to GitHub (auto-deploys)
git push

# Check deployment status at:
# https://github.com/YOUR_USERNAME/LiorProject/actions
```

---

## 📞 Troubleshooting

**Images look tiny:**
- Make sure you're using images with proper aspect ratio
- CSS handles scaling automatically

**Images aren't loading:**
- Verify file paths in `pictures.json`
- Check that images actually exist in `src/images/`
- Open browser console (F12) for error messages

**Deployment stuck:**
- Go to GitHub Actions tab
- Check if build is failing
- Fix any JSON syntax errors in `pictures.json`

---

## 🎉 You're All Set!

Now your countdown app will display a **new hilarious Lior picture every day** leading up to March 5, 2026!

**Next:** Gather your best Lior photos and start adding them! 📸

**Questions?** Check the README.md or QUICK_START.md files.
