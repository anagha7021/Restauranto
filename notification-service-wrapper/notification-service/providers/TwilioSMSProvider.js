
const twilio = require('twilio');

class TwilioSMSProvider {
  constructor(accountSid, authToken, fromNumber) {
    this.client = twilio(accountSid, authToken);
    this.from = fromNumber;
  }

  async sendSMS(user, message) {
    if (!user.phoneNumber) throw new Error('No phone number');
    return this.client.messages.create({
      body: message,
      from: this.from,
      to: user.phoneNumber
    });
  }

  async sendPush() { throw new Error("Not supported by Twilio SMS"); }
  async sendWhatsApp() { throw new Error("Not implemented"); }
  async sendEmail() { throw new Error("Not supported by Twilio SMS"); }
}

module.exports = TwilioSMSProvider;
