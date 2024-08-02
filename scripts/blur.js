export function addBlur(button){
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


if (window.location.pathname == "/socom-website/questionary.html"){
    console.log("quiz was recognised");
    addBlur(document.querySelector(".submit"));
}