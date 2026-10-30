const themeToggle = document.getElementById("theme-toggle");
const infoToggle = document.getElementById("info-toggle");
const extraInfo = document.getElementById("extra-info");
const contactForm = document.getElementById("contact-form");
const formError = document.getElementById("form-error");
const formSuccess = document.getElementById("form-success");
const menuToggle = document.getElementById("menu-toggle");
const siteMenu = document.getElementById("site-menu");
const THEME_KEY = "linneas-runclub-theme";

function setTheme(isDark) {
    document.body.classList.toggle("theme-dark", isDark);
    themeToggle.setAttribute("aria-pressed", String(isDark));
    themeToggle.textContent = isDark ? "light mode" : "dark mode";
    localStorage.setItem(THEME_KEY, isDark ? "dark" : "light");
}

function getPreferredTheme() {
    const saved = localStorage.getItem(THEME_KEY);
    if (saved === "dark" || saved === "light") {
        return saved === "dark";
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

setTheme(getPreferredTheme());

themeToggle.addEventListener("click", () => {
    const isDark = !document.body.classList.contains("theme-dark");
    setTheme(isDark);
});

function setMenuOpen(isOpen) {
    document.body.classList.toggle("nav-open", isOpen);
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.querySelector(".menu-toggle__label").textContent = isOpen ? "close" : "menu";
}

menuToggle.addEventListener("click", () => {
    const isOpen = !document.body.classList.contains("nav-open");
    setMenuOpen(isOpen);
});

siteMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
        setMenuOpen(false);
    });
});

window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        setMenuOpen(false);
    }
});

infoToggle.addEventListener("click", () => {
    const isHidden = extraInfo.hasAttribute("hidden");

    if (isHidden) {
        extraInfo.removeAttribute("hidden");
        infoToggle.setAttribute("aria-expanded", "true");
        infoToggle.textContent = "hide info";
    } else {
        extraInfo.setAttribute("hidden", "");
        infoToggle.setAttribute("aria-expanded", "false");
        infoToggle.textContent = "show more info";
    }
});

function showMessage(element, text) {
    element.textContent = text;
    element.hidden = false;
}

function clearMessages() {
    formError.hidden = true;
    formError.textContent = "";
    formSuccess.hidden = true;
    formSuccess.textContent = "";
}

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    clearMessages();

    const name = contactForm.name.value.trim();
    const email = contactForm.email.value.trim();
    const message = contactForm.message.value.trim();

    if (!name || !email || !message) {
        showMessage(formError, "please fill in name, e-mail and message.");
        return;
    }

    if (!isValidEmail(email)) {
        showMessage(formError, "please enter a valid e-mail address.");
        contactForm.email.focus();
        return;
    }

    showMessage(formSuccess, "thanks! your message has been received.");
    contactForm.reset();
});
