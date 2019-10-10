"use strict";
chrome.contextMenus.create({
    title: "About",
    contexts:["selection"],
    onclick: ()=>{
        window.open("https://www.facebook.com/hypnguyen1209");
    }
})