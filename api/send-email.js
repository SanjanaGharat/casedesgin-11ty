import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const formData = req.body;

  // Ensure that projectType is an array
  const projectTypes = Array.isArray(formData.projectType) ? formData.projectType : [];

  // Configure Nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail', // Replace with your email provider
    auth: {
      user: process.env.EMAIL_USER, // Your email address
      pass: process.env.EMAIL_PASS, // Your email password or app-specific password
    },
  });

  // Construct the email content
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER, // Replace with your email address
    subject: `New Form Submission from ${formData.firstName} ${formData.lastName}`,
    text: `
      Name: ${formData.firstName} ${formData.lastName}
      Email: ${formData.email}
      Phone: ${formData.phone}
      Address:
        ${formData.addressLine1}
        ${formData.addressLine2 || ''}
        ${formData.city}, ${formData.state}, ${formData.zip}
      Project Types: ${projectTypes.length > 0 ? projectTypes.join(', ') : 'None Selected'}
      Renovation Goals: ${formData.goals}
      Preferred Date: ${formData.date}
      Preferred Time: ${formData.time}
      How Did You Hear About Us: ${formData.howDidYouHear || 'Not Specified'}
      Opted out of Newsletter: ${formData.optOut ? 'Yes' : 'No'}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Form submitted successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Failed to submit form. Please try again later.' });
  }
}
