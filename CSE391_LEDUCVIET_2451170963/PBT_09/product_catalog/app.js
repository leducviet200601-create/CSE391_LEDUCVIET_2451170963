const products = [
    { id: 1, name: "iPhone 16", price: 25990000, category: "phone", rating: 4.5 },
    { id: 2, name: "MacBook Pro", price: 45990000, category: "laptop", rating: 4.8 },
    { id: 3, name: "iPad Air", price: 16990000, category: "tablet", rating: 4.6 },
    { id: 4, name: "AirPods", price: 6990000, category: "accessory", rating: 4.3 },
    { id: 5, name: "Samsung S24", price: 22990000, category: "phone", rating: 4.4 },
    { id: 6, name: "Dell XPS", price: 35990000, category: "laptop", rating: 4.7 },
];

let filtered = [...products];
let currentCat = "all";

const container = document.querySelector("#products");
const search = document.querySelector("#search");
const sort = document.querySelector("#sort");
const modal = document.querySelector("#modal");
const modalBody = document.querySelector("#modalBody");

function render(list) {
    container.innerHTML = "";

    list.forEach(p => {
        const div = document.createElement("div");
        div.className = "card";
        div.dataset.id = p.id;

        div.innerHTML = `
            <h3>${p.name}</h3>
            <p>${p.price.toLocaleString()}đ</p>
            <p>⭐ ${p.rating}</p>
            <button class="view">View</button>
        `;

        container.appendChild(div);
    });
}

// SEARCH
search.addEventListener("input", e => {
    applyFilters();
});

// CATEGORY
document.querySelectorAll("[data-cat]").forEach(btn => {
    btn.addEventListener("click", () => {
        currentCat = btn.dataset.cat;
        applyFilters();
    });
});

// SORT
sort.addEventListener("change", applyFilters);

function applyFilters() {
    let list = [...products];

    // category
    if (currentCat !== "all") {
        list = list.filter(p => p.category === currentCat);
    }

    // search
    const keyword = search.value.toLowerCase();
    if (keyword) {
        list = list.filter(p => p.name.toLowerCase().includes(keyword));
    }

    // sort
    if (sort.value === "asc") list.sort((a,b) => a.price - b.price);
    if (sort.value === "desc") list.sort((a,b) => b.price - a.price);
    if (sort.value === "az") list.sort((a,b) => a.name.localeCompare(b.name));
    if (sort.value === "rating") list.sort((a,b) => b.rating - a.rating);

    filtered = list;
    render(filtered);
}

// EVENT DELEGATION (modal)
container.addEventListener("click", e => {
    const card = e.target.closest(".card");
    if (!card) return;

    const product = products.find(p => p.id == card.dataset.id);

    modalBody.innerHTML = `
        <h2>${product.name}</h2>
        <p>Giá: ${product.price.toLocaleString()}đ</p>
        <p>Rating: ${product.rating}</p>
    `;

    modal.classList.remove("hidden");
});

// CLOSE MODAL
document.querySelector("#closeModal").addEventListener("click", () => {
    modal.classList.add("hidden");
});

// DARK MODE
document.querySelector("#toggleDark").addEventListener("click", () => {
    document.body.classList.toggle("dark");
});

render(products);