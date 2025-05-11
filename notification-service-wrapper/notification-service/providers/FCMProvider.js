
const admin = require('firebase-admin');
const serviceAccount = require('../firebaseServiceAccount.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

class FCMProvider {
  async sendPush(user, message) {
    if (!user.deviceToken) throw new Error('No device token');
    const payload = {
      token: user.deviceToken,
      notification: {
        title: message.title,
        body: message.body,
      },
      data: message.data || {}
    };
    return await admin.messaging().send(payload);
  }

  async sendSMS() { throw new Error("Not supported by FCM"); }
  async sendWhatsApp() { throw new Error("Not supported by FCM"); }
  async sendEmail() { throw new Error("Not supported by FCM"); }
}

module.exports = FCMProvider;
