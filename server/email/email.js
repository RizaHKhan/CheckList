require('dotenv').config({ path: __dirname + '/config/.env' })
const sgMail = require('@sendgrid/mail')

const sgAPI = process.env.sgAPI

sgMail.setApiKey(sgAPI)

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'khanriza@gmail.com',
    subject: 'Thanks for joining in',
    html: `<h1>Welcome ${name}</h1>`
  })
}

const sendAllTasks = (email, tasks) => {
  sgMail.send({
    to: email,
    from: 'khanriza@gmail.com',
    subject: 'List of All Tasks',
    html:`
      <h1 style="color: red">Tasks:</h1>
      <ul>
        ${tasks.map(task => `<li>${task.description}</li>`).join('')}
      </ul>
    `
  })
}

const purchaseEmail = (email, content) => {
  sgMail.send({
    to: email,
    from: 'khanriza@gmail.com',
    subject: `You purchased tickets for: ${content.name}`,
    html:
        `<html>
            <head>
                <style>
                    *  {
                        color: red;
                        font-size: 20px;
                    }
                </style>
            </head>
            <body>
                <h1>Thank you for puchasing <bold>${content.qty}</bold> tickets for ${content.name}</h1>
                <p>Please note the location as follows: ${content.location}
            </body>
        </html>`
  })
}

module.exports = {
  sendWelcomeEmail,
  purchaseEmail,
  sendAllTasks
}
