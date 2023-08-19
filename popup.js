function getChrome(){
  return chrome;
  }

function clipboardCopy(text) {
    const input = document.createElement('input');
    input.style.position = 'fixed';
    input.style.opacity = 0;
    input.value = text;
    document.body.appendChild(input);
    input.select();
    document.execCommand('copy');
    document.body.removeChild(input);
    alert("New content copied to clipboard")
}

// // Inject a script into the tab.
// await chrome.tabs.executeScript(activeTabId, {
//     code: `
//       const dom = document;
//       const title = document.title;
//       const element = document.getElementById("my-element");

//       chrome.runtime.sendMessage({
//           info: {
//               title,
//               element,
//             },
//           });
//         `,
//       });

// Listen for messages from the content script
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  // Check if the message is an object
  var finalMessage = message
  if (typeof message === "object") {
    // Handle the received object here
    alert(message);
  } else {
    alert(message);
  }
});

var activeTabId;

function getActiveTabId(callback) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        var activeTabId = tabs[0].id;
        callback(activeTabId);
    });
}

function insertContentScript() {
  // activeTabId provided from PyScript, but could be from JS
  getActiveTabId(function(activeTabId) {
    // Inject content.js into the active tab to get the DOM.
    chrome.scripting.executeScript({
      target: { tabId: activeTabId },
      files: [ "content.js" ],
    });
  }
)};
