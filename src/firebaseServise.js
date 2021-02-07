import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyCYVKdgbJBo2lJH6hhnC8NJWmxlSx4oB3M",
    authDomain: "olx-clone-18e6b.firebaseapp.com",
    databaseURL: "https://olx-clone-18e6b.firebaseio.com",
    projectId: "olx-clone-18e6b",
    storageBucket: "olx-clone-18e6b.appspot.com",
    messagingSenderId: "351773459050",
    appId: "1:351773459050:web:b496313c75ce87d245c013",
    measurementId: "G-1270JK9YKE"
};
firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();



export function requestPermission() {
    // [START messaging_request_permission]
    Notification.requestPermission().then((permission) => {
        if (permission === 'granted') {
           // console.log('Notification permission granted.');
            // TODO(developer): Retrieve a registration token for use with FCM.
            // ...
            messaging.getToken().then((currentToken) => {
                if (currentToken) {
                    // Send the token to your server and update the UI if necessary
                    // ...
                    console.log(currentToken)
                    
                } else {
                    // Show permission request UI
                    console.log('No registration token available. Request permission to generate one.');
                    // ...
                }
            }).catch((err) => {
                console.log('An error occurred while retrieving token. ', err);
                // ...
            });
        } else {
            console.log('Unable to get permission to notify.');
        }
    });
    // [END messaging_request_permission]
}
