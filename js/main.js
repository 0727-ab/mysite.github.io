const bookingPopup = document.getElementById("booking-popup");
const bookingOpenButtons = document.querySelectorAll(".js-booking-open");
const bookingCloseButtons = document.querySelectorAll(".js-booking-close");
const bookingForm = document.getElementById("booking-form");
const bookingMessage = document.getElementById("booking-message");

function openBookingPopup(event) {
    event.preventDefault();

    bookingPopup.classList.add("is-open");
    bookingPopup.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
}

function closeBookingPopup() {
    bookingPopup.classList.remove("is-open");
    bookingPopup.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";

    bookingMessage.textContent = "";
    bookingForm.reset();
}

bookingOpenButtons.forEach(function(button) {
    button.addEventListener("click", openBookingPopup);
});

bookingCloseButtons.forEach(function(button) {
    button.addEventListener("click", closeBookingPopup);
});

bookingForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("booking-name").value;
    const date = document.getElementById("booking-date").value;
    const time = document.getElementById("booking-time").value;
    const guests = document.getElementById("booking-guests").value;

    bookingMessage.textContent = `Thanks, ${name}. Your table request for ${guests} guest(s) on ${date} at ${time} has been received.`;
});