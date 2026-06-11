import mysql from 'mysql2/promise';
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  // CORS setup - Vercel also handles this, but good practice for internal APIs
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method Not Allowed' });
  }

  // Database credentials
  const dbConfig = {
    host: '192.185.129.7',
    user: 'smartg6v_group',
    password: 'smartospheregroup',
    database: 'smartg6v_groupforms',
  };

  // SMTP credentials
  const smtpConfig = {
    host: 'mail.smartospheresolutions.com',
    port: 465,
    secure: true,
    auth: {
      user: 'no-reply@smartospheresolutions.com',
      pass: 'Fx8QiREKxGfK',
    },
    tls: {
      rejectUnauthorized: false // Helps bypass issues with strict cert checks on shared hosts
    }
  };

  try {
    const { fullName, email, phone, website, requirements } = req.body;

    if (!fullName || !email || !phone) {
      return res.status(400).json({ success: false, error: 'Please fill all required fields.' });
    }

    // 1. Connect to MySQL Database
    const connection = await mysql.createConnection(dbConfig);
    
    // Create table if not exists
    await connection.execute(`
      CREATE TABLE IF NOT EXISTS demo_requests (
          id INT AUTO_INCREMENT PRIMARY KEY,
          full_name VARCHAR(255) NOT NULL,
          email VARCHAR(255) NOT NULL,
          phone VARCHAR(50) NOT NULL,
          website VARCHAR(255),
          requirements TEXT,
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // Insert data
    const [result] = await connection.execute(
      'INSERT INTO demo_requests (full_name, email, phone, website, requirements) VALUES (?, ?, ?, ?, ?)',
      [fullName, email, phone, website || '', requirements || '']
    );

    await connection.end();

    // 2. Setup Email Transporter
    const transporter = nodemailer.createTransport(smtpConfig);

    // 3. Send Admin Notification
    await transporter.sendMail({
      from: '"Smartosphere Web Form" <no-reply@smartospheresolutions.com>',
      to: 'boa@smartospheregroup.com',
      replyTo: email,
      subject: `New Demo Request from ${fullName}`,
      html: `
        <h2>New Demo Request</h2>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Website:</strong> ${website || 'N/A'}</p>
        <p><strong>Message:</strong><br/>${(requirements || 'N/A').replace(/\n/g, '<br/>')}</p>
      `
    });

    // 4. Send Autoresponder to User
    await transporter.sendMail({
      from: '"Smartosphere Solutions" <no-reply@smartospheresolutions.com>',
      to: email,
      subject: 'Thank you for reaching out to Smartosphere Solutions',
      html: `
        <p>Hi ${fullName},</p>
        <p>Thank you for requesting a demo session with Smartosphere Solutions.</p>
        <p>We have received your request and an engineering specialist will review your details and get back to you within 24 hours.</p>
        <br/>
        <p>Best regards,</p>
        <p><strong>The Smartosphere Team</strong></p>
      `
    });

    return res.status(200).json({ success: true });

  } catch (error) {
    console.error('API Error:', error);
    return res.status(500).json({ success: false, error: 'Server error processing request. ' + (error.message || '') });
  }
}
