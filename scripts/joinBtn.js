if (window.location.pathname == "/index.html"){
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
}
