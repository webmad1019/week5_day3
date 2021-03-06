const express = require('express');
const router = express.Router();

const mailer = require('../configs/nodemailer.config')

router.get('/send', (req, res) => res.render('email-form'))

router.post('/send', (req, res) => {

  let { email, subject, message } = req.body;

  mailer.sendMail({
    from: '"Ironhacker Email 👻" <myawesome@project.com>',
    to: email,
    subject: subject,
    text: message,
    html: `<b>${message}</b>`
  })
    .then(info => res.render('email-sent', { email, subject, message, info }))
    .catch(error => console.log(error));
})


module.exports = router;