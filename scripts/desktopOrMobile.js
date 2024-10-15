if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {

    console.log("mobile device");

    // для мобилки
    const mobileStyleLink1 = document.createElement('link');
    mobileStyleLink1.rel = 'stylesheet';
    mobileStyleLink1.href = './styles/style.css';
    document.head.appendChild(mobileStyleLink1);


} else {

    console.log("not mobile device");

    // для десктопа
    const styleLink1 = document.createElement('link');
    styleLink1.rel = 'stylesheet';
    styleLink1.href = './styles/styleMobile.css';
    document.head.appendChild(styleLink1);

}