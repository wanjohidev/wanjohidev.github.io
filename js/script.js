// Footer year
const year = document.getElementById('year');
year.textContent = new Date().getFullYear();

// Hide navbar while scrolling down
const header = document.querySelector(".site-header");
const headerHeight = parseInt(getComputedStyle(document.documentElement)
    .getPropertyValue('--header-height'));

let lastScroll = 0;

window.addEventListener("scroll", () => {

    const currentScroll = window.scrollY;

    if (currentScroll > lastScroll && currentScroll > headerHeight){
        header.classList.add("hidden");
    } else {
        header.classList.remove("hidden");
    }

    lastScroll = currentScroll;

});

// Highlight current page
const current = window.location.pathname;

const links = document.querySelectorAll("a");

links.forEach(link => {
    if (link.getAttribute("href") === current){
        link.classList.add("active");
    }
});

// get local time
function updateClock() {

    const clock = document.getElementById("clock");
    if (!clock) {
        return;
    }

    const formatter = new Intl.DateTimeFormat("en-GB", {
        timeZone: "Africa/Nairobi",
        hour: "numeric",
        minute: "2-digit",
        hour12: true
    });

    clock.textContent = formatter.format(new Date()) + " (GMT+3)";
}

updateClock();
setInterval(updateClock, 1000);