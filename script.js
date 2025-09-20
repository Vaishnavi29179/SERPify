// Typing effect for tagline
const text = "Empowering Brands Through Digital Excellence ✨";
let index = 0;
const tagline = document.getElementById("tagline");
tagline.innerHTML = "";

function typeEffect() {
  if (index < text.length) {
    tagline.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeEffect, 80);
  }
}
typeEffect();

// Handle contact form submission
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thanks for contacting us! We'll reply soon 💌");
  this.classList.add("success");
});

// Scroll-active nav link
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 100) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });
});

// Modal functionality
function openModal(service) {
  const modal = document.getElementById("serviceModal");
  const title = document.getElementById("modalTitle");
  const text = document.getElementById("modalText");

  const content = {
    seo: {
      title: "SEO Optimization",
      text: "Improve your site’s ranking on Google using keyword targeting, backlinks, and optimized page speed."
    },
    smm: {
      title: "Social Media Marketing",
      text: "Engage your audience on Instagram, Facebook, and LinkedIn with tailored content and ad campaigns."
    },
    email: {
      title: "Email Campaigns",
      text: "Reach your customers directly through branded email newsletters, offers, and automated campaigns."
    },
    ads: {
      title: "Google Ads Management",
      text: "Get more traffic with well-optimized pay-per-click ads managed by our certified experts."
    }
  };

  title.innerText = content[service].title;
  text.innerText = content[service].text;
  modal.style.display = "block";
}

function closeModal() {
  document.getElementById("serviceModal").style.display = "none";
}

window.onclick = function(e) {
  const modal = document.getElementById("serviceModal");
  if (e.target == modal) {
    modal.style.display = "none";
  }
};