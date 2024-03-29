// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.
// importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-app.js');
// importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-messaging.js');

// // Initialize the Firebase app in the service worker by passing in the
// // messagingSenderId.
// firebase.initializeApp({
//   'messagingSenderId': '1067535198685'
// });

// // Retrieve an instance of Firebase Messaging so that it can handle background
// // messages.
// const messaging = firebase.messaging();
importScripts('/__/firebase/4.8.1/firebase-app.js');
importScripts('/__/firebase/4.8.1/firebase-messaging.js');
importScripts('/__/firebase/init.js');

firebase.messaging();