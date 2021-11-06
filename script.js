let window_height = window.innerHeight;
let main_part =  document.querySelector("#main-part");

let body = document.body;

window.onscroll = function(){
    let scrollY = window.scrollY;

    main_part.style.setProperty("--sy", scrollY)
    // if (scrollY+window_height >= document.querySelector("#main4").offsetTop+1100){
    //     window.scroll(0, document.querySelector("#main4").offsetTop)
    // }



    // if (scrollY == 0){
    //     body.dataset.mode = "home";
    // }
    // else{
    //     body.dataset.mode = "main";
    // }
}

function goto(page){
    let des_page = document.querySelector(`#${page}`);
    // if (page === "main2"){
    //     body.dataset.mode = "main";
    window.scroll(0, des_page.offsetTop);
    // }
}