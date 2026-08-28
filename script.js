let lastScroll = 0;
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    const currentScroll = window.scrollY;

    if (currentScroll > 80 && currentScroll > lastScroll) {
        header.classList.add("minimized");
    } else if (currentScroll < lastScroll) {
        header.classList.remove("minimized");
    }

    lastScroll = currentScroll;
});
