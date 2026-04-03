document.addEventListener("DOMContentLoaded",() => {
    const btn = document.getElementById("checkboxInput")
    chrome.storage.sync.get(["reel"], (res) =>{
            var reelBtnState = res.reel
            console.log(reelBtnState)
            if (reelBtnState != null){
                btn.checked = reelBtnState
            }
    })
    

    btn.addEventListener("change", () => {

        chrome.storage.sync.get(["reel"], (res) =>{
            var reelBtnState = res.reel
            
            console.log(reelBtnState)
            state = true
            if (reelBtnState == null){
                state = state
            }
            else if (reelBtnState){
                state = false
            }
            else {
                state = state
            }

            chrome.storage.sync.set({reel: state})
        });
    })
    
})

