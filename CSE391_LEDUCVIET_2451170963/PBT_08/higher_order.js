
function pipe(...fns) {
    return function (input) {
        return fns.reduce((acc, fn) => fn(acc), input);
    };
}

// Test
const process = pipe(
    x => x * 2,
    x => x + 10,
    x => x.toString(),
    x => "Kết quả: " + x
);

console.log(process(5));

function memoize(fn) {
    const cache = new Map();

    return function (...args) {
        const key = JSON.stringify(args);

        if (cache.has(key)) {
            return cache.get(key);
        }

        const result = fn(...args);
        cache.set(key, result);

        return result;
    };
}

// Test
const expensiveCalc = memoize((n) => {
    console.log("Đang tính...");
    let result = 0;
    for (let i = 0; i < n; i++) result += i;
    return result;
});

console.log(expensiveCalc(100000));
console.log(expensiveCalc(100000));

function debounce(fn, delay) {
    let timer;

    return function (...args) {
        clearTimeout(timer);

        timer = setTimeout(() => {
            fn.apply(this, args);
        }, delay);
    };
}

// Test
const search = debounce((query) => {
    console.log("Searching:", query);
}, 500);

search("a");
search("ab");
search("abc");

async function retry(fn, maxAttempts = 3) {
    let lastError;

    for (let attempt = 1; attempt <= maxAttempts; attempt++) {
        try {
            return await fn();
        } catch (err) {
            lastError = err;
            console.log(`Lần thử ${attempt} thất bại`);
        }
    }

    throw lastError;
}

// Test
async function fakeApi() {
    const ok = Math.random() > 0.7;

    if (!ok) throw new Error("API lỗi");
    return "Thành công!";
}

retry(fakeApi, 5)
    .then(res => console.log(res))
    .catch(err => console.log("Fail:", err.message));