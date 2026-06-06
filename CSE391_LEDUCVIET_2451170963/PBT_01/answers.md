
Câu A1 :

1. Khi gõ https://shopee.vn vào trình duyệt và nhấn Enter, các bước xảy ra theo thứ tự:

Bước 1: DNS Lookup
Trình duyệt gửi yêu cầu tới DNS Server để tìm địa chỉ IP tương ứng với tên miền shopee.vn.

Bước 2: Thiết lập kết nối TCP
Trình duyệt thực hiện quá trình Three-way Handshake để kết nối với máy chủ.

Bước 3: Thiết lập kết nối HTTPS (TLS Handshake)
Trình duyệt và máy chủ trao đổi chứng chỉ SSL/TLS để tạo kết nối an toàn.

Bước 4: Gửi HTTP Request
Trình duyệt gửi yêu cầu GET tới máy chủ Shopee.

Bước 5: Máy chủ xử lý yêu cầu
Máy chủ nhận request, xử lý và chuẩn bị dữ liệu trả về.

Bước 6: Trả về HTTP Response
Máy chủ gửi lại HTML, CSS, JavaScript, hình ảnh cùng mã trạng thái HTTP.

Bước 7: Trình duyệt phân tích HTML
Browser xây dựng DOM Tree từ mã HTML nhận được.

Bước 8: Tải các tài nguyên bổ sung
Trình duyệt tiếp tục tải CSS, JavaScript, Font và hình ảnh.

Bước 9: Render trang web
Browser tạo Render Tree, thực hiện Layout và Paint.

Bước 10: Hiển thị trang web
Giao diện Shopee được hiển thị hoàn chỉnh trên màn hình.

2. Tab Network trong Chrome DevTools cho biết:

* Danh sách các request và response.
* URL của request.
* Phương thức request (GET, POST,...).
* Status Code.
* Loại tài nguyên (HTML, CSS, JS, Image,...).
* Kích thước dữ liệu.
* Thời gian tải.
* Tổng thời gian tải trang.

Câu A2 :
Đoạn code trên bị Google đánh giá SEO thấp vì sử dụng quá nhiều thẻ div và không thể hiện rõ ý nghĩa của từng phần nội dung.
Các lỗi semantic:
1. Dùng div thay vì thẻ header.
Sai:

<div class="header">

Đúng:

<header>

2. Dùng div thay vì thẻ nav cho menu điều hướng.

Sai:

<div class="menu">

Đúng:

<nav>

3. Tiêu đề sản phẩm không sử dụng thẻ heading.

Sai:

<div class="title">iPhone 16 Pro</div>

Đúng:

<h2>iPhone 16 Pro</h2>
4. Nội dung sản phẩm không sử dụng thẻ article.
Sai:
<div class="product">
Đúng:
<article>
5. Footer sử dụng div thay vì footer.
Sai:
<div class="footer">
Đúng:
<footer>
6. Ảnh không có thuộc tính alt.

Sai: <img src="iphone.jpg">

Đúng: <img src="iphone.jpg" alt="iPhone 16 Pro">

Code sau khi sửa:

<header>
    <h1>ShopTLU</h1>

```
<nav>
    <a href="/">Trang chủ</a>
    <a href="/products">Sản phẩm</a>
</nav>
```

</header>

<main>
    <article>
        <h2>iPhone 16 Pro</h2>
        <img src="iphone.jpg" alt="iPhone 16 Pro">
        <p>25.990.000đ</p>
    </article>
</main>

<footer>
    © 2026 ShopTLU
</footer>


Câu A3 

Kết quả hiển thị của đoạn HTML:

Hộp 1

Text A Text B

Hộp 2

Text C Text D

Hộp 3

Giải thích:

* Thẻ div là phần tử Block nên luôn chiếm toàn bộ chiều ngang và tự động xuống dòng.
* Thẻ span là phần tử Inline nên hiển thị trên cùng một dòng nếu còn đủ chỗ.
* Thẻ strong cũng là phần tử Inline nên nằm cùng dòng với span và thường hiển thị chữ đậm.

Do đó kết quả hiển thị là:

Hộp 1

Text A Text B

Hộp 2

Text C Text D

Hộp 3

Câu A4 :
1. Sự khác nhau giữa thead, tbody và tfoot

* thead: Chứa phần tiêu đề của bảng, thường bao gồm các cột tiêu đề.

* tbody: Chứa nội dung chính và dữ liệu của bảng.

* tfoot: Chứa phần cuối bảng, thường dùng để hiển thị tổng kết hoặc ghi chú.

2. Tại sao không nên dùng table để tạo layout trang web?

Lý do 1: Không đúng ngữ nghĩa HTML
Table được thiết kế để hiển thị dữ liệu dạng bảng, không phải để xây dựng bố cục trang web.

Lý do 2: SEO kém
Các công cụ tìm kiếm khó xác định cấu trúc nội dung của trang khi sử dụng table làm layout.

Lý do 3: Khó thiết kế Responsive
Table khó co giãn và hiển thị tốt trên điện thoại hoặc máy tính bảng.

Lý do 4: Khó bảo trì
Code sử dụng nhiều table lồng nhau thường dài, khó đọc và khó chỉnh sửa.

Lý do 5: Hiệu năng thấp hơn
Trình duyệt phải xử lý toàn bộ cấu trúc bảng trước khi hiển thị, làm giảm hiệu quả so với Flexbox hoặc CSS Grid.

Phần B :

Lỗi 1: Dòng 1 — Khai báo DOCTYPE sai (`<!DOCTYPE>`) — Sửa thành `<!DOCTYPE html>`.

Lỗi 2: Dòng 2 — Thiếu thuộc tính ngôn ngữ cho thẻ html — Sửa thành `<html lang="vi">`.

Lỗi 3: Dòng 4 — Thẻ `<title>` chưa đóng — Sửa thành `<title>Trang web</title>`.

Lỗi 4: Dòng 5 — Giá trị charset không chuẩn (`utf8`) — Sửa thành `UTF-8`.

Lỗi 5: Dòng 8 — Thẻ `<h1>` đóng sai (`<h1>` thay vì `</h1>`) — Sửa thành `</h1>`.

Lỗi 6: Dòng 12 — Thẻ `<a>` đầu tiên chưa đóng đúng — Sửa thành `</a>`.

Lỗi 7: Dòng 12-13 — Link sử dụng đường dẫn không rõ ràng (`home`, `products`) — Sửa thành anchor link hoặc URL hợp lệ như `#home`, `#products`.

Lỗi 8: Dòng 19 — Thẻ `<img>` thiếu thuộc tính `alt` — Thêm `alt="iPhone 16 Pro"`.

Lỗi 9: Dòng 21 — Thẻ `<b>` và `<p>` lồng sai thứ tự đóng — Sửa thành `<p>Giá: <strong>25.990.000đ</strong></p>`.

Lỗi 10: Dòng 18 — Dùng `<h3>` làm tiêu đề chính của section khi chưa có cấp tiêu đề phù hợp — Sửa thành `<h2>`.

Lỗi 11: Dòng 26-33 — Bảng dữ liệu không sử dụng cấu trúc semantic — Thêm `<thead>` và `<tbody>`.

Lỗi 12: Dòng 28-29 — Hàng tiêu đề bảng dùng `<td>` thay vì `<th>` — Sửa thành `<th>`.

Lỗi 13: Dòng 37 — Sử dụng thẻ `<main>` lần thứ hai — Một trang chỉ nên có một thẻ `<main>`.

Lỗi 14: Dòng 37-39 — Nội dung sidebar đặt trong `<main>` là không đúng semantic — Sửa thành `<aside>`.

Lỗi 15: Dòng 42 — Thẻ `<p>` trong footer chưa đóng — Sửa thành `</p>` trước `</footer>`.

Lỗi 16: Toàn bộ tài liệu thiếu cấu trúc semantic hoàn chỉnh cho phần tiêu đề sản phẩm và bảng — Đã bổ sung theo chuẩn HTML5.

Phần B bài 4:
# BÀI B4 – PHÂN TÍCH TRANG WEB THẬT

Website được chọn: shopee.vn

## 1. Phân tích Semantic HTML5

### Semantic Tag 1: <header>

Vị trí:
Phần đầu trang web, chứa logo, thanh tìm kiếm và menu điều hướng.

Chức năng:
Định nghĩa phần tiêu đề của trang.

Screenshot:
screenshots/header.png

---

### Semantic Tag 2: <nav>

Vị trí:
Thanh menu điều hướng ở đầu trang.

Chức năng:
Chứa các liên kết điều hướng tới các khu vực khác nhau của website.

Screenshot:
screenshots/nav.png

---

### Semantic Tag 3: <footer>

Vị trí:
Cuối trang web.

Chức năng:
Chứa thông tin bản quyền, chính sách và hỗ trợ khách hàng.

Screenshot:
screenshots/footer.png

---

## 2. Các vị trí chưa sử dụng Semantic HTML tối ưu

### Trường hợp 1

Một số khu vực hiển thị sản phẩm sử dụng nhiều thẻ <div> lồng nhau thay vì sử dụng <article> cho từng sản phẩm.

Screenshot:
screenshots/non-semantic-1.png

---

### Trường hợp 2

Một số khối nội dung được xây dựng hoàn toàn bằng <div> thay vì dùng các thẻ semantic như <section> hoặc <aside>.

Screenshot:
screenshots/non-semantic-2.png

---

## 3. Phân tích Table

Table được tìm thấy tại:

(Mô tả vị trí bạn tìm được)

Screenshot:
screenshots/table.png

### Nội dung của Table

Bảng hiển thị:

* Tên sản phẩm
* Giá sản phẩm
* Thông tin kỹ thuật

(Điền theo bảng thực tế tìm được)

### Có sử dụng thead và tbody không?

Có / Không

Nếu có:

* thead chứa tiêu đề cột.
* tbody chứa dữ liệu chính của bảng.

---

## 4. Phân tích Form

Form được tìm thấy tại:

Ô tìm kiếm trên website.

Screenshot:
screenshots/form.png

### Action

Ví dụ:

action="/search"

(Hoặc ghi đúng giá trị tìm được)

### Method

Ví dụ:

method="GET"

(Hoặc ghi đúng giá trị tìm được)

### Các Input Types được sử dụng

* text
* search
* hidden

Phần C :
# Câu C1 (10 điểm) – Thiết kế cấu trúc HTML

```html
<header>
    <!-- header vì đây là phần đầu trang web -->
    
    <nav>
        <!-- nav vì chứa các liên kết điều hướng chính -->
    </nav>
</header>

<nav aria-label="breadcrumb">
    <!-- nav vì breadcrumb là một dạng điều hướng -->

    <ol>
        <!-- ol vì breadcrumb có thứ tự phân cấp -->

        <li><a href="/">Trang chủ</a></li>
        <li><a href="/dien-thoai">Điện thoại</a></li>
        <li>iPhone 16</li>
    </ol>
</nav>

<main>
    <!-- main vì chứa nội dung chính của trang -->

    <section>
        <!-- section cho khu vực hình ảnh sản phẩm -->

        <h2>Hình ảnh sản phẩm</h2>

        <figure>
            <!-- figure dùng cho ảnh sản phẩm chính -->
            <img src="#" alt="Ảnh sản phẩm">
            <figcaption>Ảnh sản phẩm</figcaption>
        </figure>

        <figure>
            <img src="#" alt="Ảnh 2">
            <figcaption>Ảnh 2</figcaption>
        </figure>

        <figure>
            <img src="#" alt="Ảnh 3">
            <figcaption>Ảnh 3</figcaption>
        </figure>

        <figure>
            <img src="#" alt="Ảnh 4">
            <figcaption>Ảnh 4</figcaption>
        </figure>

        <figure>
            <img src="#" alt="Ảnh 5">
            <figcaption>Ảnh 5</figcaption>
        </figure>
    </section>

    <article>
        <!-- article vì thông tin sản phẩm là một nội dung độc lập -->

        <header>
            <!-- header của article -->

            <h1>Tên sản phẩm</h1>
        </header>

        <p>Giá sản phẩm</p>

        <section>
            <!-- section cho đánh giá sao -->

            <h2>Đánh giá</h2>
            <p>★★★★★</p>
        </section>

        <section>
            <!-- section cho mô tả sản phẩm -->

            <h2>Mô tả sản phẩm</h2>
            <p>Mô tả chi tiết...</p>
        </section>
    </article>

    <section>
        <!-- section cho bảng thông số kỹ thuật -->

        <h2>Thông số kỹ thuật</h2>

        <table>
            <!-- table vì dữ liệu dạng bảng -->

            <thead>
                <!-- thead chứa tiêu đề cột -->

                <tr>
                    <th>Thông số</th>
                    <th>Giá trị</th>
                </tr>
            </thead>

            <tbody>
                <!-- tbody chứa dữ liệu -->
                <tr>
                    <td>Ví dụ</td>
                    <td>Giá trị</td>
                </tr>
            </tbody>
        </table>
    </section>

    <section>
        <!-- section cho đánh giá và bình luận -->

        <h2>Đánh giá khách hàng</h2>

        <article>
            <!-- mỗi bình luận là một article độc lập -->

            <h3>Người dùng A</h3>
            <p>Nội dung bình luận...</p>
        </article>

        <article>
            <h3>Người dùng B</h3>
            <p>Nội dung bình luận...</p>
        </article>
    </section>

    <aside>
        <!-- aside vì đây là nội dung phụ liên quan -->

        <h2>Sản phẩm tương tự</h2>

        <article>
            <h3>Sản phẩm 1</h3>
        </article>

        <article>
            <h3>Sản phẩm 2</h3>
        </article>

        <article>
            <h3>Sản phẩm 3</h3>
        </article>
    </aside>
</main>

<footer>
    <!-- footer vì chứa thông tin cuối trang -->
</footer>
```

# Câu C2 (10 điểm) – So sánh và tranh luận

Tôi không đồng ý với ý kiến rằng chỉ cần dùng thẻ div cho mọi thứ rồi thêm class là đủ. Semantic HTML mang lại nhiều lợi ích quan trọng mà div không thể thay thế hoàn toàn.

Thứ nhất, semantic HTML giúp cải thiện SEO. Các công cụ tìm kiếm như Google sử dụng cấu trúc HTML để hiểu nội dung trang web. Khi sử dụng các thẻ như header, nav, main, article, section và footer, Google có thể xác định chính xác đâu là nội dung chính, đâu là điều hướng và đâu là thông tin phụ. Điều này giúp trang web được lập chỉ mục tốt hơn và có khả năng xếp hạng cao hơn trên kết quả tìm kiếm.

Thứ hai, semantic HTML hỗ trợ Accessibility. Các công cụ hỗ trợ người khuyết tật như Screen Reader dựa vào các thẻ semantic để đọc và mô tả cấu trúc trang web. Nếu toàn bộ trang chỉ sử dụng div, người dùng khiếm thị sẽ khó hiểu được bố cục và nội dung của trang.

Ví dụ, trên một trang tin tức, việc sử dụng article cho từng bài báo giúp Google và Screen Reader nhận biết đó là một nội dung độc lập. Nếu thay bằng div, ý nghĩa này sẽ bị mất và phải bổ sung thêm nhiều thuộc tính khác để mô tả.

Tuy nhiên, div vẫn có vai trò quan trọng trong thực tế. Khi cần tạo các nhóm phần tử để phục vụ CSS hoặc JavaScript mà không có ý nghĩa ngữ nghĩa đặc biệt, div là lựa chọn phù hợp. Ví dụ, một khối dùng để căn chỉnh layout bằng Flexbox hoặc Grid thường có thể sử dụng div mà không gây ảnh hưởng đến cấu trúc semantic của trang.

Vì vậy, semantic HTML và div không loại trừ nhau mà nên được sử dụng đúng mục đích để tạo ra các trang web tối ưu, dễ bảo trì và thân thiện với người dùng.


