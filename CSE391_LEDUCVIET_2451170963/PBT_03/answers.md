Câu A1 
1. Inline CSS
<h1 style="color: red;">ShopTLU</h1>

Ưu điểm:

Ưu tiên cao nhất
Nhanh, dễ test

Nhược điểm:

Khó bảo trì
Không tái sử dụng
HTML bị rối

Khi dùng:

Test nhanh
Style đơn lẻ
2. Internal CSS
<style>
  h1 {
    color: blue;
  }
</style>

Ưu điểm:

Gom trong 1 file
Dễ quản lý hơn inline

Nhược điểm:

Không tái sử dụng nhiều trang
HTML phình to

Khi dùng:

Website nhỏ / 1 trang
3. External CSS
<link rel="stylesheet" href="style.css">
h1 {
  color: green;
}

Ưu điểm:

Tái sử dụng
Dễ bảo trì
Chuẩn dự án

Nhược điểm:

Tải thêm file CSS

Khi dùng:

Dự án thực tế, nhiều trang
⭐ Nếu cả 3 cùng áp dụng

➡ Inline thắng

Vì:

Inline nằm trực tiếp trong element
Độ ưu tiên (specificity + cascade) cao nhất
Câu A2 (8đ) — CSS Selectors
1. h1

→ ShopTLU

2. .price

→

25.990.000đ
45.990.000đ
3. #app header

→ <header class="top-bar dark">

4. nav a:first-child

→ Home

5. .product.featured h2

→ MacBook Pro

6. article > p

→

25.990.000đ
Mô tả sản phẩm... (iPhone 16)
45.990.000đ
Mô tả sản phẩm... (MacBook Pro)
7. a[href="/"]

→ Home

8. .top-bar.dark h1

→ ShopTLU

PHẦN C — DEBUG & SUY LUẬN (20đ)
Câu C1 (10đ) — Debug Layout
1. Tính chiều rộng thực tế
Sidebar
width = 300
padding = 40
border = 2
=> 342px
Content
width = 660
padding = 60
border = 2
=> 722px
2. Vì sao layout bị vỡ?
342 + 722 = 1064px > 960px

➡ vượt container → rớt dòng

3. Cách sửa
Cách 1 — dùng border-box
* {
  box-sizing: border-box;
}

➡ padding + border nằm trong width

Cách 2 — giữ content-box nhưng giảm width
.content {
  width: 600px;
}
.sidebar {
  width: 280px;
}
4. File debug_layout.html

(giữ nguyên + test 2 cách)

Câu C2 (10đ) — Cascade Puzzle
1. "Sản phẩm A"
font-size: 20px
color: red
Giải thích:
.card .title → font-size 20px
#featured .title → color red (ID mạnh hơn class)
.highlight !important chỉ ảnh hưởng color nhưng bị override bởi ID? ❌
➡ nhưng !important thắng bình thường → green !important > red

👉 THỰC TẾ:

color = green (!important thắng tất cả)
font-size = 20px
2. "Mô tả sản phẩm" (card featured)
color: blue (inherit từ .card)
3. "Sản phẩm B"
font-size: 20px
color: blue
Giải thích:
.card .title → font-size 20px
không có ID override
color không bị override → blue từ .card
4. "Mô tả sản phẩm B"
color: green !important
Vì:
.highlight { color: green !important } thắng tất cả
🎯 TÓM TẮT NHANH
Element	Color	Font-size
SP A	green	20px
Mô tả A	blue	default
SP B	blue	20px
Mô tả B	green	default