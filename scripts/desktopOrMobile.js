if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    // true for mobile device
    console.log("mobile device");
    
    // Create link elements for mobile styles
    const mobileStyleLink1 = document.createElement('link');
    mobileStyleLink1.rel = 'stylesheet';
    mobileStyleLink1.href = './styleMobile.css';
    document.head.appendChild(mobileStyleLink1);

    const mobileStyleLink2 = document.createElement('link');
    mobileStyleLink2.rel = 'stylesheet';
    mobileStyleLink2.href = './styleKitListMobile.css';
    document.head.appendChild(mobileStyleLink2);

    const mobileStyleLink3 = document.createElement('link');
    mobileStyleLink3.rel = 'stylesheet';
    mobileStyleLink3.href = './styleQuizMobile.css';
    document.head.appendChild(mobileStyleLink3);
} else {
    // false for not mobile device
    console.log("not mobile device");
}