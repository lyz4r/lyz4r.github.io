import { addBlur } from "./blur";

const vk = document.querySelector(".socNetworks");
vk.addEventListener("click", () => {
    window.location.href = "https://vk.com/socom_airsoft_team";
})
const ds = document.querySelectorAll(".socNetworks")[1];
ds.addEventListener("click", () => {
    window.location.href = "https://discord.gg/2jUJFmaJmu";
})

document.querySelectorAll(".socNetworks").forEach(button => addBlur(button));
document.querySelectorAll(".joinTeam").forEach(button => addBlur(button));
document.querySelectorAll(".joinTeam").forEach(button => {
    button.addEventListener("mouseover", () => {
        button.innerText = `Стать\nгомосексуалистом`;
        document.querySelector(".astolfo").classList.toggle("hidden");
    });
    button.addEventListener("mouseout", () => {
        button.innerText = `Присоединиться\nк SOCOM AIRSOFT`;
        document.querySelector(".astolfo").classList.toggle("hidden");
    }
    );
});