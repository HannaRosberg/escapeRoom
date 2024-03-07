const menutoggle = document.querySelector(".mobile__menu");
const mobilemenu = document.querySelector(".mobile__menu__list");
const openbutton = document.querySelector(".menu__open");
const closebutton = document.querySelector(".menu__close");


openbutton.addEventListener("click", () => {
    menutoggle.classList.add("menu__on");
    mobilemenu.classList.add("menu__on__list");

});
closebutton.addEventListener("click", () => {
    menutoggle.classList.remove("menu__on");
    mobilemenu.classList.remove("menu__on__list");

});