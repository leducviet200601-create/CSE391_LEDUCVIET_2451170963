const students = [
    { name: "An", math: 8, physics: 7, cs: 9, gender: "M" },
    { name: "Bình", math: 6, physics: 9, cs: 7, gender: "F" },
    { name: "Chi", math: 9, physics: 6, cs: 8, gender: "F" },
    { name: "Dũng", math: 5, physics: 5, cs: 6, gender: "M" },
    { name: "Em", math: 10, physics: 8, cs: 9, gender: "F" },
    { name: "Phong", math: 3, physics: 4, cs: 5, gender: "M" },
    { name: "Giang", math: 7, physics: 7, cs: 7, gender: "F" },
    { name: "Huy", math: 4, physics: 6, cs: 3, gender: "M" },
];

// ====== 1. TÍNH ĐIỂM TB + XẾP LOẠI ======
let totalMath = 0;
let totalPhysics = 0;
let totalCs = 0;

let countGioi = 0;
let countKha = 0;
let countTB = 0;
let countYeu = 0;

let maxStudent = students[0];
let minStudent = students[0];

console.log("| STT | Tên   | TB   | Xếp loại |");
console.log("|-----|-------|------|----------|");

for (let i = 0; i < students.length; i++) {

    let s = students[i];

    let avg = (s.math * 0.4) + (s.physics * 0.3) + (s.cs * 0.3);
    avg = Number(avg.toFixed(2));

    let rank = "";

    if (avg >= 8) {
        rank = "Giỏi";
        countGioi++;
    } else if (avg >= 6.5) {
        rank = "Khá";
        countKha++;
    } else if (avg >= 5) {
        rank = "Trung bình";
        countTB++;
    } else {
        rank = "Yếu";
        countYeu++;
    }

    console.log(`| ${i + 1} | ${s.name} | ${avg} | ${rank} |`);

    totalMath += s.math;
    totalPhysics += s.physics;
    totalCs += s.cs;

    // max min
    if (avg > ((maxStudent.math * 0.4) + (maxStudent.physics * 0.3) + (maxStudent.cs * 0.3))) {
        maxStudent = s;
    }

    if (avg < ((minStudent.math * 0.4) + (minStudent.physics * 0.3) + (minStudent.cs * 0.3))) {
        minStudent = s;
    }
}

// ====== 2. THỐNG KÊ ======
console.log("\n===== THỐNG KÊ =====");
console.log("Giỏi:", countGioi);
console.log("Khá:", countKha);
console.log("Trung bình:", countTB);
console.log("Yếu:", countYeu);

// ====== 3. ĐIỂM TB TOÀN LỚP ======
console.log("\n===== ĐIỂM TB MÔN =====");

console.log("Math:", (totalMath / students.length).toFixed(2));
console.log("Physics:", (totalPhysics / students.length).toFixed(2));
console.log("CS:", (totalCs / students.length).toFixed(2));

// ====== 4. MAX - MIN ======
console.log("\n===== MAX - MIN =====");
console.log("Cao nhất:", maxStudent.name);
console.log("Thấp nhất:", minStudent.name);

// ====== 5. BONUS: THEO GIỚI TÍNH ======
let maleTotal = 0, maleCount = 0;
let femaleTotal = 0, femaleCount = 0;

for (let i = 0; i < students.length; i++) {
    let s = students[i];
    let avg = (s.math * 0.4) + (s.physics * 0.3) + (s.cs * 0.3);

    if (s.gender === "M") {
        maleTotal += avg;
        maleCount++;
    } else {
        femaleTotal += avg;
        femaleCount++;
    }
}

console.log("\n===== TB THEO GIỚI TÍNH =====");
console.log("Nam:", (maleTotal / maleCount).toFixed(2));
console.log("Nữ:", (femaleTotal / femaleCount).toFixed(2));