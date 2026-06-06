Câu A1 
type="email" → Ô nhập email có kiểm tra @ và domain → Dùng cho đăng ký/đăng nhập.
type="password" → Ô nhập mật khẩu bị che ký tự → Dùng cho login.
type="number" → Ô nhập số có tăng/giảm → Validate chỉ cho phép số → Dùng số lượng sản phẩm.
type="date" → Ô chọn ngày dạng calendar → Validate ngày hợp lệ → Dùng chọn ngày đặt hàng.
type="tel" → Ô nhập số điện thoại → Hỗ trợ bàn phím số → Dùng nhập SĐT.
type="url" → Ô nhập link website → Validate URL → Dùng nhập link sản phẩm.
type="search" → Ô tìm kiếm → Không validate → Dùng tìm sản phẩm.
type="checkbox" → Chọn nhiều lựa chọn → Dùng filter sản phẩm.
type="radio" → Chọn 1 lựa chọn → Dùng chọn phương thức thanh toán.
type="file" → Upload file → Có thể giới hạn loại file → Dùng upload ảnh.
Câu A2 
Trường hợp 1
KHÔNG submit vì required nhưng để trống.
Trường hợp 2
KHÔNG submit vì email sai định dạng (thiếu @).
Trường hợp 3
KHÔNG hợp lệ vì 15 > max 10.
Trường hợp 4
KHÔNG submit vì không đúng 10 chữ số theo pattern.
Trường hợp 5
KHÔNG submit vì mật khẩu < 8 ký tự.
Câu A3 
1. <label for="email">
Giúp screen reader đọc đúng input, tăng accessibility và cho phép click label để focus input.
2. <fieldset> + <legend>
Dùng để nhóm các input liên quan.
Ví dụ:
nhóm phương thức thanh toán
nhóm giới tính
nhóm thông tin giao hàng
3. aria-label

Dùng khi không có text hiển thị (icon button).

Không dùng khi đã có label vì gây trùng lặp nội dung cho screen reader.

Câu A4 (5 điểm) — Media
loading="lazy"

Giúp trì hoãn tải ảnh đến khi gần viewport → tăng tốc độ web.
Không dùng cho ảnh quan trọng (hero image).

<video> nhiều <source>

Để hỗ trợ nhiều trình duyệt khác nhau.

Format phổ biến:

MP4
WebM
OGG
alt trong <img>

Dùng để mô tả ảnh, hỗ trợ SEO và screen reader.

Alt đúng:
iPhone 16:
alt="iPhone 16 Pro màu đen mặt trước"
Ảnh trang trí:
alt=""
Biểu đồ:
alt="Biểu đồ doanh thu quý 1 năm 2026 tăng trưởng"
Câu A5 (5 điểm) — figure vs img
Dùng <img>
ảnh đơn giản, chỉ để hiển thị
ví dụ: icon, avatar, banner
Dùng <figure>
ảnh có nội dung + chú thích
ví dụ: sản phẩm, biểu đồ, ảnh trong bài viết

Câu C1 
Lỗi 1: Dòng 2 — Input “Tên” không có <label> (accessibility)

Sửa:

<label for="name">Tên:</label>
<input type="text" id="name" name="name" required>
Lỗi 2: Dòng 4 — Email không có id, name, và thiếu required

Sửa:

<label for="email">Email:</label>
<input type="email" id="email" name="email" placeholder="Email của bạn" required>
Lỗi 3: Dòng 6–7 — Password không có name, không có id, thiếu validation

Sửa:

<label for="password">Mật khẩu:</label>
<input type="password" id="password" name="password" placeholder="Mật khẩu" required>

<label for="confirm">Nhập lại mật khẩu:</label>
<input type="password" id="confirm" name="confirm" placeholder="Nhập lại mật khẩu" required>
Lỗi 4: Dòng 9 — Phone dùng type="text" sai semantic

Sửa:

<label for="phone">Phone:</label>
<input type="tel" id="phone" name="phone" pattern="[0-9]{10}" required>
Lỗi 5: Dòng 11–14 — <select> không có name, thiếu label

Sửa:

<label for="city">Thành phố:</label>
<select id="city" name="city">
    <option>Hà Nội</option>
    <option>TP.HCM</option>
</select>
Lỗi 6: Dòng 16–18 — Checkbox không có <input> và không liên kết label

Sửa:

<input type="checkbox" id="terms" name="terms" required>
<label for="terms">Tôi đồng ý điều khoản</label>
Lỗi 7: Dòng 20 — Submit không có <button> semantic

Sửa:

<button type="submit">Gửi</button>
Lỗi 8: Toàn form — thiếu <form action> và method

Sửa:

<form action="/register" method="POST">
✅ Form sau khi sửa (hoàn chỉnh)
<form action="/register" method="POST">

    <label for="name">Tên:</label>
    <input type="text" id="name" name="name" required>

    <label for="email">Email:</label>
    <input type="email" id="email" name="email" placeholder="Email của bạn" required>

    <label for="password">Mật khẩu:</label>
    <input type="password" id="password" name="password" required>

    <label for="confirm">Nhập lại mật khẩu:</label>
    <input type="password" id="confirm" name="confirm" required>

    <label for="phone">Phone:</label>
    <input type="tel" id="phone" name="phone" pattern="[0-9]{10}" required>

    <label for="city">Thành phố:</label>
    <select id="city" name="city">
        <option>Hà Nội</option>
        <option>TP.HCM</option>
    </select>

    <input type="checkbox" id="terms" name="terms" required>
    <label for="terms">Tôi đồng ý điều khoản</label>

    <button type="submit">Gửi</button>

</form>
Câu C2 (10 điểm) — Chiến lược Validation
1. Regex
CMND/CCCD (12 chữ số)
^[0-9]{12}$
Số tài khoản (10–15 chữ số)
^[0-9]{10,15}$
2. HTML5 validation có đủ an toàn cho ngân hàng không?

❌ KHÔNG đủ an toàn.

Lý do:
Có thể bypass bằng DevTools
Có thể gửi request trực tiếp (Postman, curl)
Chỉ chạy phía client (frontend)
3. 3 validation HTML5 KHÔNG làm được (cần JavaScript)
Kiểm tra CMND có tồn tại trong database hay không
Kiểm tra mật khẩu có bị lộ trong data breach không
Kiểm tra logic nghiệp vụ (ví dụ: tài khoản bị khóa / hạn mức giao dịch)
4. 2 rủi ro nếu chỉ validate frontend
Gửi dữ liệu giả lên server
Hacker bypass HTML validation
SQL Injection / Data corruption
Input độc hại vẫn có thể lọt vào backend