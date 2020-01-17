$("#btn").on("click", () => {
  chrome.tabs.getAllInWindow(null, function (tabs) {

    tabs.sort(function(a, b) {
      if(a.url < b.url) return -1;
      if(a.url > b.url) return 1;
      return 0;
    })
    $.each(tabs, function (index, tab) {
      chrome.tabs.move(tab.id, {'index': -1});
    })
  });
});