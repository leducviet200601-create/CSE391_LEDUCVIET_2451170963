// Random số từ 1 - 100
const secretNumber = Math.floor(Math.random() * 100) + 1;

let attempts = 0;
const maxAttempts = 7;
let guessedNumbers = [];

alert("Chào mừng đến game đoán số! (1 - 100)");

while (attempts < maxAttempts) {

    let input = prompt(`Lần ${attempts + 1}/${maxAttempts} - Nhập số bạn đoán:`);

    // Nếu bấm Cancel
    if (input === null) {
        alert("Bạn đã thoát game!");
        break;
    }

    let guess = Number(input);

    // Validate không phải số
    if (Number.isNaN(guess)) {
        alert("Lỗi: Vui lòng nhập một số!");
        continue;
    }

    // Validate range
    if (guess < 1 || guess > 100) {
        alert("Chỉ được nhập số từ 1 đến 100!");
        continue;
    }

    // Check đoán trùng
    if (guessedNumbers.includes(guess)) {
        alert("Bạn đã đoán số này rồi!");
        continue;
    }

    guessedNumbers.push(guess);
    attempts++;

    // So sánh
    if (guess === secretNumber) {
        alert(`Đúng rồi! Bạn đoán đúng sau ${attempts} lần 🎉`);
        break;
    } else if (guess < secretNumber) {
        alert("Cao hơn ⬆️");
    } else {
        alert("Thấp hơn ⬇️");
    }

    // Hết lượt
    if (attempts === maxAttempts) {
        alert(`Bạn đã thua! Đáp án là ${secretNumber}`);
    }
}