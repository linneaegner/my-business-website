const themeToggle = document.getElementById("theme-toggle");
const infoToggle = document.getElementById("info-toggle");
const extraInfo = document.getElementById("extra-info");
const contactForm = document.getElementById("contact-form");
const formError = document.getElementById("form-error");
const formSuccess = document.getElementById("form-success");

function setTheme(isDark) {
    document.body.classList.toggle("theme-dark", isDark);
    themeToggle.setAttribute("aria-pressed", String(isDark));
    themeToggle.textContent = isDark ? "light mode" : "dark mode";
}

themeToggle.addEventListener("click", () => {
    const isDark = !document.body.classList.contains("theme-dark");
    setTheme(isDark);
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

    showMessage(formSuccess, "thanks! your message has been received.");
    contactForm.reset();
});
