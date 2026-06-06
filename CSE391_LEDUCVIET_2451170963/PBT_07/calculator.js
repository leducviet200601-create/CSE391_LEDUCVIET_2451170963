function calculate(num1, operator, num2) {

    // Kiểm tra input có phải số không
    if (typeof num1 !== "number" || typeof num2 !== "number" || isNaN(num1) || isNaN(num2)) {
        return "Lỗi: Input không phải số"
    }

    // Xử lý chia cho 0
    if (operator === "/" && num2 === 0) {
        return "Lỗi: Không thể chia cho 0"
    }

    let result

    switch (operator) {
        case "+":
            result = num1 + num2
            break

        case "-":
            result = num1 - num2
            break

        case "*":
            result = num1 * num2
            break

        case "/":
            result = num1 / num2
            break

        case "%":
            result = num1 % num2
            break

        case "**":
            result = num1 ** num2
            break

        default:
            return `Lỗi: Operator '${operator}' không hợp lệ`
    }

    return result
}