const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require("nodemailer");
const path = require('path');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

app.post('/api/world', (req, res) => {
  console.log(req.body);
  res.send(
    `I received your POST request. This is what you sent me: ${req.body.post}`,
  );
});

app.post('/api/form', (req, res) => {
  nodemailer.createTestAccount((err, account) => {
    const htmlEmail = `
      <h3>Contact Details</h3>
      <ul>
        <li>Name: ${req.body.name}</li>
        <li>Email: ${req.body.email}</li>
        <li>Phone: ${req.body.phone}</li>
        <li>Amount: ${req.body.amount}</li>
        <li>Date: ${req.body.date}</li>
      </ul>
      <h3>Message:</h3>
      <p>${req.body.message}</p>
    `;
    
    let transporter = nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      port: 587,
      auth: {
        user: 'brennan72@ethereal.email',
        pass: '4jb2au5H5BWkbkdnY3'
      }
    })

    let mailOptions = {
      from: 'test@test.com',
      to: 'brennan72@ethereal.email',
      replyTo: 'test@test.com',
      subject: 'New Message',
      text: req.body.message,
      html: htmlEmail,
    }

    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        return console.log(err)
      }

      console.log('Message sent: %s:', info.message);
      console.log('Message URL: %s:', nodemailer.getTestMessageUrl(info));
    })

  })
});

// serve static assets if in production
console.log(process.env.NODE_ENV)
if (process.env.NODE_ENV === 'production') {
  //set static folder
  console.log('server running');
  app.use(express.static(path.join(__dirname, 'build')));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  })
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server lstnng on port ${PORT}`)
})
