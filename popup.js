document.getElementById('startBackup').addEventListener('click', async () => {
    document.getElementById('status').textContent = "Starting backup...";
  
    // Execute the backup script in the active tab
    chrome.scripting.executeScript({
      target: { tabId: (await getActiveTab()).id },
      files: ['backup.js']
    }, () => {
      document.getElementById('status').textContent = "Backup complete.";
    });
  });
  
  function getActiveTab() {
    return new Promise((resolve, reject) => {
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        resolve(tabs[0]);
      });
    });
  }
  