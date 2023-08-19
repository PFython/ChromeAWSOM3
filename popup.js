document.addEventListener('DOMContentLoaded', () => {
  const helloDiv = document.getElementById('hello');

  const observer = new MutationObserver(() => {
    // Fetch the currently active tab
    chrome.tabs.query({active: true, currentWindow: true}, tabs => {
      const activeTab = tabs[0];

      chrome.scripting.executeScript({
        target: {tabId: activeTab.id},
        function: updateH3Content,
        args: [helloDiv.textContent]
      });
    });
  });

  observer.observe(helloDiv, {childList: true, characterData: true, subtree: true});
  
  function updateH3Content(content) {
    const h3s = document.querySelectorAll('h3');
    h3s.forEach(h3 => h3.textContent = content);
  }
});
