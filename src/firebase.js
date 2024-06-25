import { initializeApp } from "firebase/app";
import { getMessaging, onMessage, getToken } from "firebase/messaging";

const firebaseConfig = {
    apiKey: "AIzaSyCaNLuJNIRBy4hweZahZmSGoUAKT0G_vM0",
    authDomain: "notification-ee16a.firebaseapp.com",
    projectId: "notification-ee16a",
    storageBucket: "notification-ee16a.appspot.com",
    messagingSenderId: "359641335419",
    appId: "1:359641335419:web:ad9e4e0277308d1bc204de",
    measurementId: "G-94K6P390Z7"
  };

  initializeApp(firebaseConfig);

  const messaging =getMessaging();

  export const requestfortoken =()=>{
    return getToken(messaging, {vapidKey:"BC4fCZ-3hChFaRkt39gF9SCtQRJc7o6R9s6n-ckIK0ROimzF_GNJx46KG9r4JF7fosXjwjgL46Mv5M0Ky6OQ-KI"})
    .then((currentToken)=>{
        if(currentToken){
            console.log("Token client ", currentToken);
        } else {
            console.log("No Token Registration Available");
        }
    })
    .catch((err)=>{
        console.log("Error while register Token ", err); 
    })     
  }

  export const onMessageListener = () =>
    new Promise((resolve) => {
      onMessage(messaging, (payload) => {
        console.log("payload", payload)
        resolve(payload);
      });
    });