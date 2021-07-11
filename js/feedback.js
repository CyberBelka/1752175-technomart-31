const feedbackLink = document.querySelector(".feedback-link");
const feedbackPopup = document.querySelector(".modal-feedback");
const feedbackClose = feedbackPopup.querySelector(".modal-close");
const feedbackForm = feedbackPopup.querySelector(".feedback-form");
const feedbackUser = feedbackPopup.querySelector(".feedback-user");
const feedbackEmail = feedbackPopup.querySelector(".feedback-email");

let isStorageSupport = true;
let storage = "";

try {
    storage = localStorage.getItem("name");
} catch (err) {
    isStorageSupport = false;
}

feedbackLink.addEventListener("click", function(evt) {
    evt.preventDefault();
    feedbackPopup.classList.add("modal-show");

    if (storage) {
        feedbackUser.value = storage;
        feedbackEmail.focus();
    } else {
        feedbackUser.focus();
    }
});

feedbackClose.addEventListener("click", function(evt) {
    evt.preventDefault();
    feedbackPopup.classList.remove("modal-show");
    feedbackPopup.classList.remove("modal-error");
});

feedbackForm.addEventListener("submit", function(evt) {
    if (!feedbackUser.value || !feedbackEmail.value) {
        evt.preventDefault();
        feedbackPopup.classList.add("modal-error");
        feedbackPopup.offsetWidth = feedbackPopup.offsetWidth;
        feedbackPopup.classList.remove("modal-error");
    } else {
        if (isStorageSupport) {
            localStorage.setItem("name", feedbackUser.value);
        }
    }
});

window.addEventListener("keydown", function(evt) {
    if (evt.key === "Esc" || evt.key === "Escape") {
        if (feedbackPopup.classList.contains("modal-show")) {
            evt.preventDefault();
            feedbackPopup.classList.remove("modal-show");
        }
    }
});