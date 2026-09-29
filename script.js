/* ==============================
   SCROLL REVEAL
============================== */

const reveal =
    document.querySelectorAll(".reveal");

const observer =
    new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {
                    entry.target.classList.add("active");
                }

            });

        },
        {
            threshold: 0.15
        }
    );


reveal.forEach((element) => {
    observer.observe(element);
});


/* ==============================
   3D TILT
============================== */

const cards =
    document.querySelectorAll(".tilt");

cards.forEach((card) => {

    card.addEventListener("mousemove", (e) => {

        const rect =
            card.getBoundingClientRect();

        const x =
            e.clientX - rect.left;

        const y =
            e.clientY - rect.top;

        const centerX =
            rect.width / 2;

        const centerY =
            rect.height / 2;

        const rotateX =
            ((y - centerY) / centerY) * -4;

        const rotateY =
            ((x - centerX) / centerX) * 4;

        card.style.transform =
            `perspective(1000px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             scale(1.02)`;

    });


    card.addEventListener("mouseleave", () => {

        card.style.transform = "";

    });

});


/* ==============================
   MOUSE PARALLAX
============================== */

document.addEventListener("mousemove", (e) => {

    const x =
        e.clientX / window.innerWidth - 0.5;

    const y =
        e.clientY / window.innerHeight - 0.5;

    document.querySelector(".glow-1").style.transform =
        `translate(${x * 30}px, ${y * 30}px)`;

    document.querySelector(".glow-2").style.transform =
        `translate(${x * -40}px, ${y * -40}px)`;

});


/* ==============================
   NAV ACTIVE
============================== */

const sections =
    document.querySelectorAll("section[id]");

const links =
    document.querySelectorAll(".navbar nav a");


window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach((section) => {

        const top =
            section.offsetTop - 200;

        if (window.scrollY >= top) {
            current =
                section.getAttribute("id");
        }

    });


    links.forEach((link) => {

        link.style.color = "";

        if (
            link.getAttribute("href")
            === `#${current}`
        ) {

            link.style.color =
                "#ff6a00";

        }

    });

});