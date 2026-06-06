const images = [
    "https://placehold.co/600x300/ff0000",
    "https://placehold.co/600x300/00ff00",
    "https://placehold.co/600x300/0000ff",
    "https://placehold.co/600x300/ffff00",
    "https://placehold.co/600x300/ff00ff",
    "https://placehold.co/600x300/00ffff"
];

let index = 0;
let playing = false;
let interval = null;

const img = document.querySelector("#mainImg");
const modal = document.querySelector("#modal");
const modalImg = document.querySelector("#modalImg");


function showImage(i) {
    index = (i + images.length) % images.length;
    img.src = images[index];
}



document.addEventListener("keydown", (e) => {

    // LEFT / RIGHT
    if (e.key === "ArrowRight") {
        showImage(index + 1);
    }

    if (e.key === "ArrowLeft") {
        showImage(index - 1);
    }

    // NUMBER KEYS 1-9
    if (e.key >= "1" && e.key <= "9") {
        const i = parseInt(e.key) - 1;
        if (i < images.length) showImage(i);
    }

    // SPACE PLAY / PAUSE
    if (e.code === "Space") {
        e.preventDefault();
        toggleSlideshow();
    }

    // ESC CLOSE MODAL / PALETTE
    if (e.key === "Escape") {
        modal.classList.add("hidden");
        document.querySelector("#palette").classList.add("hidden");
    }

    // CTRL + K
    if (e.ctrlKey && e.key.toLowerCase() === "k") {
        e.preventDefault();
        openPalette();
    }
});



function toggleSlideshow() {
    if (playing) {
        clearInterval(interval);
        playing = false;
    } else {
        interval = setInterval(() => {
            showImage(index + 1);
        }, 1000);
        playing = true;
    }
}



img.addEventListener("click", () => {
    modal.classList.remove("hidden");
    modalImg.src = images[index];
});



const palette = document.querySelector("#palette");
const cmdInput = document.querySelector("#cmdInput");
const cmdList = document.querySelector("#cmdList");

const commands = [
    "next image",
    "prev image",
    "start slideshow",
    "stop slideshow",
    "open modal"
];

function openPalette() {
    palette.classList.remove("hidden");
    cmdInput.focus();
    renderCommands("");
}

function renderCommands(query) {
    cmdList.innerHTML = "";

    commands
        .filter(c => c.includes(query.toLowerCase()))
        .forEach(cmd => {
            const li = document.createElement("li");
            li.textContent = cmd;

            li.addEventListener("click", () => executeCommand(cmd));

            cmdList.appendChild(li);
        });
}

cmdInput.addEventListener("input", () => {
    renderCommands(cmdInput.value);
});

function executeCommand(cmd) {
    if (cmd === "next image") showImage(index + 1);
    if (cmd === "prev image") showImage(index - 1);
    if (cmd === "start slideshow") {
        if (!playing) toggleSlideshow();
    }
    if (cmd === "stop slideshow") {
        if (playing) toggleSlideshow();
    }
    if (cmd === "open modal") {
        modal.classList.remove("hidden");
        modalImg.src = images[index];
    }

    palette.classList.add("hidden");
}

// init
showImage(0);