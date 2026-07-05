/* ===========================================
   WEBNOVA Premium JavaScript
=========================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ===========================
       Navbar Scroll Effect
    =========================== */

    const header = document.querySelector("header");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 80) {

            header.style.background = "rgba(5,10,20,.95)";
            header.style.boxShadow = "0 10px 30px rgba(0,0,0,.35)";

        } else {

            header.style.background = "rgba(8,17,31,.75)";
            header.style.boxShadow = "none";

        }

    });

    /* ===========================
       Smooth Scroll
    =========================== */

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function (e) {

            e.preventDefault();

            const target = document.querySelector(this.getAttribute("href"));

            if (target) {

                target.scrollIntoView({
                    behavior: "smooth"
                });

            }

        });

    });

    /* ===========================
       Counter Animation
    =========================== */

    const counters = document.querySelectorAll(".stats h2");

    counters.forEach(counter => {

        const targetText = counter.innerText;

        const target = parseInt(targetText.replace(/\D/g, ""));

        if (!target) return;

        let count = 0;

        const speed = target / 80;

        const update = () => {

            if (count < target) {

                count += speed;

                counter.innerText = Math.floor(count) + "+";

                requestAnimationFrame(update);

            } else {

                counter.innerText = targetText;

            }

        };

        update();

    });

    /* ===========================
       Reveal Animation
    =========================== */

    const reveals = document.querySelectorAll(

        ".service-card,.project,.price-card,.testimonial,.why-box"

    );

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

            }

        });

    }, {

        threshold: .2

    });

    reveals.forEach(item => {

        item.style.opacity = "0";
        item.style.transform = "translateY(60px)";
        item.style.transition = ".7s ease";

        observer.observe(item);

    });

});

/* ===========================
   Back To Top Button
=========================== */

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

topBtn.id = "topBtn";

document.body.appendChild(topBtn);

Object.assign(topBtn.style, {

    position: "fixed",
    right: "25px",
    bottom: "25px",
    width: "55px",
    height: "55px",
    borderRadius: "50%",
    border: "none",
    background: "#2563eb",
    color: "#fff",
    fontSize: "24px",
    cursor: "pointer",
    display: "none",
    zIndex: "999"

});

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.onclick = () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

};

/* ===========================
   Buy Button
=========================== */

document.querySelectorAll(".price-card .primary-btn").forEach(btn => {

    btn.addEventListener("click", () => {

        alert("Redirecting to checkout...");

    });

});

/* ===========================
   Loading Animation
=========================== */

window.onload = () => {

    document.body.style.opacity = "0";

    setTimeout(() => {

        document.body.style.transition = ".6s";

        document.body.style.opacity = "1";

    }, 200);

};

console.log("WEBNOVA Loaded Successfully 🚀");