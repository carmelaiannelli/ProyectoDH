const sgMail = require('@sendgrid/mail');
const ApiKey=require('../')

sgMail.setApiKey('');

module.exports = sgMail;