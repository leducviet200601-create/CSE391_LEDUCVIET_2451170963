Câu A1 — var / let / const

Đoạn 1
console.log(x);
var x = 5;
// → undefined

Đoạn 2
console.log(y);
let y = 10;
// → ReferenceError: Cannot access 'y' before initialization

Đoạn 3
const z = 15;
z = 20;
console.log(z);
// → TypeError: Assignment to constant variable

Đoạn 4
const arr = [1, 2, 3];
arr.push(4);
console.log(arr);
// → [1,2,3,4]

Đoạn 5
let a = 1;
{
let a = 2;
console.log("Trong block:", a);
}
console.log("Ngoài block:", a);
// → Trong block: 2
// → Ngoài block: 1

Câu A2 — Data Types & Coercion

typeof null // object
typeof undefined // undefined
typeof NaN // number

"5" + 3 // "53"
"5" - 3 // 2
"5" * "3" // 15
true + true // 2
[] + [] // ""
[] + {} // "[object Object]"
{} + [] // 0 (hoặc "[object Object]" tùy môi trường)

Giải thích ngắn:

ưu tiên nối chuỗi nếu có string
-, *, / luôn ép về number

Câu A3 — == vs ===

5 == "5" // true
5 === "5" // false
null == undefined // true
null === undefined // false
NaN == NaN // false
0 == false // true
0 === false // false
"" == false // true

Kết luận:
Nên dùng === vì không ép kiểu, tránh lỗi logic ngầm.

Câu A4 — Truthy & Falsy

Falsy values:
false, 0, -0, 0n, "", null, undefined, NaN

Kết quả:

"0" → in A
"" → không in
[] → in C
{} → in D
null → không in
0 → không in
-1 → in G
" " → in H

Câu A5 — Template Literals

Cách 1:
var greeting = Xin chào ${name}! Bạn ${age} tuổi.;

Cách 2:
var url = https://api.example.com/users/${userId}/orders?page=${page};

Cách 3:
var html = `<div class="card">

<h2>${title}</h2> <p>${description}</p> <span>Giá: ${price}đ</span> </div>`;

PHẦN C — SUY LUẬN

Câu C1 — Debug JavaScript

Lỗi 1: gán nhầm thay vì so sánh
if (giaSauGiam = 0)
// Sửa:
if (giaSauGiam === 0)

Lỗi 2: input là string gây sai phép tính
const gia = tinhGiaGiamGia("100000", 20)
// Sửa: ép kiểu Number(giaBan)

Lỗi 3: thiếu kiểm tra NaN
// Sửa thêm:
if (isNaN(giaBan) || isNaN(phanTramGiam)) return "Input không hợp lệ"

Lỗi 4: var trong vòng lặp với setTimeout
for (var i = 0; i < 5; i++)
// Sửa:
for (let i = 0; i < 5; i++)

Lỗi 5: thiếu kiểm soát kiểu dữ liệu phanTramGiam
// Sửa:
phanTramGiam = Number(phanTramGiam)

Lỗi 6: logic return không thống nhất (vừa console.log vừa return)
// Nên chuẩn hóa: chỉ return hoặc chỉ log

Kết luận lỗi “ẩn”:
var tạo scope function → setTimeout in ra cùng một giá trị i cuối cùng nếu không dùng let.

Sửa bằng:
for (let i = 0; i < 5; i++) {
setTimeout(() => {
console.log("Item " + i)
}, 1000)
}