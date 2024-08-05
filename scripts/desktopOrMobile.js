if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
    // true for mobile device
    console.log("mobile device");
    const styleMain = document.querySelector(".styleIndex");
    const styleKitList = document.querySelector(".styleKitList");
    const styleQuiz = document.querySelector(".styleQuiz");
    styleMain.innerHTML = `<link class="styleIndex" rel="stylesheet" href="./styleMobile.css"></link>`;
    styleKitList.innerHTML = `<link class="styleKitList" rel="stylesheet" href="./styleKitListMobile.css"></link>`;
    styleQuiz.innerHTML = `<link class="styleQuiz" rel="stylesheet" href="./styleQuizMobile.css"></link>`;
  }else{
    // false for not mobile device
    console.log("not mobile device");
  }


