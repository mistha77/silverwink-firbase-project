const admin = require('firebase-admin');

const serviceAccount = require('./serviceAccountKey.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://fir-325a1-default-rtdb.firebaseio.com/"
});
const db = admin.database();

module.exports = db;





//   ek tho real time database link kse lge gi isme databaseURl me