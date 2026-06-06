Câu A1 (10đ) — Grid System
Kích thước	< 768px	768px – 991px	≥ 992px
Số cột	1 cột	2 cột	4 cột
Box layout	Box 1–4 xếp dọc	2 hàng, mỗi hàng 2 box	1 hàng 4 box

Giải thích:

col-12: chiếm 12/12 cột → full width (mobile)
col-md-6: từ ≥768px, mỗi box chiếm 6/12 → 2 cột
col-lg-3: từ ≥992px, mỗi box chiếm 3/12 → 4 cột

Câu hỏi thêm:

col-md-6 nghĩa là: phần tử chiếm 6/12 cột (50%) từ breakpoint md (≥768px) trở lên.
Không cần col-sm-12 vì Bootstrap mặc định mobile-first: nếu không khai báo sm thì tự hiểu là 12 cột (full width).
Câu A2 (10đ) — Utilities & Components
1. d-none d-md-block
d-none: ẩn toàn bộ ở mọi kích thước
d-md-block: từ ≥768px trở lên hiển thị dạng block

Kết luận:

Mobile (<768px): ẩn
Tablet trở lên (≥768px): hiển thị
2. 5 spacing utilities
mt-3: margin-top mức 3 (≈ 1rem)
mb-2: margin-bottom mức 2
ms-4: margin-left (start) mức 4
me-2: margin-right (end) mức 2
px-4: padding-left + padding-right mức 4
py-3: padding-top + padding-bottom mức 3
m-auto: margin auto (căn giữa)
3. Container khác nhau
.container: container cố định theo breakpoint (có max-width)
.container-fluid: full width 100% mọi màn hình
.container-md: full width < md, từ md trở lên thì fixed width
PHẦN C — PHÂN TÍCH (20 điểm)
Câu C1 (10đ) — Tùy biến Bootstrap
1. Đổi màu primary sang #E63946

Quy trình:

Cần dùng Sass source của Bootstrap
Cài Bootstrap qua npm
Tạo file SCSS custom
Override biến:
$primary: #E63946;
@import "bootstrap/scss/bootstrap";
Compile SCSS → CSS bằng sass compiler
2. Vì sao không nên override trực tiếp CSS?

Sai cách:

.btn-primary {
  background: red;
}

Lý do:

Dễ bị ghi đè bởi Bootstrap update
Không đồng bộ theme hệ thống
Không tận dụng hệ thống biến (design system)
Khó maintain khi project lớn

Đúng cách:

Dùng Sass variables ($primary, $success,…)
Bootstrap tự sinh toàn bộ component theo theme
Câu C2 (10đ) — So sánh Bootstrap vs CSS thuần
1. Số dòng code
CSS thuần:
Navbar + responsive: ~80–150 dòng
Card + grid: ~60–120 dòng
→ Tổng: 150–250 dòng
Bootstrap:
Chỉ dùng class
→ ~20–40 dòng HTML
2. Thời gian phát triển
CSS thuần: lâu hơn (phải tự xử lý layout, responsive, hover, spacing)
Bootstrap: nhanh (dùng sẵn component + utility)
3. Khả năng tùy biến
CSS thuần: rất cao (toàn quyền)
Bootstrap: trung bình (phụ thuộc framework, cần override hoặc Sass)
4. Khi nào dùng

Dùng Bootstrap khi:

cần làm nhanh (dashboard, landing page)
team lớn cần consistency
prototype / MVP

Không nên dùng Bootstrap khi:

cần UI độc quyền cao (design system riêng)
tối ưu performance tối đa
dự án nhỏ nhưng cần nhẹ (no framework)