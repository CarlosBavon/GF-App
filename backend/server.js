require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const mongoose = require('mongoose');

// Initialize Express
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// Application Schema
const applicationSchema = new mongoose.Schema({
  name: String,
  instagram: String,
  age: Number,
  zodiac: String,
  cuddleRating: Number,
  punTolerance: Number,
  sharesFood: Boolean,
  idealDate: String,
  submittedAt: { type: Date, default: Date.now }
});

const Application = mongoose.model('Application', applicationSchema);

// Email Transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  }
});

// Format data for email
const formatApplication = (data) => {
  const fields = [
    { name: 'Name', value: data.name },
    { name: 'Instagram', value: data.instagram },
    { name: 'Age', value: data.age },
    { name: 'Zodiac', value: data.zodiac || 'Not specified' },
    { name: 'Cuddle Rating', value: '★'.repeat(data.cuddleRating) + ` (${data.cuddleRating}/5)` },
    { name: 'Pun Tolerance', value: '★'.repeat(data.punTolerance) + ` (${data.punTolerance}/5)` },
    { name: 'Shares Food', value: data.sharesFood ? '✅ Yes' : '❌ No' },
    { name: 'Ideal Date', value: data.idealDate }
  ];

  return fields.map(field => 
    `<tr>
      <td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>${field.name}</strong></td>
      <td style="padding: 8px; border-bottom: 1px solid #eee;">${field.value}</td>
    </tr>`
  ).join('');
};

// Application endpoint
app.post('/api/apply', async (req, res) => {
  try {
    const formData = req.body;

    // Save to MongoDB
    const newApplication = new Application(formData);
    await newApplication.save();

    // Send email
    await transporter.sendMail({
      from: `"Girlfriend App" <${process.env.EMAIL_USER}>`,
      to: process.env.YOUR_EMAIL,
      subject: '❤️ New Girlfriend Application!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #e91e63;">New Application from ${formData.name}</h1>
          <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            ${formatApplication(formData)}
          </table>
          <p style="color: #888; font-size: 14px;">
            Submitted at: ${new Date().toLocaleString()}<br>
            Database ID: ${newApplication._id}
          </p>
        </div>
      `
    });

    res.json({ success: true, id: newApplication._id });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ success: false, error: error.message });
  }
});

// Get all applications (for admin view)
app.get('/api/applications', async (req, res) => {
  try {
    const applications = await Application.find().sort({ submittedAt: -1 });
    res.json(applications);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));