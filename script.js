let window_height = window.innerHeight;

let body = document.body;

window.onscroll = function(){
    let scrollY = window.scrollY;

    if (scrollY == 0){
        body.dataset.mode = "home";
    }
}

function goto(page){
    if (page === "first"){
        body.dataset.mode = "main";
        window.scroll(0, window_height);
    }
}