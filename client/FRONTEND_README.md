# Personal Portfolio Website - Frontend

A modern, responsive portfolio website built with **Vue 3** and **CSS**, inspired by bryllim.com.

## Features

### ✨ Website Sections

1. **Hero Section** - Eye-catching introduction with profile stats and quick action buttons
2. **About** - Professional background with highlighted capabilities
3. **Experience** - Timeline-based work experience and education
4. **Tech Stack** - Categorized technology skills (Frontend, Backend, DevOps)
5. **Projects** - Showcase of recent projects with descriptions and tags
6. **Certifications** - Display of professional certifications and achievements
7. **Recommendations** - Testimonials from colleagues and clients
8. **Gallery** - Portfolio image gallery
9. **Contact** - Multiple contact methods and footer

### 🎨 Design Features
- **Dark theme** with purple gradient accents
- **Responsive design** for mobile, tablet, and desktop
- **Smooth animations** and hover effects
- **Modern typography** with Inter font family
- **Glassmorphic cards** with subtle borders
- **Gradient buttons** for call-to-action elements

## Project Structure

```
client/
├── src/
│   ├── components/
│   │   ├── Hero.vue              # Main landing section
│   │   ├── About.vue             # About me section
│   │   ├── Experience.vue        # Experience timeline
│   │   ├── TechStack.vue         # Technology skills
│   │   ├── Projects.vue          # Project showcase
│   │   ├── Certifications.vue    # Certifications
│   │   ├── Recommendations.vue   # Testimonials
│   │   ├── Gallery.vue           # Image gallery
│   │   └── Contact.vue           # Contact & footer
│   ├── App.vue                   # Main app component
│   ├── main.js                   # Entry point
│   └── style.css                 # Global styles
├── index.html
├── package.json
└── vite.config.js
```

## Available Scripts

### Development
```bash
npm run dev
```
Starts the development server at `http://localhost:5174`

### Build
```bash
npm run build
```
Builds the project for production

### Preview
```bash
npm run preview
```
Preview the production build locally

## Customization Guide

### Update Personal Information

Edit each Vue component to customize:

**Hero.vue**
- Change `name`, `title`, `bio`
- Add your social media links

**Experience.vue**
- Update work experience timeline
- Add education details

**TechStack.vue**
- Modify technology skills per category

**Projects.vue**
- Add your actual projects
- Include project links and descriptions

**Gallery.vue**
- Replace placeholder images with actual portfolio images

### CSS Customization

The global color scheme is defined in `style.css`:

```css
:root {
  --accent: #8b5cf6;              /* Purple accent */
  --accent-secondary: #3b82f6;    /* Blue accent */
  --bg-primary: #0f0f0f;          /* Dark background */
  --card-bg: #161616;             /* Card background */
  /* ... more variables ... */
}
```

Change these values to customize the color scheme.

## Backend Integration

Currently, the contact form area in the Contact component has a placeholder. To implement:

1. **Create an API endpoint** in your backend for form submission
2. **Update the Contact.vue** component to handle form data
3. **Example contact endpoint needed**:
   ```
   POST /api/contact
   {
     name: string,
     email: string,
     message: string
   }
   ```

### Form Submission Handler (Example)

In your backend API, create an endpoint to handle contact form submissions:

```javascript
// Backend example (Node.js/Express)
app.post('/api/contact', async (req, res) => {
  // Validate and store contact message
  // Send email notification
  // Return response
});
```

Then update `Contact.vue` to call your API:

```javascript
// In Contact.vue
const submitForm = async (formData) => {
  const response = await fetch('http://your-backend/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
  });
  // Handle response
};
```

## Responsive Technologies

- **Mobile First Approach**: Optimized for all screen sizes
- **CSS Media Queries**: Breakpoints at 1024px, 768px, and 480px
- **Flexible Grid System**: Auto-fit grid layouts
- **Touch-Friendly**: Larger buttons and spacing on mobile

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- **Optimized Images**: SVG icons and emoji for lightweight assets
- **CSS-in-JS**: Scoped component styles prevent conflicts
- **Code Splitting**: Lazy loading of components (can be added)
- **Fast Load Time**: Minimal dependencies, optimized Vite build

## Dependencies

- **Vue 3**: Progressive JavaScript framework
- **Vite**: Build tool and dev server

## Next Steps

1. ✅ Frontend deployed and running
2. 📋 Customize all personal information
3. 🎨 Adjust color scheme to your preference
4. 🔗 Add backend API integration
5. 📧 Implement contact form submission
6. 🚀 Deploy to your preferred hosting platform

## Support

For questions about customization or additional features, refer to:
- [Vue 3 Documentation](https://vuejs.org/)
- [Vite Documentation](https://vitejs.dev/)

---

**Happy coding!** Your portfolio website is ready to showcase your work. Focus on the backend development while this frontend handles all the presentation needs.
