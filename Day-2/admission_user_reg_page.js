const form = document.querySelector("form");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    document.querySelectorAll("small").forEach(el => el.remove());

    let isValid = true;

    const name = document.getElementById("fullname");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");

    if (!/^[A-Za-z ]+$/.test(name.value)) {
        showError(name, "Name must contain only letters");
        isValid = false;
    }

    if (!email.value.includes("@")) {
        showError(email, "Enter a valid email");
        isValid = false;
    }

    if (!/^[0-9]{10}$/.test(phone.value)) {
        showError(phone, "Phone must be 10 digits");
        isValid = false;
    }

    if (isValid) {
        alert("Form submitted successfully!");
        form.reset();
    }
});

function showError(input, message) {
    const error = document.createElement("small");
    error.style.color = "red";
    error.innerText = message;
    input.after(error);
}
