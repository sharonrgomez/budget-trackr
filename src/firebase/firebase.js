import * as firebase from "firebase";

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export { firebase, database as default };

// database.ref("expenses").once("value").then((snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot)=> {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         });
//     });
//     console.log(expenses)
// });

// database.ref().on("value", (snapshot) => {
//     // console.log("fetching data...");
//     const expenses = [];
//     snapshot.forEach((childSnapshot)=> {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         });
//     });
//     console.log(expenses);
// }, (e) => {
//     console.log("unable to fetch data");
// });

// database.ref("expenses").on("child_removed", (snapshot) => {
//     console.log(snapshot.key, snapshot.val(), "removed");
// });

// database.ref("expenses").on("child_changed", (snapshot) => {
//     console.log(snapshot.key, snapshot.val(), "changed");
// });

// database.ref("expenses").on("child_added", (snapshot) => {
//     console.log(snapshot.key, snapshot.val(), "added");
// });

// setTimeout(() => {
//     database.ref().off("value", onValueChange);
//     console.log("unsubscribed from data fetching");
// }, 2000);

// database.ref().update({
//     "job/company": "google"
// });

// const name = database.ref().on("value", (snapshot) => {
//     const val = snapshot.val();
//     console.log(`${val.name} works at ${val.job.company} in ${val.location.city}`);
// });