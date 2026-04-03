function remove(objs,state) {
    dis = "none"
    if (state === true){
        dis = ""
    }
    for (obj of objs) {
        obj.style.display = dis
    }
 
}
function removeReels(state){
    const reelBtn = document.querySelectorAll("a[href*='/reels/']")
    remove(reelBtn,state)
}

function removePosts(state){
    const articles = document.getElementsByTagName("article");
    remove(articles,state)
}
