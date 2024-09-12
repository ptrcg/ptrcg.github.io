const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors()); // Allow cross-origin requests

// Route to handle form submission
app.post('/send-email', (req, res) => {
    const { name, email, message } = req.body;

    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'your-email@gmail.com', // Replace with your Gmail
            pass: 'your-password',        // Replace with your password or use environment variables
        },
    });

    const mailOptions = {
        from: email,
        to: 'pamGo@gmail.com', // Receiver's email
        subject: `Message from ${name}`,
        text: message,
        replyTo: req.body.email,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            return res.status(500).send('Error sending email');
        }
        res.status(200).send('Email sent successfully');
    });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

