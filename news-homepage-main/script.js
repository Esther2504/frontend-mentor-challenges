function openMenu() {
    const menu = document.querySelector(".mobile-nav")
    const cross = document.querySelector(".cross")
    menu.style.display = "flex";
    cross.style.display = "flex";
}

function closeMenu() {
    const menu = document.querySelector(".mobile-nav")
    const cross = document.querySelector(".cross")
    menu.style.display = "none";
    cross.style.display = "none";
}