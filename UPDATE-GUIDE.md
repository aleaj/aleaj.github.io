# How to Update Your Personal Website

Your website is now set up to be completely manageable through YAML and Markdown files! No need to edit HTML directly.

## 🎯 Quick Start: Essential Files to Update

### 1. Personal Information (`_data/personal.yml`)
Update your basic information here:
```yaml
name: "Alejandro Andres Juanes"  # Your full name
email: "Alejandro.AndresJuanes@ista.ac.at"  # Your email
title: "Researcher & Developer"  # Your professional title
subtitle: "PhD Student in Computer Science"  # Your current status
bio: |  # Main description for your homepage
  Welcome to my personal website! I'm a passionate researcher...
```

### 2. Professional Links (`_data/links.yml`)
Update your social media and professional profiles:
```yaml
main_links:  # Links shown prominently on homepage
  - name: "LinkedIn"
    url: "https://linkedin.com/in/your-profile"  # ← Update this!
  - name: "GitHub"
    url: "https://github.com/your-username"  # ← Update this!
```

### 3. Research Information (`_data/research.yml`)
Add your publications, projects, and collaborators:
```yaml
publications:
  - title: "Your Paper Title"
    authors: "**Your Name**, Co-author Name"
    venue: "Conference/Journal Name 2024"
    description: "Brief description of your work..."
```

### 4. Resume/CV (`_data/resume.yml`)
Add your education and work experience:
```yaml
education:
  - degree: "Ph.D. in Computer Science"
    institution: "Your University"
    start_year: "2020"
    end_year: "2024"
```

## 📝 Blog Posts

Create new blog posts by adding files to `_posts/` following this format:
- Filename: `YYYY-MM-DD-title-of-post.md`
- Example: `2024-03-18-my-first-post.md`

```markdown
---
layout: post
title: "My First Blog Post"
date: 2024-03-18
categories: [Research, Academia]
---

Your blog post content goes here in Markdown format!
```

## 🎨 Customization

### Colors & Theme
The website uses your custom color palette:
- **Turquoise Surf** (#06aed5) - Primary accent
- **Cerulean** (#086788) - Text and headers
- **Bright Amber** (#f0c808) - Highlights
- **Papaya Whip** (#fff1d0) - Light backgrounds
- **Primary Scarlet** (#dd1c1a) - Alerts

### Navigation
Update the menu in `_config.yml`:
```yaml
navigation:
  - name: "Home"
    url: "/"
  - name: "Resume"
    url: "/resume/"
```

## 🚀 Publishing Changes

1. **Edit any YAML/Markdown files** using your preferred text editor
2. **Commit and push to GitHub:**
   ```bash
   git add .
   git commit -m "Update personal information"
   git push
   ```
3. **GitHub Pages will automatically rebuild** your site (takes 1-2 minutes)

## 📁 File Structure Summary

```
📁 _data/          # All your content (EDIT THESE!)
  ├── personal.yml  # Basic info, bio, research interests
  ├── links.yml     # Social media and professional links
  ├── research.yml  # Publications, projects, presentations
  └── resume.yml    # Education, experience, awards

📁 _posts/          # Blog posts (Markdown files)
  └── 2023-10-01-welcome.md

📁 images/          # Your photos
  └── profile.jpg   # Your profile photo (500x500px recommended)

📄 _config.yml     # Site settings and navigation
```

## ✅ Next Steps

1. **Update `_data/personal.yml`** with your information
2. **Update `_data/links.yml`** with your social profiles
3. **Add your publications** to `_data/research.yml`
4. **Add your experience** to `_data/resume.yml`
5. **Replace `images/profile.jpg`** with your photo
6. **Write your first blog post** in `_posts/`

## 🎯 Pro Tips

- **Use `**Your Name**`** in author lists to make your name bold
- **Test locally** by running `bundle exec jekyll serve`
- **Dark mode** automatically works - visitors can toggle with the moon/sun button
- **All external links** automatically open in new tabs
- **The site is fully responsive** and works great on mobile devices

That's it! Your website will automatically update when you push changes to the main branch. 🎉