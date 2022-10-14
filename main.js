const hiddenElements = document.querySelectorAll(".hidden");
const links = document.querySelectorAll(".link");

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");

                console.log(entry.target);

                links.forEach((link) => {
                    if (link.textContent === entry.target.id) {
                        link.classList.add("link--active");
                    } else {
                        link.classList.remove("link--active");
                    }
                });
            } else {
                entry.target.classList.remove("show");
            }
        });
    },
    { threshold: 0.5 }
);

hiddenElements.forEach((element) => observer.observe(element));

// iconmenu
const iconopen = document.querySelector(".icon--open");
const navbarMenu = document.querySelector(".navbar__menu");

iconopen.addEventListener("click", () => {
    iconopen.classList.toggle("icon--close");
    navbarMenu.classList.toggle("navbar__menu--show");
});

links.forEach((link) => {
    link.addEventListener("click", () => {
        iconopen.classList.toggle("icon--close");
        navbarMenu.classList.toggle("navbar__menu--show");
    });
});
