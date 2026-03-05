//Impoting dependencies 

require('dotenv').config();
const express = require('express');
const mongoose =require('mongoose');
const cors = require('cors');


const app = express();
const PORT = process.env.PORT || 5000;

//middleware 
app.use(cors());
app.use(express.json());


//connecting to database 
 
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('✅ MongoDB Connected successfully!'))
    .catch((err) => console.error('❌ Database connection error:', err));

// 4. Sample Routes (The "Handshake" points)
app.get('/', (req, res) => {
    res.send('API is running...');
});

// This is where your future routes (Projects, Contact) will go
// app.use('/api/projects', require('./routes/projectRoutes'));

// 5. Start Server
app.listen(PORT, () => {
    console.log(`🚀 Server is floating on http://localhost:${PORT}`);
});