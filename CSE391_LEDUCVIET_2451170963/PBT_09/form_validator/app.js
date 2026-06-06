const form = document.querySelector("#form");

const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const passInput = document.querySelector("#password");
const confirmInput = document.querySelector("#confirm");
const phoneInput = document.querySelector("#phone");

const submitBtn = document.querySelector("#submitBtn");

const strengthBar = document.querySelector("#strengthBar");

let valid = {
    name: false,
    email: false,
    password: false,
    confirm: false,
    phone: false
};


function validateName() {
    const v = nameInput.value.trim();
    valid.name = v.length >= 2 && v.length <= 50;

    document.querySelector("#nameError").textContent =
        valid.name ? "" : "Tên 2-50 ký tự";
}

function validateEmail() {
    const v = emailInput.value.trim();
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    valid.email = regex.test(v);

    document.querySelector("#emailError").textContent =
        valid.email ? "" : "Email không hợp lệ";
}

function checkStrength(v) {
    let score = 0;

    if (v.length >= 8) score++;
    if (/[a-z]/.test(v) && /[A-Z]/.test(v)) score++;
    if (/\d/.test(v)) score++;
    if (/[^A-Za-z0-9]/.test(v)) score++;

    return score;
}

function validatePassword() {
    const v = passInput.value;

    const score = checkStrength(v);

    let width = 0;
    let color = "red";

    if (score <= 1) {
        width = 30;
        color = "red";
    } else if (score === 2 || score === 3) {
        width = 60;
        color = "orange";
    } else {
        width = 100;
        color = "green";
    }

    strengthBar.style.width = width + "%";
    strengthBar.style.background = color;

    valid.password = score >= 3;

    document.querySelector("#passwordError").textContent =
        valid.password ? "" : "Password yếu";
}

function validateConfirm() {
    valid.confirm = confirmInput.value === passInput.value;

    document.querySelector("#confirmError").textContent =
        valid.confirm ? "" : "Không khớp password";
}

function validatePhone() {
    let v = phoneInput.value.replace(/\D/g, "");

    if (v.length > 10) v = v.slice(0, 10);

    if (v.length >= 4 && v.length <= 7) {
        phoneInput.value = v.slice(0,4) + "-" + v.slice(4);
    } else if (v.length > 7) {
        phoneInput.value =
            v.slice(0,4) + "-" + v.slice(4,7) + "-" + v.slice(7);
    } else {
        phoneInput.value = v;
    }

    valid.phone = v.length === 10;

    document.querySelector("#phoneError").textContent =
        valid.phone ? "" : "SĐT 10 số";
}


nameInput.addEventListener("input", validateName);
emailInput.addEventListener("input", validateEmail);
passInput.addEventListener("input", () => {
    validatePassword();
    validateConfirm();
});
confirmInput.addEventListener("input", validateConfirm);
phoneInput.addEventListener("input", validatePhone);



setInterval(() => {
    const allValid = Object.values(valid).every(v => v);
    submitBtn.disabled = !allValid;
}, 200);


form.addEventListener("submit", e => {
    e.preventDefault();

    const data = {
        name: nameInput.value,
        email: emailInput.value,
        phone: phoneInput.value
    };

    document.querySelector("#result").textContent =
        JSON.stringify(data, null, 2);

    document.querySelector("#modal").classList.remove("hidden");
});



function closeModal() {
    document.querySelector("#modal").classList.add("hidden");
}