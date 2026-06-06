const form = document.querySelector("#todoForm");
const input = document.querySelector("#todoInput");
const list = document.querySelector("#todoList");
const count = document.querySelector("#count");

let todos = JSON.parse(localStorage.getItem("todos")) || [];
let currentFilter = "all";

function save() {
    localStorage.setItem("todos", JSON.stringify(todos));
}

function render() {
    list.innerHTML = "";

    let filtered = todos.filter(t => {
        if (currentFilter === "active") return !t.completed;
        if (currentFilter === "completed") return t.completed;
        return true;
    });

    filtered.forEach(todo => {
        const li = document.createElement("li");
        li.dataset.id = todo.id;

        li.innerHTML = `
            <span class="${todo.completed ? "completed" : ""}">${todo.text}</span>
            <button class="delete">❌</button>
        `;

        list.appendChild(li);
    });

    updateCount();
    save();
}

function updateCount() {
    const left = todos.filter(t => !t.completed).length;
    count.textContent = `${left} items left`;
}

// ADD TODO
form.addEventListener("submit", e => {
    e.preventDefault();
    if (!input.value.trim()) return;

    todos.push({
        id: Date.now(),
        text: input.value,
        completed: false
    });

    input.value = "";
    render();
});

// EVENT DELEGATION
list.addEventListener("click", e => {
    const id = Number(e.target.closest("li").dataset.id);

    // delete
    if (e.target.classList.contains("delete")) {
        todos = todos.filter(t => t.id !== id);
        render();
    }

    // toggle
    if (e.target.tagName === "SPAN") {
        todos = todos.map(t =>
            t.id === id ? { ...t, completed: !t.completed } : t
        );
        render();
    }
});

// FILTER
document.querySelectorAll("[data-filter]").forEach(btn => {
    btn.addEventListener("click", () => {
        currentFilter = btn.dataset.filter;
        render();
    });
});

// CLEAR COMPLETED
document.querySelector("#clearCompleted").addEventListener("click", () => {
    todos = todos.filter(t => !t.completed);
    render();
});

render();