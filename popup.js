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

function insertContentScript(activeTabId) {
  // activeTabId provided from PyScript, but could be from JS e.g.
  // let tabId = chrome.tabs.query({ active: true })[0].id;

  // Inject content.js into the active tab to get the DOM.
  chrome.scripting.executeScript({
    target: { tabId: activeTabId },
    files: [ "content.js" ],
  });
}

