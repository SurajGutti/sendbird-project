import React, { useEffect } from "react";

import SendbirdApp from "@sendbird/uikit-react/App";
import "@sendbird/uikit-react/dist/index.css";

import { io } from "socket.io-client";
import { toast, ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const APP_ID = "9D89F410-3B2F-4DA1-A686-BB3BE5A08738";
const USER_ID = "user2"

export const AppPage = () => {

  const notify = (message) => {
    toast.warn(message);
  }
  
  useEffect(() => {   
    const socket = io("http://localhost:3001");

    socket.on("connect", () => {
      console.log('connected!!')
    })
    socket.on("sendbirdEvent", (data) => {
        console.log(data);
        notify(data.message);
    });
  })

  return(
    <>
    <div className="App" style={{height: 700}}>
      <SendbirdApp
          appId={APP_ID}
          userId={USER_ID}
      />
      <ToastContainer />
    </div>
    </>
  )
}