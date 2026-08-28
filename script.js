const header = document.querySelector("header");

let lastScroll = 0;

window.addEventListener("scroll", () => {
    const currentScroll = window.scrollY;

    if (currentScroll > lastScroll && currentScroll > 100) {
        header.classList.add("minimized");
    } else if (currentScroll < lastScroll) {
        header.classList.remove("minimized");
    }

    lastScroll = currentScroll;
});
