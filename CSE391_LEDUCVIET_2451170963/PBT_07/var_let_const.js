// ĐOẠN 1
console.log("Đoạn 1:");
console.log(x);
var x = 5;
// expected: undefined


console.log("\nĐoạn 2:");
try {
    console.log(y);
    let y = 10;
} catch (e) {
    console.log(e.message);
}
// expected: ReferenceError (TDZ)


console.log("\nĐoạn 3:");
try {
    const z = 15;
    z = 20;
    console.log(z);
} catch (e) {
    console.log(e.message);
}
// expected: TypeError


console.log("\nĐoạn 4:");
const arr = [1, 2, 3];
arr.push(4);
console.log(arr);
// expected: [1,2,3,4]


console.log("\nĐoạn 5:");
let a = 1;
{
    let a = 2;
    console.log("Trong block:", a);
}
console.log("Ngoài block:", a);
