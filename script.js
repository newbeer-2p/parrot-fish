let window_height = window.innerHeight;
let main_part = document.querySelector("#main-part");

let body = document.body;

window.onscroll = function() {
    let scrollY = window.scrollY;
    // console.log(window.scrollY)
    let main3 = document.querySelector("#main3");
    let text2_in_main3 = document.querySelector("#text2-in-main3");
    let parrot_in_main3 = document.querySelector("#parrot-in-main3");
    // if (scrollY <= (main3.offsetTop + text2_in_main3.offsetTop - 250) && scrollY >= main3.offsetTop) {
    if (scrollY >= main3.offsetTop - 100) {
        let parrot_fish = document.querySelector("#parrot-in-main3");
        parrot_fish.dataset.show = "1";

        parrot_move = scrollY - main3.offsetTop - 200
        if (parrot_move < 0){
            parrot_move = 0;
        }
        
        parrot_fish.style.setProperty("--mvY", parrot_move);
        parrot_fish.style.setProperty("--scH", main3.offsetTop + text2_in_main3.offsetTop - 250 - main3.offsetTop);
    }

    if (text2_in_main3.offsetTop != 0 && scrollY > (main3.offsetTop + text2_in_main3.offsetTop - 250)){
        parrot_in_main3.onclick = changeText;
        parrot_in_main3.dataset.play = "1";
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
    if (page === "main2" || page === "main3"){
        openPage(page)
    }
    window.scroll(0, des_page.offsetTop);
}

function gotopart(part){
    // let des_part = document.querySelector(`#${part}-part`);
    window.scroll(0, 0);
    body.dataset.mode = part;
}

function openPage(page){
    document.querySelector(`#${page}`).dataset.show = "1";
}

parrot_fish_text = [
    "<span class='text-white-22 mb-fs-30'>“ฉันอาศัยอยู่ที่<span class='text-org-22 mb-fs-30'>แนวปะการัง</span></span><br><span class='text-white-22 mb-fs-30'>คอยกินสาหร่ายที่เกาะบนปะการัง”</span>",
    "<span class='text-white-22 mb-fs-30'>“ยินดีที่ได้รู้จักนะ!”</span>"];
parrot_fish_text_num = 0;

function changeText(){
    if (parrot_fish_text_num < 2){
        document.querySelector("#text2-in-main3").innerHTML = parrot_fish_text[parrot_fish_text_num];
    }
    parrot_fish_text_num++;
    if (parrot_fish_text_num == 2){
        openPage("main4");
        openPage("main5");
    }
}