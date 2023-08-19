// This script is inserted into the active browser tab and rerun/rerendered
var dom = document.querySelector("body");
if (document.title.includes("PyScript DOM Interaction")) {
  // Current scope is popup.html... ignore
} else {
  var pageElements = document.querySelectorAll('h3')
  var pageText = [];
  for (var i = 0; i < pageElements.length; i++) {
      pageText.push(pageElements[i].textContent);
  }
  var joinedText = pageText.join('\n* ');
  // var dom = document.querySelector("body");
  // chrome.runtime.sendMessage(dom);
  var finalText = "Active Tab: " + document.title + "\nURL: " + document.URL + "\nH3 Titles:\n\n* " + joinedText
  chrome.runtime.sendMessage(finalText);
}

// Send the DOM to the main extension window.
// chrome.tabs.sendMessage(null, { dom: dom });
// Raises: Uncaught TypeError: Cannot read properties of undefined (reading 'sendMessage')

