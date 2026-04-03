const observer = new MutationObserver(() => {
  chrome.storage.sync.get(["reel"], (res) =>{
    if (res.reel === true){
      removePosts(false);
      removeReels(false);
    }
    else {
      removePosts(true);
      removeReels(true);
    }
  })
});

observer.observe(document.body, {
  subtree: true,
  childList: true,
  attributes: true
});