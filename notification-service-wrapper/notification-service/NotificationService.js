
class NotificationService {
  constructor(provider) {
    this.provider = provider;
  }

  async sendPush(user, message) {
    return this.provider.sendPush(user, message);
  }

  async sendSMS(user, message) {
    return this.provider.sendSMS(user, message);
  }

  async sendWhatsApp(user, message) {
    return this.provider.sendWhatsApp(user, message);
  }

  async sendEmail(user, subject, body) {
    return this.provider.sendEmail(user, subject, body);
  }

  setProvider(newProvider) {
    this.provider = newProvider;
  }
}

module.exports = NotificationService;
