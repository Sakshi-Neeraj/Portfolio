# Sakshi Neeraj — Portfolio Website

A modern, dark-themed portfolio website showcasing platform engineering, AI-enabled automation, and SRE expertise.

## 🚀 Deploy to GitHub Pages

### Step 1: Create a GitHub Repository

1. Go to [github.com/new](https://github.com/new)
2. Create a **public** repository named either:
   - `your-username.github.io` (for a personal site at `https://your-username.github.io`)
   - Or any name like `portfolio` (site will be at `https://your-username.github.io/portfolio`)

### Step 2: Push the Code

Open a terminal in the Portfolio folder and run:

```bash
git init
git add .
git commit -m "Initial portfolio website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
git push -u origin main
```

Replace `YOUR-USERNAME` and `YOUR-REPO-NAME` with your actual GitHub username and repository name.

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages** (in the left sidebar)
3. Under **Source**, select **Deploy from a branch**
4. Set **Branch** to `main` and folder to `/ (root)`
5. Click **Save**

Your site will be live at `https://YOUR-USERNAME.github.io/YOUR-REPO-NAME` within a few minutes!

## 🛠 Tech Stack

- **HTML5** — Semantic markup
- **CSS3** — Custom properties, grid, flexbox, animations
- **Vanilla JavaScript** — IntersectionObserver, typing effect
- **Google Fonts** — Inter + JetBrains Mono
- **No build tools** — Pure static files, zero dependencies

## 📁 File Structure

```
Portfolio/
├── index.html    # Main page
├── style.css     # Styles & animations
├── script.js     # Interactivity
└── README.md     # This file
```

## 📝 Customization

- **Colors**: Edit CSS custom properties in `:root` at the top of `style.css`
- **Content**: Edit sections directly in `index.html`
- **Typing phrases**: Modify the `phrases` array in `script.js`

