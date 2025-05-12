# Julia Garcia Portfolio Website

A clean, minimalist portfolio website for designer Julia Garcia. This website features a responsive design that works well on all devices and follows modern web development practices.

## Table of Contents

1. [Project Overview](#project-overview)
2. [File Structure](#file-structure)
3. [Editing Instructions](#editing-instructions)
   - [Updating Text Content](#updating-text-content)
   - [Changing Images](#changing-images)
   - [Modifying Colors and Fonts](#modifying-colors-and-fonts)
   - [Adding Portfolio Projects](#adding-portfolio-projects)
   - [Updating Contact Information](#updating-contact-information)
4. [Technical Details](#technical-details)
5. [Browser Compatibility](#browser-compatibility)

## Project Overview

This portfolio website is built with HTML5, CSS3, and vanilla JavaScript. It features:

- Clean, semantic HTML structure
- Modern CSS styling with CSS variables for easy customization
- Mobile-first responsive design
- Minimalist aesthetic with attention to typography and whitespace
- Three main sections: introduction, portfolio/gallery, and contact information
- Form validation for the contact form

## File Structure

```
julia-garcia-website/
├── index.html              # Main HTML file with all content
├── css/                    # CSS stylesheets
│   └── style.css           # Main stylesheet with comprehensive comments
├── js/                     # JavaScript files
│   └── script.js           # Main script file for interactivity
└── images/                 # Image assets
    ├── profile/            # Profile/personal images
    │   └── julia-profile.jpg  # Profile photo
    └── portfolio/          # Portfolio project images
        ├── project-2.jpg   # Brand Identity project image
        ├── project-3.jpg   # Editorial Design project image
        └── project-4.jpg   # UI/UX Design project image
```

## Editing Instructions

### Updating Text Content

To update the text content of the website, open the `index.html` file in a text editor. The file is organized into clearly marked sections with comments:

1. **Header/Navigation**: Find the `<header>` section to update the site title and navigation links.
2. **Hero Section**: Update the main headline and subtitle in the `<section class="hero">` element.
3. **About Section**: Modify the personal bio in the `<section id="about">` element.
4. **Portfolio Section**: Each project is contained in an `<article class="portfolio__item">` element.
5. **Contact Section**: Update contact information in the `<section id="contact">` element.
6. **Footer**: Modify copyright information and social links in the `<footer>` element.

Example:
```html
<!-- To change the hero title -->
<h1 class="hero__title">Design with Purpose</h1>
<!-- Change to -->
<h1 class="hero__title">Your New Title Here</h1>
```

### Changing Images

To replace images:

1. Prepare your new images:
   - Profile photo: Recommended size around 600×400px
   - Portfolio images: Recommended size around 1200×800px
   - Use JPG format for photographs, PNG for graphics with transparency
   - Optimize images for web to keep file sizes under 100KB when possible

2. Replace the existing files in the `images` directory:
   - Profile image: `images/profile/julia-profile.jpg`
   - Portfolio images: `images/portfolio/project-2.jpg`, `project-3.jpg`, etc.

3. If you change the filenames, update the corresponding `src` attributes in the HTML:
   ```html
   <!-- Example: Updating an image path -->
   <img src="images/portfolio/project-2.jpg" alt="Brand Identity Project">
   <!-- Change to -->
   <img src="images/portfolio/your-new-image.jpg" alt="Your New Project Description">
   ```

4. Always update the `alt` attributes to accurately describe the new images for accessibility.

### Modifying Colors and Fonts

The website uses CSS variables for easy customization. To change colors and fonts:

1. Open `css/style.css`
2. Locate the `:root` section at the top of the file:

```css
:root {
  /* Color Palette */
  --color-primary: #2d2d2d;
  --color-secondary: #f5f5f5;
  --color-accent: #e0c3a6;
  /* ... other variables ... */
  
  /* Typography */
  --font-primary: 'Raleway', sans-serif;
  --font-secondary: 'Playfair Display', serif;
}
```

3. Modify these values to change the site's appearance:
   - `--color-primary`: Main color for text and dark elements
   - `--color-secondary`: Background color for sections
   - `--color-accent`: Highlight color for interactive elements
   - `--font-primary`: Main font for body text
   - `--font-secondary`: Font for headings

4. If changing fonts, also update the Google Fonts link in the `<head>` section of `index.html`:
```html
<link href="https://fonts.googleapis.com/css2?family=YourFont:wght@400;700&family=YourOtherFont:wght@300;400;600&display=swap" rel="stylesheet">
```

### Adding Portfolio Projects

To add a new portfolio project:

1. Add your project image to the `images/portfolio/` directory
2. In `index.html`, find the `<div class="portfolio__grid">` section
3. Copy an existing project article and paste it within the grid div:

```html
<article class="portfolio__item">
    <div class="portfolio__image">
        <img src="images/portfolio/your-new-project.jpg" alt="Description of your project" class="portfolio__img">
    </div>
    <h3 class="portfolio__title">Your Project Title</h3>
    <p class="portfolio__category">Project Category</p>
</article>
```

4. Update the `src`, `alt`, title, and category to match your new project

### Updating Contact Information

To update contact information:

1. Find the contact section in `index.html`:
```html
<section id="contact" class="contact">
```

2. Update the email, phone, and location information:
```html
<li class="contact__item">
    <span class="contact__label"><i class="fas fa-envelope"></i> Email:</span>
    <a href="mailto:your-email@example.com" class="contact__link">your-email@example.com</a>
</li>
```

3. Update social media links in both the contact section and footer:
```html
<a href="https://linkedin.com/in/your-profile" class="contact__social-link" aria-label="LinkedIn" target="_blank" rel="noopener">
```

## Technical Details

- **HTML**: The site uses semantic HTML5 elements for better accessibility and SEO
- **CSS**: 
  - Mobile-first responsive design with media queries
  - BEM naming convention for CSS classes
  - CSS variables for consistent styling
- **JavaScript**:
  - Mobile menu toggle functionality
  - Smooth scrolling for navigation links
  - Form validation for the contact form

## Browser Compatibility

This website is compatible with:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Android Chrome)

For older browsers, some CSS features may not work as expected. Consider adding a CSS fallback or polyfill if you need to support Internet Explorer.