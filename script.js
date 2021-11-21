let window_height = window.innerHeight;
let main_part = document.querySelector("#main-part");
let pic_click = document.querySelector("#pic-click");

let body = document.body;

window.onscroll = function() {
    let scrollY = window.scrollY;
    // console.log(window.scrollY)
    let main3 = document.querySelector("#main3");
    let main4 = document.querySelector("#main4");
    let text2_in_main3 = document.querySelector("#text2-in-main4");
    let parrot_in_main3 = document.querySelector("#parrot-in-main3");
    let img_parrot_main = document.querySelector("#img-parrot-main");
    
    if (main3.offsetTop != 0 && scrollY >= main3.offsetTop) {
        parrot_in_main3.dataset.show = "1";
    }
    else if (main3.offsetTop != 0) {
        parrot_in_main3.dataset.show = "0";
    }

    if (main4.offsetTop != 0 && scrollY >= main4.offsetTop - 100 && scrollY <= main4.offsetTop+300){
        img_parrot_main.setAttribute("onclick", "changeText()")
        pic_click.setAttribute("onclick", "changeText()")
        img_parrot_main.dataset.play = "1";
        pic_click.dataset.play = "1";
    }
    else {
        img_parrot_main.setAttribute("onclick", "")
        pic_click.setAttribute("onclick", "")
        img_parrot_main.dataset.play = "0";
        pic_click.dataset.play = "0";
    }
}

function goto(page) {
    let des_page = document.querySelector(`#${page}`);
    if (page === "main2"){
        openPage("main2");
    }
    if (page === "main3"){
        openPage("main3");
        openPage("main4");
    }
    window.scroll(0, des_page.offsetTop);
}

function gotopart(part){
    // if (part === "story"){
    //     let pages = document.querySelectorAll("#story-part .page");
    //     pages.forEach((page) => {
    //         page.dataset.show = "0";
    //     })
    //     pages[0].dataset.show = "1";
    // }
    loading();
    window.scroll(0, 0);
    body.dataset.mode = part;
    document.querySelector("#parrot-in-main3").dataset.show = "0";
    // if (part === "story"){
    //     let pages = document.querySelectorAll("#story-part .page");
    //     window.setTimeout(() => {
    //         pages.forEach((page) => {
    //             page.dataset.show = "1";
    //         })
    //     }, 1000)
    // }
}

function openPage(page){
    document.querySelector(`#${page}`).dataset.show = "1";
}

parrot_fish_text_main = [
    "<span class='text-white-22 mb-fs-30'>“ฉันอาศัยอยู่ที่<span class='text-org-22 mb-fs-30'>แนวปะการัง</span></span><br><span class='text-white-22 mb-fs-30'>คอยกินสาหร่ายที่เกาะบนปะการัง”</span>",
    "<span class='text-white-22 mb-fs-30'>“ยินดีที่ได้รู้จักนะ!”</span>"];
parrot_fish_text_main_num = 0;

function changeText(){
    if (parrot_fish_text_main_num < 2){
        document.querySelector("#text2-in-main4").innerHTML = parrot_fish_text_main[parrot_fish_text_main_num];
    }
    parrot_fish_text_main_num++;
    if (parrot_fish_text_main_num == 2){
        document.querySelector("#img-parrot-main").dataset.play = "0";
        document.querySelector("#pic-click").remove();
        openPage("main5");
        openPage("main6");
        window.setTimeout(function () {
            goto("main5")
        }, 500)
    }
}


function loading(){
    let loading = document.querySelector("#loading");
    loading.dataset.show = "1";
    window.setTimeout(() => {
        loading.dataset.show = "0";
    }, 1000)
}