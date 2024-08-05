if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
    // true for mobile device
<<<<<<< HEAD
    console.log("mobile device");
=======
    document.write("mobile device");
>>>>>>> 5208d7c4e6ac68f6241475d426103d50421bdcc4
    const styleMain = document.querySelector(".styleIndex");
    const styleKitList = document.querySelector(".styleKitList");
    const styleQuiz = document.querySelector(".styleQuiz");
    styleMain.innerHTML = `<link class="styleIndex" rel="stylesheet" href="./styleMobile.css"></link>`;
<<<<<<< HEAD
    styleKitList.innerHTML = `<link class="styleKitList" rel="stylesheet" href="./styleKitListMobile.css"></link>`;
    styleQuiz.innerHTML = `<link class="styleQuiz" rel="stylesheet" href="./styleQuizMobile.css"></link>`;
  }else{
    // false for not mobile device
    console.log("not mobile device");
=======
    styleKitList.innerHTML = `<link class="styleIndex" rel="stylesheet" href="./styleKitListMobile.css"></link>`;
    styleQuiz.innerHTML = `<link class="styleIndex" rel="stylesheet" href="./styleQuizMobile.css"></link>`;
  }else{
    // false for not mobile device
    document.write("not mobile device");
>>>>>>> 5208d7c4e6ac68f6241475d426103d50421bdcc4
  }


