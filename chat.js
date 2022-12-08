"use strict";
const send = document.querySelector(".send");
const messageBox = document.querySelector(".message");

if(navigator.serviceWorker){
    navigator.serviceWorker.register("sw.js");
};
send.addEventListener("click", ()=>{
    if(messageBox.value.length > 0){
        navigator.serviceWorker.ready.then((res)=>{
            res.active.postMessage(messageBox.value);
        });
    };
    setTimeout(()=>{
        messageBox.value = "";
    }, 100);
});
/*
navigator.serviceWorker.addEventListener("message", (e)=>{
    console.log(e.data);
});
*/