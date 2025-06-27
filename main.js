const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});
ScrollReveal().reveal(".header__image img", {
  distance: "50px",
  origin: "right",
  duration: 1000,
  delay: 200,
  opacity: 0,
  easing: "ease-in-out",
});

ScrollReveal().reveal(".header__content > *", {
  distance: "40px",
  origin: "bottom",
  interval: 200, // stagger each element
  duration: 1000,
  opacity: 0,
  easing: "ease-in-out",
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".header__image img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".header__content h2", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".header__content h3", {
  ...scrollRevealOption,
  delay: 1500,
});
ScrollReveal().reveal(".header__content p", {
  ...scrollRevealOption,
  delay: 2000,
});
ScrollReveal().reveal(".header__btns", {
  ...scrollRevealOption,
  delay: 2500,
});

// ScrollReveal().reveal(".intro__image", {
//   ...scrollRevealOption,
//   origin: "left",
// });
// ScrollReveal().reveal(".intro__content .section__subheader", {
//   ...scrollRevealOption,
//   delay: 500,
// });
// ScrollReveal().reveal(".intro__content .section__header", {
//   ...scrollRevealOption,
//   delay: 1000,
// });
// ScrollReveal().reveal(".intro__description", {
//   ...scrollRevealOption,
//   delay: 1500,
// });
// ScrollReveal().reveal(".intro__grid", {
//   ...scrollRevealOption,
//   delay: 2000,
// });
// ScrollReveal().reveal(".intro__content h4", {
//   ...scrollRevealOption,
//   delay: 2500,
// });
// ScrollReveal().reveal(".intro__flex div", {
//   ...scrollRevealOption,
//   delay: 3000,
//   interval: 500,
// });

const aboutSection = document.getElementById("about");
const typingElement = document.getElementById("typing-text");

const originalHTML = typingElement ? typingElement.innerHTML : "";
let isTyping = false;

function typeWriter(element, html, index = 0) {
  if (index <= html.length) {
    element.innerHTML =
      html.substring(0, index) + '<span class="typing-cursor">|</span>';

    // Random delay between 20ms to 50ms for natural feel
    const delay = 10 + Math.random() * 20;

    setTimeout(() => typeWriter(element, html, index + 1), delay);
  } else {
    element.innerHTML = html; // Show full content without cursor
    isTyping = false;
  }
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !isTyping) {
        isTyping = true;
        typingElement.innerHTML = ""; // Clear before typing
        typeWriter(typingElement, originalHTML);
      }
    });
  },
  { threshold: 0.5 }
);

if (aboutSection && typingElement) {
  observer.observe(aboutSection);
}

ScrollReveal().reveal(".journey__grid > div > div", {
  ...scrollRevealOption,
  interval: 500,
});

const mixer = mixitup(".portfolio__grid");

ScrollReveal().reveal(".banner__content .section__header", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".banner__content p", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".banner__btn", {
  ...scrollRevealOption,
  delay: 1000,
});

const swiper = new Swiper(".swiper", {
  slidesPerView: 2,
  spaceBetween: 50,
  loop: true,

  pagination: {
    el: ".swiper-pagination",
  },
});

ScrollReveal().reveal(".blog__card", {
  ...scrollRevealOption,
  interval: 500,
});
