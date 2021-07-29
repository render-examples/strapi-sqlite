const nodemailer = require('nodemailer');
const user = process.env.NEXT_PUBLIC_EMAIL_USER;
const pass = process.env.NEXT_PUBLIC_EMAIL_PASS;

module.exports = {
  send: async (from, to, subject, text) => {
    let transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: user,
        pass: pass,
      },
    });

    const options = {
      from,
      to,
      subject,
      text,
    };
    return transporter.sendMail(options);
  },
};
