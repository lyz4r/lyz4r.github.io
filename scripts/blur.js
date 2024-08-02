function addBlur(button){
    button.addEventListener("mouseover", ()=>{
        event.target.classList.add("blur");
    })
    button.addEventListener("mouseout", ()=>{
        event.target.classList.remove("blur");
    })
}

document.querySelectorAll(".btnw").forEach(button => addBlur(button));
document.querySelectorAll(".btng").forEach(button => addBlur(button));
document.querySelectorAll(".logo").forEach(button => addBlur(button));

if (window.location.pathname == "/index.html"){
    console.log("main page was recognised");
    document.querySelectorAll(".socNetworks").forEach(button => addBlur(button));
    document.querySelectorAll(".joinTeam").forEach(button => addBlur(button));
    document.querySelectorAll(".joinTeam").forEach(button => {
        button.addEventListener("mouseover", ()=> {
            button.innerText = `Стать\nгомосексуалистом`;
            document.querySelector(".astolfo").classList.toggle("hidden");
        });
        button.addEventListener("mouseout", () => {
            button.innerText = `Присоединиться\nк SOCOM AIRSOFT`;
            document.querySelector(".astolfo").classList.toggle("hidden");
        }
        );
    });
}


if (window.location.pathname == "/questionary.html"){
    console.log("quiz was recognised");
    addBlur(document.querySelector(".submit"));
}