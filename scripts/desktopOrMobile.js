var hasTouchScreen = false;

if ("maxTouchPoints" in navigator) {
    hasTouchScreen = navigator.maxTouchPoints > 0;
} 

if (hasTouchScreen) {
    const styleMain = document.querySelector(".styleIndex");
    const styleKitList = document.querySelector("styleKitList");
    const styleQuiz = document.querySelector("styleQuiz");
    styleMain.innerHTML = `<link class="styleIndex" rel="stylesheet" href="./styleMobile.css"></link>`;
    styleKitList.innerHTML = `<link class="styleIndex" rel="stylesheet" href="./styleKitListMobile.css"></link>`;
    styleQuiz.innerHTML = `<link class="styleIndex" rel="stylesheet" href="./styleQuizMobile.css"></link>`;
}


