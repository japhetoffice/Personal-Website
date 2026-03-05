# Personal Portfolio Website

A modern, full-stack portfolio website built with **Vue 3** (frontend) and **Node.js/Express** (backend), inspired by the design of bryllim.com.

![Status](https://img.shields.io/badge/status-active-brightgreen)
![Frontend](https://img.shields.io/badge/frontend-Vue3-green)
![Backend](https://img.shields.io/badge/backend-Node.js-orange)
![Database](https://img.shields.io/badge/database-MongoDB-green)

## 🎯 Project Overview

This project is split into two main parts:

### **Frontend (Client)**
- **Built with**: Vue 3 + Vite + CSS3
- **Port**: `http://localhost:5174`
- **Status**: ✅ Ready to customize
- **Features**: 
  - Responsive portfolio showcase
  - Dark theme with gradient accents
  - Smooth animations and transitions
  - Mobile-optimized design

### **Backend (Server)**
- **Built with**: Node.js + Express.js + MongoDB
- **Port**: `http://localhost:5000`
- **Status**: 🔧 Development ready
- **Features**:
  - Contact form handling
  - Email notifications
  - Data storage
  - API endpoints

## 📁 Project Structure

```
Personal-Website/
├── client/                          # Frontend application
│   ├── src/
│   │   ├── components/
│   │   │   ├── Hero.vue            # Landing section
│   │   │   ├── About.vue           # About section
│   │   │   ├── Experience.vue      # Work experience
│   │   │   ├── TechStack.vue       # Skills
│   │   │   ├── Projects.vue        # Portfolio projects
│   │   │   ├── Certifications.vue  # Certifications
│   │   │   ├── Recommendations.vue # Testimonials
│   │   │   ├── Gallery.vue         # Image gallery
│   │   │   └── Contact.vue         # Contact & footer
│   │   ├── App.vue                 # Main component
│   │   ├── main.js
│   │   └── style.css               # Global styles
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   └── FRONTEND_README.md           # Frontend documentation
│
├── server/                          # Backend application
│   ├── index.js                    # Main server file
│   ├── package.json
│   ├── .env                        # Environment variables
│   ├── routes/                     # API routes (to create)
│   ├── models/                     # Database models (to create)
│   └── BACKEND_GUIDE.md            # Backend documentation
│
└── README.md                        # This file
```

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- MongoDB account (MongoDB Atlas recommended)
- npm or yarn

### Frontend Setup

```bash
cd client
npm install
npm run dev
```

Frontend will be available at `http://localhost:5174`

### Backend Setup

```bash
cd server
npm install

# Create .env file with:
PORT=5000
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/portfolio
NODE_ENV=development
CORS_ORIGIN=http://localhost:5174

node index.js
```

Backend will be running on `http://localhost:5000`

## 📋 Features

### Frontend ✨

- **Hero Section** - Introduction with call-to-action buttons
- **About** - Professional background and capabilities
- **Experience** - Timeline of work history and education
- **Tech Stack** - categorized technology skills
- **Projects** - Portfolio of completed projects
- **Certifications** - Professional certifications and achievements
- **Recommendations** - Client and colleague testimonials
- **Gallery** - Visual portfolio showcase
- **Contact** - Multiple contact methods and footer

### Backend 🔧

- Contact form submission API
- Email notification system (ready to implement)
- MongoDB data storage
- Error handling and validation
- CORS enabled for frontend communication
- Environment-based configuration

## 🎨 Design Features

- **Dark Theme** with purple/blue gradient accents
- **Responsive Design** - Mobile, tablet, desktop optimized
- **Smooth Animations** - Hover effects and transitions
- **Modern Typography** - Inter font family
- **Glassmorphic Cards** - Subtle borders and shadows
- **Accessibility** - Semantic HTML and proper contrast ratios

## 🔧 Customization

### Update Your Information

#### Frontend - Hero.vue
```javascript
const profile = ref({
  name: 'Your Name',
  title: 'Your Title',
  location: 'Your Location',
  bio: 'Your bio...',
  socials: { ... }
})
```

#### Frontend - Experience.vue
Update your work experience and education timeline

#### Frontend - TechStack.vue
Customize your technical skills

#### Frontend - Projects.vue
Add your portfolio projects with links

#### Colors - style.css
```css
:root {
  --accent: #8b5cf6;           /* Change primary color */
  --accent-secondary: #3b82f6; /* Change secondary color */
  /* ... */
}
```

### Backend Configuration

Create `.env` file in server directory:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
NODE_ENV=development
CORS_ORIGIN=http://localhost:5174
SMTP_HOST=smtp.gmail.com
SMTP_USER=your-email@gmail.com
SMTP_PASS=app-specific-password
ADMIN_EMAIL=admin@example.com
```

## 📦 Available Scripts

### Frontend

```bash
cd client

npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
```

### Backend

```bash
cd server

node index.js    # Start backend server
# Add nodemon for auto-restart: npm run dev
```

## 🌐 API Documentation

### Contact Endpoint

**POST** `/api/contact`

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Your message here..."
}
```

Response:
```json
{
  "success": true,
  "message": "Message received! We'll get back to you soon."
}
```

See [BACKEND_GUIDE.md](server/BACKEND_GUIDE.md) for more details.

## 🚀 Deployment

### Frontend Deployment

**Vercel** (Recommended)
```bash
npm install -g vercel
vercel
```

**Netlify**
```bash
npm run build
# Deploy the dist/ folder to Netlify
```

**GitHub Pages**
Update vite.config.js with your repo name and deploy

### Backend Deployment

**Options:**
- Heroku (deprecated)
- Railway
- Render
- AWS EC2
- DigitalOcean

See [BACKEND_GUIDE.md](server/BACKEND_GUIDE.md) for deployment details.

## 🔒 Security Considerations

- Use HTTPS in production
- Validate all input on both frontend and backend
- Store sensitive data in .env files (never commit)
- Implement rate limiting for API routes
- Use app-specific passwords for email services
- Keep dependencies updated

## 📚 Documentation

- [Frontend Documentation](client/FRONTEND_README.md)
- [Backend Developer Guide](server/BACKEND_GUIDE.md)
- [Vue 3 Docs](https://vuejs.org/)
- [Express.js Docs](https://expressjs.com/)
- [Mongoose Documentation](https://mongoosejs.com/)

## 🐛 Troubleshooting

### Port Already in Use

```bash
# Find process on port
lsof -i :5174  # Frontend
lsof -i :5000  # Backend

# Kill process (replace PID)
kill -9 PID
```

### MongoDB Connection Failed

- Check connection string in .env
- Ensure IP is whitelisted in MongoDB Atlas
- Verify credentials are correct

### CORS Errors

- Check CORS_ORIGIN in backend .env
- Ensure frontend URL matches exactly
- Clear browser cache

### Frontend Won't Load Components

- Check all component imports in App.vue
- Verify component file names match exactly
- Check for syntax errors: `npm run build` will show them

## 🎓 Learning Resources

- Vue 3 Composition API
- Express.js middleware patterns
- MongoDB schema design
- RESTful API best practices
- CSS Grid and Flexbox

## 📞 Support & Contact

For questions or issues:
1. Check relevant README files
2. Review component comments
3. Check backend implementation examples
4. Google the specific error message

## 📄 License

MIT License - feel free to use this for your portfolio!

## ✅ Implementation Checklist

### Frontend
- [x] Hero section with bio
- [x] About section with highlights
- [x] Experience timeline
- [x] Tech stack showcase
- [x] Projects portfolio
- [x] Certifications display
- [x] Recommendations/testimonials
- [x] Image gallery
- [x] Contact footer
- [ ] Customize with your information
- [ ] Add your actual project links
- [ ] Update social media links
- [ ] Replace placeholder images

### Backend
- [x] Express.js setup
- [x] MongoDB connection
- [x] CORS configuration
- [ ] Contact form route implementation
- [ ] Database model creation
- [ ] Email notification service
- [ ] Input validation
- [ ] Error handling
- [ ] Deploy to production
- [ ] Setup monitoring/logging

## 🎉 You're All Set!

Your portfolio website is ready. The frontend is fully functional and deployed. Now focus on building amazing backend features to make your portfolio interactive and engaging!

Happy coding! 🚀

---

**Created**: March 5, 2026  
**Last Updated**: March 5, 2026  
**Version**: 1.0.0
