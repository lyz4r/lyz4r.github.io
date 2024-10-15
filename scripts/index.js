
const vk = document.querySelector(".socNetworks");
vk.addEventListener("click", () => {
    window.location.href = "https://vk.com/socom_airsoft_team";
})


console.log("main page was recognised");

document.querySelectorAll(".joinTeam").forEach(button => {
    button.addEventListener("mouseover", ()=> {
        button.innerText = `Welcome to the\nclub, buddy`;
        console.log("Somebody wants to join our sect... God save his soul")
        document.querySelector(".astolfo").classList.toggle("hidden");
    });
    button.addEventListener("mouseout", () => {
        button.innerText = `Присоединиться\nк SOCOM AIRSOFT`;
        document.querySelector(".astolfo").classList.toggle("hidden");
    }
    );
});


let flag = 0;
var delayedShow;

const hud = document.querySelector(".greenHUD");
const midIm = document.querySelector(".middleImage")
let flagMove = 0;


document.addEventListener("DOMContentLoaded", function(arg) {
    let c = 0;
    let load = setInterval(() => {

        c += 0.01;
        midIm.style.opacity = c;
        console.log(midIm.style.opacity)

        if (midIm.style.opacity >= 0.5) {
            clearInterval(load);
        }
    }, 20)
});



midIm.addEventListener("mouseover", () => {
    if (flag == 0 && flagMove == 0) {
        flag = 1;

        let c = 0.5;
        let over = setInterval(() => {

            c += 0.01;
            midIm.style.opacity = c;
            hud.style.opacity = c-0.5;
            console.log(midIm.style.opacity)

            if (midIm.style.opacity >= 1) {
                clearInterval(over);
                flag = 0;
            }
        }, 20)
    }


});


document.addEventListener('mousemove', function (event) {
    if(flag == 0 && parseFloat(midIm.style.opacity) >= 1 && flagMove == 0){
    const rect = midIm.getBoundingClientRect();
    const isOutside =
        event.clientX < rect.left ||
        event.clientX > rect.right ||
        event.clientY < rect.top ||
        event.clientY > rect.bottom;

    if (isOutside) {
        flagMove = 1;
        let c = 1;
        let out = setInterval(() => {

            c -= 0.01;
            midIm.style.opacity = c;
            hud.style.opacity = c-0.5;
            console.log(midIm.style.opacity);
            if (midIm.style.opacity <= 0.5) {
                
                console.log("issue there")
                clearInterval(out);
                flagMove = 0;

            }
        }, 20)
    }
    }
}
);

