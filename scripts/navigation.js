

const logo = document.querySelector(".logo");
logo.addEventListener("click", () => {
    window.location.href = "./index.html";
})

if (window.location.pathname == "/socom-website/index.html") {
    document.querySelector(".aboutUs").addEventListener("click", () => {
        event.preventDefault();
        console.log("success");
        window.scrollBy({
            top: 1000,
            left: 0,
            behavior: "smooth"
        });
    }
    )
} else {
    document.querySelector(".aboutUs").addEventListener("click", () => {
        event.preventDefault();
        window.location.href = "./index.html";
    }
    )
}