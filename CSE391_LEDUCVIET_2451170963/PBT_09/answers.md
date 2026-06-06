Câu A1 (5đ) — DOM Tree + querySelector

DOM Tree

app
├── header
│ ├── h1 (Todo App)
│ └── nav
│ ├── a.active (All)
│ ├── a (Active)
│ └── a (Completed)
└── main
├── form#todoForm
│ ├── input#todoInput
│ └── button (Add)
└── ul#todoList
├── li.todo-item (Learn HTML)
└── li.todo-item.completed (Learn CSS)

querySelector

document.querySelector("h1");

document.querySelector("#todoInput");

document.querySelectorAll(".todo-item");

document.querySelector("nav a.active");

document.querySelector("#todoList li:first-child");

document.querySelectorAll("nav a");

Câu A2 (5đ) — innerHTML vs textContent

innerHTML: dùng để đọc/ghi nội dung HTML bên trong element, có thể render thẻ HTML.

textContent: chỉ đọc/ghi nội dung text thuần, không hiểu HTML, an toàn hơn.

Ví dụ:

element.innerHTML = "<b>Hello</b>"; → Hello in đậm
element.textContent = "<b>Hello</b>"; → hiển thị nguyên chuỗi <b>Hello</b>

XSS:

Nếu user nhập:
<img src=x onerror="alert('Hacked!')">

và dùng:

document.querySelector("#result").innerHTML = userInput;

→ trình duyệt sẽ thực thi script độc hại.

Cách sửa:

document.querySelector("#result").textContent = userInput;

Câu A3 (5đ) — Event Bubbling

Output khi click button:

BUTTON
INNER
OUTER

Nếu dùng stopPropagation():

BUTTON

Giải thích:
Event bubbling đi từ element con lên cha. stopPropagation() chặn việc lan sự kiện lên các phần tử cha.

PHẦN C — DEBUG & PHÂN TÍCH (15 điểm)

Câu C1 (8đ) — Debug DOM Code

Sai innerHTML không cần thiết

countDisplay.innerHTML = count;

Sửa:
countDisplay.textContent = count;

Sai event type onclick

addEventListener("onclick", ...)

Sửa:
addEventListener("click", ...)

Sai cập nhật DOM trong reset

countDisplay = count;

Sửa:
countDisplay.textContent = count;

Sai remove function

item.remove;

Sửa:
item.remove();

innerHTML = null sai

historyList.innerHTML = null;

Sửa:
historyList.innerHTML = "";

localStorage trả về string

count = localStorage.getItem("count");

Sửa:
count = Number(localStorage.getItem("count")) || 0;

DOM chưa chắc đã load khi querySelector

Cần bọc:

window.addEventListener("DOMContentLoaded", () => {
// code
});

Câu C2 (7đ) — Performance

Bind event 1000 elements là bad practice vì:
tốn bộ nhớ (mỗi element 1 listener)
khó quản lý
hiệu năng giảm khi DOM lớn

Event delegation:

chỉ cần 1 listener ở parent
dùng event.target để xác định element được click
giảm memory và tăng performance
DocumentFragment giúp tránh reflow nhiều lần

Code tối ưu:

const fragment = document.createDocumentFragment();

for (let i = 0; i < 1000; i++) {
const div = document.createElement("div");
div.textContent = Item ${i};
fragment.appendChild(div);
}

document.body.appendChild(fragment);