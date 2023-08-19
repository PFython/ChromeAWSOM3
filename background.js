chrome.runtime.onInstalled.addListener(function() {
    chrome.scripting.registerContentScript({
        match: ["*://*/*"],
        js: ["content.js"],
    });
  });
