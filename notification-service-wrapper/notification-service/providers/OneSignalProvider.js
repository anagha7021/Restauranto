
const axios = require('axios');

class OneSignalProvider {
  constructor(appId, apiKey) {
    this.appId = appId;
    this.apiKey = apiKey;
  }

  async sendPush(user, message) {
    if (!user.deviceToken) throw new Error('No device token');

    const payload = {
      app_id: this.appId,
      include_player_ids: [user.deviceToken],
      headings: { en: message.title },
      contents: { en: message.body },
      data: message.data || {}
    };

    const headers = {
      Authorization: `Basic ${this.apiKey}`,
      "Content-Type": "application/json"
    };

    const response = await axios.post("https://onesignal.com/api/v1/notifications", payload, { headers });
    return response.data;
  }

  async sendSMS() { throw new Error("Not supported by OneSignal"); }
  async sendWhatsApp() { throw new Error("Not supported by OneSignal"); }
  async sendEmail() { throw new Error("Not supported by OneSignal"); }
}

module.exports = OneSignalProvider;
