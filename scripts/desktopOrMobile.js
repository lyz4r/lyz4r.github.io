if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {

    console.log("mobile device");

    // для мобилки
    const mobileStyleLink1 = document.createElement('link');
    mobileStyleLink1.rel = 'stylesheet';
    mobileStyleLink1.href = './styles/styleMobile.css';
    document.head.appendChild(mobileStyleLink1);

    if (window.location.pathname == "/kit-list.html") {
        const mobileStyleLink2 = document.createElement('link');
        mobileStyleLink2.rel = 'stylesheet';
        mobileStyleLink2.href = './styles/styleKitListMobile.css';
        document.head.appendChild(mobileStyleLink2);
    }

    if (window.location.pathname == "/questionary.html") {
        const mobileStyleLink3 = document.createElement('link');
        mobileStyleLink3.rel = 'stylesheet';
        mobileStyleLink3.href = './styles/styleQuizMobile.css';
        document.head.appendChild(mobileStyleLink3);
    }

} else {

    console.log("not mobile device");

    // для десктопа
    const styleLink1 = document.createElement('link');
    styleLink1.rel = 'stylesheet';
    styleLink1.href = './styles/style.css';
    document.head.appendChild(styleLink1);

    if (window.location.pathname == "/kit-list.html") {
        const styleLink2 = document.createElement('link');
        styleLink2.rel = 'stylesheet';
        styleLink2.href = './styles/styleKitList.css';
        document.head.appendChild(mobileStyleLink2);
    }

    if (window.location.pathname == "/questionary.html") {
        const styleLink3 = document.createElement('link');
        styleLink3.rel = 'stylesheet';
        styleLink3.href = './styles/styleQuiz.css';
        document.head.appendChild(styleLink3);
    }
}