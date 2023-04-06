document.getElementById("theme").onclick = function () { switchTheme(); };

function switchTheme() {
    const background = document.getElementsByClassName("background-color");
    const navBar = document.getElementsByClassName("navigation-bar");
    const headText = document.getElementsByClassName("head-text");
    const sheet = document.getElementsByClassName("item-sheet");
    const content = document.getElementsByClassName("item-content");

    const themebtn = document.getElementsByClassName("theme-btn");
    const showUpBtn = document.getElementsByClassName("scroll-up-btn");

    const notSpText = document.getElementsByClassName("not-support-text");
    
    for (let i = 0; i < navBar.length; i++) {
        navBar[i].classList.toggle("navigation-bar-light");
    }

    for (let i = 0; i < headText.length; i++) {
        headText[i].classList.toggle("head-text-light");
    }

    for (let i = 0; i < notSpText.length; i++) {
        notSpText[i].classList.toggle("not-support-text-light");
    }

    for (let i = 0; i < showUpBtn.length; i++) {
        showUpBtn[i].classList.toggle("scroll-up-btn-light");
    }

    for (let i = 0; i < themebtn.length; i++) {
        themebtn[i].classList.toggle("theme-btn-light");
    }

    for (let i = 0; i < background.length; i++) {
        background[i].classList.toggle("sheet-light");
    }

    for (let i = 0; i < sheet.length; i++) {
        sheet[i].classList.toggle("item-sheet-light");
    }

    for (let i = 0; i < content.length; i++) {
        content[i].classList.toggle("item-content-light");
    }
}
