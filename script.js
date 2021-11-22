let window_height = window.innerHeight;
let main_part = document.querySelector("#main-part");
let pic_click = document.querySelector("#pic-click");
let click_main2 = document.querySelector(".click-main2");

let body = document.body;

window.onscroll = function() {
    let scrollY = window.scrollY;
    // console.log(window.scrollY)
    let main3 = document.querySelector("#main3");
    let main4 = document.querySelector("#main4");
    let text2_in_main3 = document.querySelector("#text2-in-main4");
    let parrot_in_main3 = document.querySelector("#parrot-in-main3");
    let img_parrot_main = document.querySelector("#img-parrot-main");
    let story5 = document.querySelector("#story5");
    let pla_story = document.querySelector("#pla-story");
    let img_pla = document.querySelector("#img-pla");
    
    if (main3.offsetTop != 0 && scrollY >= main3.offsetTop) {
        parrot_in_main3.dataset.show = "1";
        parrot_in_main3.style.setProperty("--swY", scrollY - main3.offsetTop)
    }
    else if (main3.offsetTop != 0) {
        // parrot_in_main3.dataset.show = "0";
        parrot_in_main3.style.setProperty("--swY", 0)
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
    
    if (story5.offsetTop != 0 && scrollY >= story5.offsetTop+200) {
        pla_story.dataset.show = "1";
        let swY = scrollY -story5.offsetTop-200;
        if(swY >= 0){
            pla_story.style.setProperty("--swY", swY)
        }
        else{
            pla_story.style.setProperty("--swY", 0)
        }
    }
    else if (story5.offsetTop != 0) {
        // pla_story.dataset.show = "0";
        pla_story.style.setProperty("--swY", 0)
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
        click_main2.remove()
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

let x = 1;
function changeText2() {
    var y = document.getElementById("change");
    var z = document.getElementById("change2");
    var b = document.getElementById("change3");
    if (x == 1) {
        y.innerHTML = "";
        b.innerHTML = "";
        z.innerHTML = "ปลานกแก้วได้แต่เศร้าใจ <br> อาศัยอยู่ที่นี่คนเดียวต่อไป <br>..................";
        x++;
    } else if(x == 2){
        openPage("story9");
        goto("story9");
        document.getElementById("pla-story").style.display = "none";
    }
} 

let t = 1;
function changeText3() {
    var tx = document.getElementById("chtext");
    if (t == 1) {
        tx.innerHTML = "*จับปลา หรือสัตว์น้ำเขตอุทยาน โทษสูงสุดจำคุกไม่เกิน 5 ปี <br>หรือปรับไม่เกิน 20,000 บาท หรือทั้งจำทั้งปรับ*";
        t++;
    } else if(x == 2){
        document.getElementById("chtext").style.display = "none";
        document.getElementById("sharebt").dataset.show = "1";
    }
} 
function sharefb(){
    window.open("https://www.facebook.com/sharer/sharer.php?u=save-parrot-fish.netlify.app", "", "width=200,height=100");
}