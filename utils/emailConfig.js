const nodemailer = require('nodemailer');

const mailTransporter = nodemailer.createTransport({
  service: 'gmail',
//   host:'smtp.gmail.com',
  port: 587,
  secure: true,
  auth: {
    user: 'audreykirezi100@gmail',
    pass: 'dsea ekjq bsgc vdqm'
  }
});

async function sendWelcomeEmail(email, username) {
  try {
    const mailDetails = {
      from: 'audreykirezi100@gmail.com',
      to: email,
      subject: 'Welcome to YourApp!',
      text: `Hello ${username},\n\nThank you for registering on YourApp! We're excited to have you.`,
    };

    await mailTransporter.sendMail(mailDetails);
  } catch (error) {
    console.error("Error sending email:", error);
  }
}

module.exports = {
  sendWelcomeEmail,
};
