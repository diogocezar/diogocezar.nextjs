const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');
const cors = require('cors')({ origin: true });
const fs = require('fs');
const lodashTemplate = require('lodash.template');

admin.initializeApp();

const email = functions.config().config.email
const password = functions.config().config.password
const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: email,
    pass: password
  }
});

const loadTemplate = (template, data = {}) => {
  return lodashTemplate(fs.readFileSync(`${__dirname}/templates/${template}.html`))(data)
}

module.exports.sendMail = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
    const {
      subject, to, name, email, message
    } = req.body
    const from = '"Diogo Cezar - Portfolio" <diogo@diogocezar.dev>';
    const html = loadTemplate('contact', {name, email, message})
    const emailConfigs = {
      from,
      to,
      subject,
      html
    };
    transporter.sendMail(emailConfigs, (error, info) => {
      if (error) return res.send({ success: false, error: error.toString() })
      return res.send({ success: true, info })
    });
  });
});
