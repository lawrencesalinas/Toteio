const sendGrid = require('@sendgrid/mail')
sendGrid.setApiKey(process.env.SENDGRID_APIKEY)

const sendEmail = (to, from, subject, text) => {
  const msg = {
    to,
    from,
    subject,
    text,
  }

  sendGrid.send(msg, function (err, result) {
    if (err) {
      console.log('Email not sent  error occured', err)
    } else {
      console.log('Email was sent')
    }
  })
}

module.exports = sendEmail
