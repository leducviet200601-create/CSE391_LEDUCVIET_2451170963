Câu A1 (5đ) — Function Declaration vs Function Expression vs Arrow Function

Function Declaration
function tinhThueBaoHiem(luong) {
    let thue = luong > 11000000 ? luong * 0.1 : 0;
    return {
        thuong: luong,
        thuc_nhan: luong - thue
    };
}
Function Expression
const tinhThueBaoHiem = function(luong) {
    let thue = luong > 11000000 ? luong * 0.1 : 0;
    return {
        thuong: luong,
        thuc_nhan: luong - thue
    };
};
Arrow Function
const tinhThueBaoHiem = (luong) => {
    let thue = luong > 11000000 ? luong * 0.1 : 0;
    return {
        thuong: luong,
        thuc_nhan: luong - thue
    };
};

Hoisting:

Function Declaration: có hoisting đầy đủ → gọi trước khi khai báo vẫn chạy
Function Expression: không hoisting function (chỉ hoisting biến var/let) → gọi trước sẽ lỗi
Arrow Function: giống function expression → không hoisting

Ví dụ:

console.log(a(10)); // OK
function a(x){ return x; }

console.log(b(10)); // lỗi
const b = (x) => x;

Câu A2 (5đ) — Scope & Closure

Đoạn 1:

1
2
3
2
2

Giải thích:

count nằm trong closure
increment/decrement thay đổi cùng một biến count

Đoạn 2:
Output:

var: 3
var: 3
var: 3
let: 0
let: 1
let: 2

Giải thích:

var: dùng chung 1 biến i → sau loop = 3
let: mỗi vòng lặp tạo scope riêng → giữ giá trị đúng

Câu A3 (5đ) — Array Methods

nums.filter(n => n % 2 === 0);

nums.map(n => n * 3);

nums.reduce((a, b) => a + b, 0);

nums.find(n => n > 7);

nums.some(n => n > 10);

nums.every(n => n > 0);

nums.map(n => `Số ${n} là ${n % 2 === 0 ? "chẵn" : "lẻ"}`);

[...nums].reverse();

Câu A4 (5đ) — Object Destructuring & Spread

console.log(name, price, ram, color);
// iPhone 16 25990000 8 Titan

console.log(specs);
// ReferenceError (specs không tồn tại)

console.log(updated.price);
// 23990000

console.log(updated.sale);
// true

console.log(product.price);
// 25990000

console.log(product.specs.ram);
// 16

Giải thích:

Spread copy "nông" (shallow copy)
specs là object reference → copy và gốc cùng trỏ 1 vùng nhớ

PHẦN C — SUY LUẬN (20 điểm)

Câu C1 (10đ) — Refactor Code

const processOrders = (orders) =>
    orders
        .filter(o => o.status === "completed" && o.total > 100000)
        .map(({ id, customer, total }) => ({
            id,
            customer,
            total,
            discount: total * 0.1,
            finalTotal: total * 0.9
        }))
        .sort((a, b) => b.finalTotal - a.finalTotal);

Câu C2 (10đ) — Thiết kế API miniArray

const miniArray = {
    map(arr, fn) {
        const result = [];
        for (let i = 0; i < arr.length; i++) {
            result.push(fn(arr[i], i, arr));
        }
        return result;
    },

    filter(arr, fn) {
        const result = [];
        for (let i = 0; i < arr.length; i++) {
            if (fn(arr[i], i, arr)) {
                result.push(arr[i]);
            }
        }
        return result;
    },

    reduce(arr, fn, initialValue) {
        let acc = initialValue;
        for (let i = 0; i < arr.length; i++) {
            acc = fn(acc, arr[i], i, arr);
        }
        return acc;
    }
};