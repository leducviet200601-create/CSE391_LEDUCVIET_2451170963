function createCart() {
    let items = [];
    let discountRate = 0;

    function findItemIndex(productId) {
        return items.findIndex(i => i.product.id === productId);
    }

    return {
        // Thêm sản phẩm (nếu có → tăng quantity)
        addItem(product, quantity = 1) {
            const index = findItemIndex(product.id);

            if (index !== -1) {
                items[index].quantity += quantity;
            } else {
                items.push({ product, quantity });
            }
        },

        // Xóa sản phẩm
        removeItem(productId) {
            items = items.filter(i => i.product.id !== productId);
        },

        // Cập nhật số lượng
        updateQuantity(productId, newQuantity) {
            const index = findItemIndex(productId);

            if (index !== -1) {
                if (newQuantity <= 0) {
                    items.splice(index, 1);
                } else {
                    items[index].quantity = newQuantity;
                }
            }
        },

        // Tổng tiền (chưa giảm)
        getTotal() {
            return items.reduce(
                (sum, i) => sum + i.product.price * i.quantity,
                0
            );
        },

        // Áp dụng mã giảm giá
        applyDiscount(code) {
            const codes = {
                "SALE10": 0.10,
                "SALE20": 0.20,
                "FREESHIP": 30000
            };

            if (!codes[code]) {
                console.log("Mã giảm giá không hợp lệ");
                return;
            }

            discountRate = codes[code];
        },

        // In giỏ hàng
        printCart() {
            const total = this.getTotal();

            console.log("┌──────────────────────────────────────────────┐");
            console.log("│ # │ Sản phẩm        │ SL │ Đơn giá   │ Tổng │");
            console.log("├──────────────────────────────────────────────┤");

            items.forEach((item, index) => {
                const lineTotal = item.product.price * item.quantity;

                console.log(
                    `│ ${index + 1} │ ${item.product.name.padEnd(14)} │ ${item.quantity
                    } │ ${item.product.price.toLocaleString("vi-VN")} │ ${lineTotal.toLocaleString("vi-VN")} │`
                );
            });

            console.log("├──────────────────────────────────────────────┤");

            let finalTotal = total;

            if (typeof discountRate === "number" && discountRate < 1) {
                finalTotal = total * (1 - discountRate);
                console.log(
                    `│ Tổng: ${finalTotal.toLocaleString("vi-VN")}đ (giảm ${discountRate * 100}%) │`
                );
            } else if (discountRate === 30000) {
                finalTotal = total - 30000;
                console.log(
                    `│ Tổng: ${finalTotal.toLocaleString("vi-VN")}đ (giảm 30.000đ) │`
                );
            } else {
                console.log(`│ Tổng: ${total.toLocaleString("vi-VN")}đ │`);
            }

            console.log("└──────────────────────────────────────────────┘");
        },

        // Đếm số lượng sản phẩm
        getItemCount() {
            return items.reduce((sum, i) => sum + i.quantity, 0);
        },

        // Xóa giỏ
        clearCart() {
            items = [];
            discountRate = 0;
        }
    };
}

// ================= TEST =================
const cart = createCart();

cart.addItem({ id: 1, name: "iPhone 16", price: 25990000 }, 1);
cart.addItem({ id: 3, name: "AirPods Pro", price: 6990000 }, 2);
cart.addItem({ id: 1, name: "iPhone 16", price: 25990000 }, 1);

cart.printCart();

cart.applyDiscount("SALE10");
cart.printCart();

console.log("Số SP:", cart.getItemCount());

cart.removeItem(3);
console.log("Sau xóa:", cart.getItemCount());