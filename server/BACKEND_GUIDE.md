# Personal Portfolio Website - Backend Developer Guide

## Overview

This backend serves the Vue.js portfolio frontend. It provides:
- Contact form submission handling
- Portfolio data endpoints (optional)
- Email notifications
- Database storage for inquiries

## Tech Stack

- **Framework**: Express.js 5.2.1
- **Database**: MongoDB with Mongoose 9.2.4
- **Middleware**: CORS, dotenv
- **Runtime**: Node.js

## Project Structure

```
server/
├── index.js           # Main server file
├── package.json
├── .env              # Environment variables (create this)
└── routes/           # API routes (to be created)
│   ├── contact.js
│   └── projects.js
└── models/           # Database models (to be created)
    ├── Contact.js
    └── Project.js
```

## Getting Started

### 1. Setup Environment Variables

Create a `.env` file in the server directory:

```env
PORT=5000
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/portfolio
NODE_ENV=development
CORS_ORIGIN=http://localhost:5174
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
ADMIN_EMAIL=your-email@gmail.com
```

### 2. Install Dependencies

```bash
npm install
# or
npm install nodemailer  # For email notifications
```

### 3. Run Server

```bash
node index.js
```

Server runs on `http://localhost:5000`

## Required Routes

### Contact Form Submission

**POST** `/api/contact`

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "I'm interested in working with you..."
}
```

**Response (Success):**
```json
{
  "success": true,
  "message": "Message received! We'll get back to you soon."
}
```

**Response (Error):**
```json
{
  "success": false,
  "error": "All fields are required"
}
```

**Implementation Example:**

```javascript
// routes/contact.js
const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');
const nodemailer = require('nodemailer');

// Configure email service
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
});

router.post('/', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Validation
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        error: 'All fields are required'
      });
    }

    // Save to database
    const contact = new Contact({ name, email, message });
    await contact.save();

    // Send email notification to admin
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.ADMIN_EMAIL,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    });

    // Send confirmation email to user
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: email,
      subject: 'We received your message',
      html: `
        <h2>Thank you for reaching out!</h2>
        <p>We've received your message and will get back to you shortly.</p>
      `
    });

    res.json({
      success: true,
      message: 'Message received! We\'ll get back to you soon.'
    });

  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to send message'
    });
  }
});

module.exports = router;
```

### Database Models

**Contact Model:**

```javascript
// models/Contact.js
const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  },
  message: {
    type: String,
    required: true,
    minlength: 10
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  status: {
    type: String,
    enum: ['new', 'read', 'replied'],
    default: 'new'
  }
});

module.exports = mongoose.model('Contact', contactSchema);
```

### Integration with Frontend

Update your `Contact.vue` component to submit forms:

```javascript
// In Contact.vue script setup
const submitContactForm = async (formData) => {
  try {
    const response = await fetch('http://localhost:5000/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        message: formData.message
      })
    });

    const data = await response.json();
    
    if (data.success) {
      // Show success message
      console.log('Message sent successfully!');
      // Reset form
    } else {
      console.error('Error:', data.error);
    }
  } catch (error) {
    console.error('Failed to send message:', error);
  }
};
```

## Optional Routes

### Projects Endpoint

**GET** `/api/projects`

Returns list of portfolio projects for dynamic fetching.

```javascript
// routes/projects.js
router.get('/', async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch projects' });
  }
});
```

### Experience Endpoint

**GET** `/api/experience`

Returns work experience data for dynamic fetching.

## CORS Configuration

The server already has CORS enabled. Update `index.js` for specific origins:

```javascript
const corsOptions = {
  origin: process.env.CORS_ORIGIN || 'http://localhost:5174',
  credentials: true,
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));
```

## Error Handling

Implement comprehensive error handling:

```javascript
// Global error handler
app.use((err, req, res, next) => {
  console.error('Server Error:', err);
  res.status(err.status || 500).json({
    success: false,
    error: err.message || 'Internal server error'
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    error: 'Route not found'
  });
});
```

## Development Workflow

### Start Development Server

```bash
node index.js
```

### Test with cURL

```bash
curl -X POST http://localhost:5000/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@example.com","message":"Hello"}'
```

### Test with Postman

1. Create POST request to `http://localhost:5000/api/contact`
2. Set header: `Content-Type: application/json`
3. Add test data in body

## Production Deployment

### Environment Setup

```env
NODE_ENV=production
PORT=5000
MONGO_URI=your-production-mongodb-uri
CORS_ORIGIN=https://your-domain.com
```

### Key Considerations

1. **Security**:
   - Use HTTPS only
   - Validate and sanitize all inputs
   - Implement rate limiting
   - Use environment variables for sensitive data

2. **Database**:
   - Use MongoDB Atlas for cloud hosting
   - Enable authentication and network access restrictions

3. **Email**:
   - Use application-specific password for Gmail
   - Or use SendGrid, Mailgun for production

4. **Hosting Options**:
   - Heroku (easy deployment)
   - AWS EC2 (more control)
   - DigitalOcean (affordable)
   - Railway (modern alternative)

## Monitoring & Logging

Add logging for better debugging:

```javascript
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} ${req.method} ${req.path}`);
  next();
});
```

## API Documentation

### Summary of Endpoints

| Method | Endpoint | Purpose |
|--------|----------|---------|
| POST | `/api/contact` | Submit contact form |
| GET | `/api/projects` | Fetch all projects |
| GET | `/api/experience` | Fetch work experience |

## Troubleshooting

### MongoDB Connection Issues

```
Error: connect ECONNREFUSED
```
- Check MONGO_URI in .env
- Ensure MongoDB Atlas IP whitelist includes your IP

### CORS Errors

```
Access to XMLHttpRequest blocked by CORS policy
```
- Verify CORS_ORIGIN matches frontend URL
- Check if credentials: true is needed

### Email Not Sending

```
Error: Invalid login - 535 Authentication failed
```
- Use Gmail app-specific password (not regular password)
- Enable "Less secure app access" if not using app password

## Next Steps

1. ✅ Environment setup (.env file)
2. 📧 Implement contact form routes
3. 💾 Create Contact database model
4. 🔔 Setup email notifications
5. 🔒 Add validation and error handling
6. 🚀 Deploy to production

---

**Backend development is your domain!** This guide provides the foundation. Extend it with additional features like authentication, project management, blog API, etc.
