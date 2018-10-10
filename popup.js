'use strict';

let applyDiscount = document.getElementById('applyDiscount');

applyDiscount.onclick = function(element) {
  console.log("testing")
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.executeScript(
        tabs[0].id,
        { file: "/content-script.js" })
  });
};