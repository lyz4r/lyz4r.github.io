var hasTouchScreen = false;

if ("maxTouchPoints" in navigator) {
    hasTouchScreen = navigator.maxTouchPoints > 0;
} else if ("msMaxTouchPoints" in navigator) {
    hasTouchScreen = navigator.msMaxTouchPoints > 0;
} else {
    var mQ = window.matchMedia && matchMedia("(pointer:coarse)");
    if (mQ && mQ.media === "(pointer:coarse)") {
        hasTouchScreen = !!mQ.matches;
    } else if ('orientation' in window) {
        hasTouchScreen = true; // deprecated, but good fallback
    } else {
        // Only as a last resort, fall back to user agent sniffing
        var UA = navigator.userAgent;
        hasTouchScreen = (
            /\b(BlackBerry|webOS|iPhone|IEMobile)\b/i.test(UA) ||
            /\b(Android|Windows Phone|iPad|iPod)\b/i.test(UA)
        );
    }
}

if (hasTouchScreen) {
    const styleMain = document.querySelector(".styleIndex");
    const styleKitList = document.querySelector(".styleKitList");
    const styleQuiz = document.querySelector(".styleQuiz");
    styleMain.innerHTML = `<link class="styleIndex" rel="stylesheet" href="./styleMobile.css"></link>`;
    styleKitList.innerHTML = `<link class="styleIndex" rel="stylesheet" href="./styleKitListMobile.css"></link>`;
    styleQuiz.innerHTML = `<link class="styleIndex" rel="stylesheet" href="./styleQuizMobile.css"></link>`;
}


