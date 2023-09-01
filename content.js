chrome.runtime.onMessage.addListener((message) => {
  if (message.action === 'updateH3') {
    const h3s = document.querySelectorAll('h3');
    h3s.forEach(h3 => h3.textContent = message.content);
  }
});