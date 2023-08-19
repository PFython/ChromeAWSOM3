chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
  chrome.scripting.executeScript({
      target: { tabId: tabs[0].id },
      function: getDOMAsJSON
  }, (result) => {
      if (result && result.length > 0) {
          displayDOMContent(result[0].result);
      }
  });
});

function getDOMAsJSON() {
  function elementToJSON(node) {
      let children = [];
      for(let i = 0; i < node.childNodes.length; i++) {
          let child = node.childNodes[i];
          if(child.nodeType === 1) { // ELEMENT_NODE
              children.push(elementToJSON(child));
          }
      }
      return {
          tagName: node.tagName,
          attributes: Array.from(node.attributes).reduce((acc, attr) => {
              acc[attr.name] = attr.value;
              return acc;
          }, {}),
          children: children
      };
  }

  return elementToJSON(document.documentElement);
}

function displayDOMContent(json) {
  let contentDiv = document.getElementById('dom-content');
  contentDiv.textContent = JSON.stringify(json, null, 2);
}