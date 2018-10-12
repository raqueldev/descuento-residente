'use strict';

var skyscannerRule = {
  conditions: [new chrome.declarativeContent.PageStateMatcher({
    pageUrl: {hostEquals: 'www.skyscanner.es'},
  })],
  actions: [new chrome.declarativeContent.ShowPageAction()]
}

var gFlightsRule = {
  conditions: [new chrome.declarativeContent.PageStateMatcher({
    pageUrl: {urlContains: 'www.google.es/flights', schemes: ['https']},
  })],
  actions: [new chrome.declarativeContent.ShowPageAction()]
}

chrome.runtime.onInstalled.addListener(function() {
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    chrome.declarativeContent.onPageChanged.addRules([skyscannerRule, gFlightsRule]);
  });
});

let clicked = 0;
chrome.pageAction.onClicked.addListener(function(tab) {
  clicked++;
  if (clicked > 1) { 
    clicked = 0
    chrome.tabs.executeScript(tab.id, {code: 'window.location.reload();'});
  }
  else {
    chrome.tabs.query({ active: true, currentWindow: true}, function(tabs) {
      tabs[0].url.includes("flights")
      ?  chrome.tabs.executeScript(tab.id, {file: "/content-script-flights.js"})
      : chrome.tabs.executeScript(tab.id, {file: "/content-script-skyscanner.js"})
    })
  }
});

