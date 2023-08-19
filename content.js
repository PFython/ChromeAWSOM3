// var pageElements = document.querySelectorAll('h3');
// var pageText = [];
// for (var i = 0; i < pageElements.length; i++) {
//     pageText.push(pageElements[i].textContent);
// }
// var joinedText = pageText.join('\n\n* ');
// alert(joinedText);

// Get the active tab ID.
// const tabId = await chrome.tabs.query({active: true, currentWindow: true});

// // Inject a script into the tab.
// await chrome.tabs.executeScript(tabId, {
//   code: `
//     const dom = document;
//     const title = document.title;
//     const element = document.getElementById("my-element");

//     chrome.runtime.sendMessage({
//       info: {
//         title,
//         element,
//       },
//     });
//   `,
// });

// const dom = chrome.runtime.getBackgroundPage().get_dom();

// Listen for messages
// chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
//     // If the received message has the expected format...
//     if (msg.text === 'getDOM') {
//         // Call the specified callback, passing
//         // the web-page's DOM content as argument
//         sendResponse(document.all[0].outerHTML);
//         // sendResponse({dom: document.documentElement.outerHTML});
//     }
// });

// document.addEventListener('DOMContentLoaded', function () {
//     document.getElementById('get-dom').addEventListener('click', onclick, false)
//     function onclick () {
//       chrome.tabs.query({currentWindow: true, active: true}, function (tabs) {
//         chrome.tabs.sendMessage(tabs[0].id, 'getDOM', setDOM)
//       })
//     }
//     function setDOM (dom) {
//       console.log(dom);
//     }
//   }, false)

function getDom => {
    // Get the DOM of the current page.
  const dom = document.querySelector("body");

  // Send the DOM to the main extension window.
  chrome.tabs.sendMessage(null, { dom: dom });
});

