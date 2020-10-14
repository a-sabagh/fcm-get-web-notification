// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/7.23.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.23.0/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
firebase.initializeApp({
		apiKey: "AIzaSyAdnSJ8-qW2cpqMCde1NE3boV4cJFcI5Ls",
		authDomain: "asabagh-test.firebaseapp.com",
		databaseURL: "https://asabagh-test.firebaseio.com",
		projectId: "asabagh-test",
		storageBucket: "asabagh-test.appspot.com",
		messagingSenderId: "15933706633",
		appId: "1:15933706633:web:507a9d228aa46363549158",
		measurementId: "G-0MH5210TTW"
    });

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();
messaging.setBackgroundMessageHandler(function(message){
	let data = message.data;
	console.log('recive message on background',data)
	let notifOptions = {
		body: data.body,
		icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTM_WpsZviQEz6APSGOfR39lFwPUDX3Qq1xVw&usqp=CAU'
	}
	return self.registration.showNotification(data.title,notifOptions);
})