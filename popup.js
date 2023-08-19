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

// document.addEventListener('DOMContentLoaded', function () {
//   document.getElementById('get-dom').addEventListener('click', onclick, false)
//   function onclick () {
//     chrome.tabs.query({currentWindow: true, active: true}, function (tabs) {
//       chrome.tabs.sendMessage(tabs[0].id, 'getDOM', setDOM)
//     })
//   }
//   function setDOM (dom) {
//     alert(dom);
//   }
// }, false)

function getDom(activeTabId) {
  // Get the active tab id.
  // let tabId = chrome.tabs.query({ active: true })[0].id;

  // Inject a script into the active tab to get the DOM.
  chrome.scripting.executeScript({
    target: { tabId: activeTabId },
    files: [ "content.js" ],
  });
}
