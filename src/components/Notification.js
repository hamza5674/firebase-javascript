import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { requestfortoken, onMessageListener } from '../firebase';
import { useEffect } from 'react';


function Notification() {

    const [notification, setNotification] = useState({title: '', body: ''});
    const notify = () =>  toast(<ToastDisplay/>);
    function ToastDisplay() {
      return (
        <div>
          <p><b>{notification?.title}</b></p>
          <p>{notification?.body}</p>
        </div>
      );
    };
  
    useEffect(() => {
      if (notification?.title ){
       notify()
      }
    }, [notification])
  
    requestfortoken();
  
    onMessageListener()
      .then((payload) => {
        setNotification({title: payload?.notification?.title, body: payload?.notification?.body});     
      })
      .catch((err) => console.log('failed: ', err));

  return (
    <>
{/* <Toaster/> */}
{notification.title && (
        <div style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '5px', marginTop: '10px' }}>
          <h4>Notification</h4>
          <p><strong>{notification.title}</strong></p>
          <p>{notification.body}</p>
        </div>
      )}
    </>
  )
}

export default Notification