function formatMoney(num) {
    return num.toLocaleString("vi-VN") + "đ";
}


const items = [
    { name: "Phở bò", price: 65000, qty: 2 },
    { name: "Trà đá", price: 5000, qty: 3 },
    { name: "Bún chả", price: 55000, qty: 1 }
];

const tipPercent = 5; // có thể đổi 0 nếu không tip

let subtotal = 0;

console.log("╔════════════════════════════════════════╗");
console.log("║        HÓA ĐƠN NHÀ HÀNG               ║");
console.log("╠════════════════════════════════════════╣");

for (let i = 0; i < items.length; i++) {
    let item = items[i];
    let lineTotal = item.price * item.qty;
    subtotal += lineTotal;

    console.log(
        `║ ${i + 1}. ${item.name.padEnd(10)} x${item.qty}  @${item.price / 1000}k = ${formatMoney(lineTotal)} ║`
    );
}

console.log("╠════════════════════════════════════════╣");


let discountRate = 0;

// Rule giảm giá
if (subtotal > 1000000) {
    discountRate = 0.15;
} else if (subtotal > 500000) {
    discountRate = 0.10;
}

// Giả lập ngày trong tuần (0 = Sunday, 3 = Wednesday)
const today = new Date().getDay();

if (today === 3) {
    discountRate += 0.05;
}

let discountAmount = subtotal * discountRate;
let afterDiscount = subtotal - discountAmount;

let vat = afterDiscount * 0.08;
let tip = afterDiscount * (tipPercent / 100);

let total = afterDiscount + vat + tip;

console.log(`║ Tổng cộng:              ${formatMoney(subtotal)} ║`);
console.log(`║ Giảm giá (${discountRate * 100}%):       -${formatMoney(discountAmount)} ║`);
console.log(`║ VAT (8%):              ${formatMoney(vat)} ║`);
console.log(`║ Tip (${tipPercent}%):              ${formatMoney(tip)} ║`);

console.log("╠════════════════════════════════════════╣");

console.log(`║ THANH TOÁN:            ${formatMoney(total)} ║`);
console.log("╚════════════════════════════════════════╝");