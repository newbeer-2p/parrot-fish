let window_height = window.innerHeight;
let main_part = document.querySelector("#main-part");

let body = document.body;

window.onscroll = function() {
    let scrollY = window.scrollY;
    console.log(window.scrollY)
    let main3 = document.querySelector("#main3");
    if (scrollY <= (main3.offsetTop + document.querySelector("#text2-in-main3").offsetTop - 250) && scrollY >= main3.offsetTop) {
        document.querySelector("#parrot-in-main3").dataset.show = "1";
        document.querySelector("#parrot-in-main3").style.setProperty("--mvY", scrollY - main3.offsetTop);
    }



    // if (scrollY == 0){
    //     body.dataset.mode = "home";
    // }
    // else{
    //     body.dataset.mode = "main";
    // }
}

function goto(page) {
    let des_page = document.querySelector(`#${page}`);
    window.scroll(0, des_page.offsetTop);
    if (page === "main3") {
        document.querySelector("#parrot-in-main3").dataset.show = "1";
    }
}