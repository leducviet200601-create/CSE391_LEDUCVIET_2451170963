Câu A1 
Position	Vẫn chiếm chỗ trong flow	Tham chiếu vị trí	Cuộn theo trang	Use case
static	Có	Normal flow	Có	Mặc định
relative	Có	Chính nó	Có	Dịch vị trí, làm mốc cho absolute
absolute	Không	nearest positioned ancestor	Không	Tooltip, badge, overlay
fixed	Không	viewport	Không	Header, button cố định
sticky	Có (ban đầu)	nearest scroll container	Có (dính khi scroll)	Sticky header/sidebar

Câu hỏi thêm:

Absolute tham chiếu body khi không có phần tử cha nào có position khác static.

Absolute tham chiếu parent khi có ancestor gần nhất có position: relative, absolute, fixed hoặc sticky.

Nearest positioned ancestor là phần tử cha gần nhất (tính từ trong ra ngoài) có position khác static.

Câu A2 

Trường hợp 1:
display: flex; flex: 1
4 items → 1 hàng ngang, chia đều 4 cột.

Trường hợp 2:
flex-wrap: wrap; width 45%; margin 2.5%
6 items → 3 hàng, mỗi hàng 2 cột.

Trường hợp 3:
justify-content: space-between; align-items: center
3 items → nằm ngang cách đều, căn giữa theo chiều dọc.

Trường hợp 4:
grid-template-columns: 200px 1fr 200px
3 items → 3 cột: trái cố định, giữa linh hoạt, phải cố định.

Trường hợp 5:
repeat(3, 1fr)
7 items → 3 cột mỗi hàng
Hàng 1: 3 item
Hàng 2: 3 item
Hàng 3: 1 item nằm đầu hàng

PHẦN C — SUY LUẬN
Câu C1 (10đ) — Flexbox vs Grid

Navigation bar ngang → Flexbox vì layout 1 chiều.

Lưới ảnh Instagram → Grid vì layout 2 chiều, số lượng không cố định.

Layout blog (main + sidebar) → Grid vì chia cột rõ ràng.

Footer 4 cột → Grid vì bố cục cột cố định.

Card sản phẩm → Flexbox vì cần sắp xếp dọc (ảnh, text, button), button cần dính đáy.

Câu C2 

Lỗi 1: Cards không đều chiều cao, nút bị lệch.

Nguyên nhân: không dùng flex-direction column và không đẩy nút xuống đáy.

Sửa:
.card {
display: flex;
flex-direction: column;
}
.card .btn {
margin-top: auto;
}

Lỗi 2: Item không căn giữa trong hero.

Nguyên nhân: thiếu justify-content và align-items.

Sửa:
.hero {
display: flex;
justify-content: center;
align-items: center;
height: 100vh;
}

Lỗi 3: Sidebar bị co lại.

Nguyên nhân: flex item bị shrink mặc định.

Sửa:
.sidebar {
width: 250px;
flex-shrink: 0;
}
.content {
flex: 1;
}