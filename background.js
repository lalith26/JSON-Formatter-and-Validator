chrome.browserAction.onClicked.addListener(function(activeTab){
  console.log("browser action clicked");
  chrome.tabs.create({"url":chrome.extension.getURL('index.html')}, function(tab){
    console.log("tab opened");
  });
});
