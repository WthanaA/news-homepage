function close_menu(){
    let menu = document.getElementById('menu');
    let bt_close = document.getElementById("bt-close");
    let bt_open = document.getElementById("bt-open");
    bt_close.classList.remove("active");
    bt_open.classList.add("active");
    menu.classList.add("menu-deactive")

    // remove backgroud blur
    let hightligt_content = document.getElementById('hightligt-content');
    let logo = document.getElementById('logo');
    let top3_content = document.getElementById('top3-content');

    hightligt_content.classList.remove('blur');
    logo.classList.remove('blur')
    top3_content.classList.remove('blur')
}
function open_menu(){
    let menu = document.getElementById('menu');
    let bt_close = document.getElementById("bt-close");
    let bt_open = document.getElementById("bt-open");
    bt_close.classList.add("active");
    bt_open.classList.remove("active");
    menu.classList.remove("menu-deactive")
    menu.classList.add("menu-active")
    
    // add class backgroud blur
    let hightligt_content = document.getElementById('hightligt-content');
    let logo = document.getElementById('logo');
    let top3_content = document.getElementById('top3-content');

    hightligt_content.classList.add('blur');
    logo.classList.add('blur')
    top3_content.classList.add('blur')

}

window.addEventListener("resize", () => {
    if (window.innerWidth > 700) {
        const element = document.getElementById("menu");
        const classes = element.classList;
        const classArray = Array.from(classes);
        const valueToCheck = "menu-deactive";
        if (classArray.includes(valueToCheck)) {
            menu.classList.remove("menu-active");
        }
    }
});
