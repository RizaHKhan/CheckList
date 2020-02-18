const { sendWelcomeEmail } = require('./email/email')

exports.sendEmail = async (req, res) => {
  try {
    await sendWelcomeEmail('khanriza@gmail.com', 'Riza')
  } catch (err) {
    console.log(err)
  }
}
