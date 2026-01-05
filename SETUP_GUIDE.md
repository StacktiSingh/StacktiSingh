# GitHub Profile Setup Guide

This is your clean, focused GitHub profile README generator! Follow these steps to set it up:

## 🚀 Quick Setup

### 1. Replace Placeholder Information

**In `src/data.js`:**
- Replace `YOUR_GITHUB_USERNAME` with your actual GitHub username
- Update `startedProgramming` date (MM/DD/YYYY format)
- Update all URLs in the `badges` and `socialMedias` sections
- Add/remove skills in the `skills` array
- Set `isHighlighted: true` for your strongest skills

**In `README_TEMPLATE.md`:**
- Replace `YOUR_GITHUB_USERNAME` in all image URLs
- Update the personal information in the "About Me" section
- Customize your quote/motto at the top

### 2. Add Your Images

You'll need these images in `src/resources/images/`:
- `banner.svg` - Your header banner (already customized with "Shakti Singh")
- `logo.png` - Your personal logo/avatar (square format recommended)

### 3. Create GitHub Repository

1. Create a new repository with the same name as your GitHub username
2. Make it public
3. Upload all these files to the repository

### 4. Automatic Updates

The included GitHub Actions workflow will automatically update your README daily.

## 🎨 Customization Options

### Colors & Theme
Edit `src/theme.js` to change the color scheme:
- `primary`: Main color for badges
- `secondary`: Accent color
- `white`: Text color

### Skills
In `src/data.js`, customize your skills:
- Add `isHighlighted: true` for important skills (different color)
- Use `logo: 'custom-name'` for specific logos
- Skills are randomly ordered if `randomOrder: true`

### Social Media Links
Add/remove social platforms in the `socialMedias.links` array.

## 🔧 Profile Sections

Your clean profile includes:
- **Header** - Custom banner with social badges
- **Personal Quote** - Your motto or philosophy
- **About Me** - Personal information and coding experience
- **Get in Touch** - Social media links
- **Tech Stack & Skills** - Your technical skills as badges
- **Recent Projects** - Your latest repositories

## 📝 Running Locally

1. Install dependencies: `npm install`
2. Run the generator: `npm start`
3. Check the generated `README.md`

## 🎯 Next Steps

1. Replace placeholder information with your details
2. Add your personal logo image
3. Test locally with `npm start`
4. Push to your GitHub repository
5. Enjoy your clean, professional GitHub profile!

## 💡 What We Removed

This is a streamlined version that focuses on your professional profile:
- ❌ No follower showcases
- ❌ No GitHub statistics/metrics
- ❌ No complex image processing
- ✅ Clean, professional presentation
- ✅ Fast loading and simple maintenance

Happy coding! 🚀