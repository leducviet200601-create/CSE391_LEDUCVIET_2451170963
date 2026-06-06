Câu A1 

Thẻ viewport chuẩn:

<meta name="viewport" content="width=device-width, initial-scale=1.0">

Giải thích:

width=device-width: đặt chiều rộng trang bằng đúng chiều rộng thiết bị
initial-scale=1.0: mức zoom ban đầu 100%

Nếu thiếu thẻ viewport:
Trang web trên iPhone/mobile sẽ bị thu nhỏ toàn bộ như phiên bản desktop, chữ nhỏ, phải zoom thủ công để đọc, layout không tự co giãn theo màn hình.

Mobile-First và Desktop-First:

Mobile-First:
CSS mặc định viết cho mobile, sau đó mở rộng lên màn hình lớn bằng min-width.

Ví dụ:
.card { width: 100%; }

@media (min-width: 768px) {
.card { width: 50%; }
}

Desktop-First:
CSS mặc định viết cho desktop, sau đó thu nhỏ cho mobile bằng max-width.

Ví dụ:
.card { width: 25%; }

@media (max-width: 768px) {
.card { width: 100%; }
}

Mobile-First được khuyên dùng vì:

ưu tiên người dùng mobile (lượng truy cập lớn)
hiệu suất tốt hơn do ít override CSS
dễ mở rộng lên màn hình lớn
tư duy thiết kế từ nhỏ đến lớn rõ ràng hơn

Câu A2 

Breakpoints phổ biến:

<576px: mobile nhỏ (1 cột)
≥576px: mobile lớn (1–2 cột)
≥768px: tablet (2 cột)
≥992px: laptop (3–4 cột)
≥1200px: desktop lớn (4–6 cột)

Câu A3 

.container mặc định: width 100%

375px: 100%
600px: 540px
800px: 720px
1000px: 960px
1400px: 1140px

Câu A4 (5đ) — SCSS Basics

Variables:
Dùng $ để lưu giá trị dùng lại nhiều lần.

$primary-color: blue;

.button {
color: $primary-color;
}

Nesting:
Viết CSS lồng nhau theo cấu trúc HTML.

.nav {
a {
color: red;
}
}

Mixins:
Tái sử dụng nhóm thuộc tính CSS.

@mixin flex-center {
display: flex;
justify-content: center;
align-items: center;
}

.box {
@include flex-center;
}

Extend:
Kế thừa style từ selector khác.

%card {
padding: 10px;
border: 1px solid #ccc;
}

.card {
@extend %card;
}

Trình duyệt không đọc được SCSS vì SCSS không phải CSS chuẩn. Cần compile SCSS sang CSS bằng Sass compiler (ví dụ dart-sass hoặc node-sass).

PHẦN C — PHÂN TÍCH

Câu C1 

Navigation:

Mobile: hamburger menu
Tablet: menu rút gọn hoặc dropdown
Desktop: menu ngang đầy đủ

Lưới content:

Mobile: 1 cột
Tablet: 2–3 cột
Desktop: 4–6 cột

Elements bị ẩn trên mobile:

sidebar
banner phụ
quảng cáo phụ
phần gợi ý thêm

Font size:

Mobile: nhỏ hơn, tối ưu đọc dọc
Desktop: lớn hơn, spacing rộng hơn

Media queries thường gặp trong DevTools:
@media (min-width: 768px)
@media (min-width: 1024px)
@media (min-width: 1200px)

Câu C2 

Mobile:

Header (logo + nút đặt bàn)
Hero image
Form đặt bàn full width
Grid món ăn 1 cột
Map dưới cùng
Footer

Tablet:

Header ngang
Grid món ăn 2–3 cột
Form ở giữa hoặc trên
Map full width

Desktop:

Layout 2 cột:
trái: content
phải: sidebar (form + map)
Grid món ăn 3–4 cột
Hero full width
Footer full width

CSS skeleton:

.layout {
display: grid;
grid-template-columns: 1fr;
gap: 20px;
}

.menu-grid {
display: grid;
grid-template-columns: 1fr;
}

@media (min-width: 768px) {
.menu-grid {
grid-template-columns: repeat(2, 1fr);
}
}

@media (min-width: 1024px) {
.layout {
grid-template-columns: 2fr 1fr;
}

.menu-grid {
grid-template-columns: repeat(3, 1fr);
}
}