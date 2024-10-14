const occupation = document.querySelector(".occupation");
const occupationSel = document.getElementById("occupation");

occupationSel.addEventListener("change", ()=>{
    if (occupationSel.value == "other"){
        occupation.classList.remove("excluded");
    }
    else if (occupationSel.value != "other"){
        occupation.classList.add("excluded");
    }
})

document.getElementById("formElem").addEventListener("submit", function (e) {
    e.preventDefault();
  
    let formData = new FormData(formElem);

    console.log(Object.fromEntries(formData));

    emailjs.init({
        publicKey: 'BLpflIvrecPuO8xmP',
        limitRate: {
          // Set the limit rate for the application
          id: 'app',
          // Allow 1 request per 10s
          throttle: 10000,
        },
      });


        emailjs.send('service_miduali', 'template_lzle293', Object.fromEntries(formData)).then(
            (response) => {
              console.log('SUCCESS!', response.status, response.text);
            },
            (error) => {
              console.log('FAILED...', error);
            },
          );
     });

    /*function sendEmail() {
        Email.send(formData)
            .then(function () {
                alert("mail sent successfully")
            });
    }
  });*/

