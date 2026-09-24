# XÂY DỰNG ỨNG DỤNG WEB ĐƠN TRANG GIỚI THIỆU SÁCH

## 1. Giới thiệu
* Đây là đồ án thực tập cơ sở ngành với đề tài:
> **Xây dựng ứng dụng Web đơn trang giới thiệu sách**
* Ứng dụng được xây dựng nhằm giới thiệu và tra cứu thông tin về các đầu sách thông qua giao diện Web đơn trang (Single Page Application - SPA).
* Ứng dụng sử dụng **HTML/HTML5, CSS/CSS3 và JavaScript thuần (Vanilla JavaScript)**. Dữ liệu sách được tổ chức dưới dạng dữ liệu tĩnh bằng JavaScript `Array/Object` hoặc tệp JSON.
* Người dùng có thể xem danh sách sách, tìm kiếm sách theo tên hoặc tác giả, lọc theo thể loại, sắp xếp danh sách, xem thông tin chi tiết và chuyển trang mà không cần tải lại toàn bộ trang Web.
* Phạm vi của đồ án tập trung vào việc minh họa cách xây dựng một ứng dụng Web đơn trang với dữ liệu tĩnh, không sử dụng Backend hoặc cơ sở dữ liệu.
---
## 2. Thông tin đồ án
| Nội dung                 | Thông tin                                       |
| ------------------------ | ----------------------------------------------- |
| **Tên đề tài**           | Xây dựng ứng dụng Web đơn trang giới thiệu sách |
| **Sinh viên thực hiện**  | Nguyễn Văn Nghĩa                                |
| **Mã số sinh viên**      | 170124877                                       |
| **Lớp**                  | DX24TT8                                         |
| **Khóa**                 | 2024 - 2028                                     |
| **Email**                |nghianv271091@tvu-onschool.edu.vn                                       |
| **Số điện thoại**        |0362630767 
| **Giảng viên hướng dẫn** | ThS. Phạm Thị Trúc Mai                          |
| **Ngành**                | Công nghệ thông tin                             |
| **Trường**               | Đại học Trà Vinh                                |
| **Loại ứng dụng**        | Ứng dụng Web đơn trang                          |
| **Dữ liệu**              | Dữ liệu tĩnh                                    |
| **Ngôn ngữ chính**       | HTML, CSS, JavaScript                           |
| **Công cụ phát triển**   | Visual Studio Code                              |
| **Công cụ chạy thử**     | Live Server                                     |
| **Repository**           | https://github.com/nghianv271091-coder/csn-dx24tt8-nguyenvannghia-webgioithieusach-nodejs               |
| **Link phần mềm**           | https://nghianv271091-coder.github.io/csn-dx24tt8-nguyenvannghia-webgioithieusach-nodejs/scr/index.html               |
---
# 3. Mục tiêu đồ án
## 3.1. Mục tiêu tổng quát
* Xây dựng một ứng dụng Web đơn trang giới thiệu sách có giao diện trực quan, dễ sử dụng và có khả năng tìm kiếm, lọc, sắp xếp và xem thông tin chi tiết về sách.
* Thông qua đồ án, sinh viên vận dụng các kiến thức về HTML, CSS và JavaScript để xây dựng một ứng dụng Web có tính tương tác với dữ liệu tĩnh.
## 3.2. Mục tiêu cụ thể
* Tìm hiểu mô hình ứng dụng Web đơn trang.
* Tìm hiểu cấu trúc HTML/HTML5.
* Tìm hiểu CSS/CSS3 và thiết kế giao diện responsive.
* Tìm hiểu JavaScript và cách xử lý dữ liệu.
* Tổ chức dữ liệu sách bằng `Array`, `Object` hoặc JSON.
* Hiển thị danh sách sách trên giao diện.
* Xây dựng chức năng tìm kiếm sách.
* Xây dựng chức năng lọc sách theo thể loại.
* Xây dựng chức năng sắp xếp sách.
* Xây dựng chức năng xem thông tin chi tiết của sách.
* Xử lý các sự kiện tương tác của người dùng.
* Cập nhật nội dung giao diện bằng DOM mà không cần tải lại toàn bộ trang.
* Kiểm thử các chức năng chính của ứng dụng.
* Quản lý mã nguồn và tiến độ thực hiện thông qua GitHub.

---
# 4. Phạm vi thực hiện
## 4.1. Nội dung thực hiện
Đồ án tập trung xây dựng ứng dụng Web đơn trang với các chức năng:
* Hiển thị danh sách sách.
* Hiển thị thông tin cơ bản của từng sách.
* Tìm kiếm sách theo tên sách.
* Tìm kiếm sách theo tác giả.
* Lọc sách theo thể loại.
* Sắp xếp sách.
* Xem thông tin chi tiết sách.
* Điều hướng giữa các khu vực nội dung trong cùng một trang.
* Cập nhật giao diện bằng JavaScript.
* Thiết kế giao diện có khả năng hiển thị trên nhiều kích thước màn hình.

## 4.2. Nội dung không thực hiện
Trong phạm vi đồ án này, ứng dụng **không thực hiện**:
* Không xây dựng Backend.
* Không sử dụng cơ sở dữ liệu.
* Không xây dựng hệ thống đăng nhập người dùng thực tế.
* Không xây dựng chức năng quản trị viên.
* Không thực hiện CRUD với cơ sở dữ liệu.
* Không xây dựng chức năng mua bán sách.
* Không tích hợp thanh toán trực tuyến.
* Không sử dụng React, Vue, Angular hoặc các Framework Frontend khác.
* Không xây dựng hệ thống quản lý sách hoàn chỉnh.

---
# 5. Công nghệ và công cụ sử dụng
## 5.1. HTML/HTML5
HTML được sử dụng để xây dựng cấu trúc nền tảng và khung nội dung cơ bản của trang Web đơn trang.
Các thành phần HTML được sử dụng để:
* Xây dựng phần đầu trang (`<header>`).
* Xây dựng thanh điều hướng (`<nav>`, `<ul>`, `<li>`).
* Khung chứa danh sách sách tự động (`<main>`, `<section id="book-grid">`).
* Nhúng tệp kịch bản điều khiển giao diện (`<script src="js/app.js">`).

## 5.2. CSS/CSS3
CSS được sử dụng để thiết kế giao diện thẩm mỹ và phân bổ bố cục ứng dụng.
Các nội dung chính:
* Bố cục trang Web dạng Grid (`display: grid; grid-template-columns: repeat(3, 1fr);`).
* Đổ bóng thẻ, bo góc, phân tách thẻ thể loại rõ ràng.
* Quản lý chiều cao tối đa của ảnh bìa (`max-height: 300px; object-fit: cover;`) chống méo hình.
* Định dạng các nút chức năng ứng dụng (`.btn-detail`).
* Hiệu ứng tương tác người dùng.
* Responsive Web Design.

## 5.3. JavaScript
JavaScript đóng vai trò làm bộ não điều khiển toàn bộ tính năng chuyển đổi dữ liệu của trang SPA.
Các nội dung sử dụng:
* Kỹ thuật lấy dữ liệu bất đồng bộ `fetch()` để đọc tệp `books.json`.
* Vòng lặp `forEach()` để duyệt và khởi tạo cấu trúc HTML cho từng đầu sách.
* Quản lý DOM (`document.getElementById`, `innerHTML`, `appendChild`).
* Cơ chế bắt lỗi ảnh tải từ API thông qua sự kiện `onerror` trực tiếp trên phần tử ảnh để thay thế bằng link ảnh mặc định (`placehold.co`), loại bỏ hoàn toàn ô xám lỗi giao diện.
* Các hàm chức năng: `map()`, `filter()`, `find()`, `sort()`.
* Tìm kiếm, lọc dữ liệu, sắp xếp dữ liệu và hiển thị chi tiết sách.


## 5.4. Visual Studio Code
Visual Studio Code được sử dụng làm môi trường phát triển mã nguồn.

## 5.5. Live Server
Live Server được sử dụng để chạy và kiểm tra ứng dụng Web trong quá trình phát triển.

## 5.6. Git và GitHub
Git được sử dụng để quản lý phiên bản mã nguồn.
GitHub được sử dụng để:
* Lưu trữ mã nguồn.
* Theo dõi lịch sử thay đổi.
* Quản lý tiến độ thực hiện.
* Thực hiện commit thường xuyên.
* Lưu trữ các báo cáo tiến độ hàng tuần.

---

# 6. Chức năng chính của ứng dụng
| STT | Chức năng     | Mô tả                                           |
| --- | ------------- | ----------------------------------------------- |
| 1   | Hiển thị sách | Hiển thị danh sách các đầu sách                 |
| 2   | Tìm kiếm      | Tìm kiếm sách theo tên sách hoặc tác giả        |
| 3   | Lọc           | Lọc sách theo thể loại                          |
| 4   | Sắp xếp       | Sắp xếp danh sách sách theo tiêu chí được chọn  |
| 5   | Xem chi tiết  | Hiển thị thông tin chi tiết của một đầu sách    |
trang           |
| 6   | Điều hướng    | Điều hướng giữa các khu vực nội dung            |
| 7   | Responsive    | Hiển thị phù hợp trên nhiều kích thước màn hình |

---
# 7. Cấu trúc dữ liệu sách
Dữ liệu được lưu trữ tập trung tại tệp `data/books.json` dưới dạng mảng các Object với cấu trúc như sau:

| Trường        | Ý nghĩa           | Loại dữ liệu |
| ------------- | ----------------- | ------------ |
| `id`          | Mã định danh sách | Number       |
| `title`       | Tên sách          | String       |
| `author`      | Tác giả           | String       |
| `category`    | Thể loại          | String       |
| `year`        | Năm xuất bản      | Number       |
| `pages`       | Số trang          | Number       |
| `cover`       | Đường dẫn ảnh bìa | String (URL) |
| `description` | Nội dung mô tả    | String       |

Ví dụ thực tế trong dự án:
```json
{
  "id": 3,
  "title": "Tuổi Trẻ Đáng Giá Bao Nhiêu",
  "author": "Rosie Nguyễn",
  "category": "Phát triển bản thân",
  "year": 2016,
  "pages": 285,
  "cover": "https://unsplash.com",
  "description": "Những chia sẻ về học tập, trải nghiệm, đọc sách và cách sử dụng quãng thời gian tuổi trẻ một cách có ý nghĩa."
}
```
---

# 8. Luồng xử lý chính
Luồng xử lý cơ bản của ứng dụng:
```text
Khởi động ứng dụng (Mở qua Live Server)
        ↓
JavaScript thực hiện fetch('data/books.json')
        ↓
Duyệt mảng dữ liệu & xử lý thuộc tính bắt lỗi onerror của ảnh
        ↓
Hiển thị danh sách lên lưới #book-grid (3 cột)
        ↓
Người dùng tương tác (Tìm kiếm / lọc / sắp xếp)
        ↓
Cập nhật danh sách hiển thị tự động bằng DOM
```

---
# 9. Cấu trúc thư mục thực tế của dự án

```text
book-spa-nguyen-van-nghia/
│
├── index.html          # Khung cấu trúc giao diện Single Page tiếng Việt chuẩn UTF-8
├── README.md           # Hướng dẫn chi tiết dự án & Báo cáo tiến độ tuần
│
├── css/
│   └── style.css       # Định dạng CSS Grid chia 3 cột, CSS Card sách, tag thể loại
│
├── js/
│   └── app.js          # Xử lý fetch dữ liệu JSON, render DOM, bắt sự kiện ảnh lỗi onerror
│
├── data/
│   └── books.json      # Cơ sở dữ liệu tĩnh lưu thông tin sách chuẩn JSON
│
└── progress-report/    # Thư mục lưu trữ các báo cáo tiến độ nộp định kỳ
    ├── Tuan-1/
    ├── Tuan-2/
    └── ...
```
---

# 10. Hướng dẫn cài đặt và chạy chương trình
## 10.1. Yêu cầu môi trường
Cần chuẩn bị:
* Máy tính.
* Visual Studio Code.
* Trình duyệt Web như Google Chrome, Microsoft Edge hoặc Firefox.
* Extension Live Server trong Visual Studio Code.
* Git.
## 10.2. Danh sách công cụ & Link tải chính thức
Để khởi chạy và kiểm thử đồ án này, máy tính cần cài đặt các công cụ nền tảng sau:

*   **Visual Studio Code (Môi trường lập trình):** 
    *   *Mô tả:* Trình soạn thảo mã nguồn chính của dự án.
    *   *Link tải chính thức:* [Tải VS Code cho Windows](https://visualstudio.com)
*   **Git (Quản lý mã nguồn):** 
    *   *Mô tả:* Công cụ đồng bộ và quản lý các phiên bản mã nguồn lên GitHub.
    *   *Link tải chính thức:* [Tải Git cho Windows](https://git-scm.com)
*   **MSYS2 (Môi trường hỗ trợ biên dịch):** 
    *   *Mô tả:* Cung cấp các công cụ dòng lệnh hệ thống bổ trợ nếu cần nâng cấp hệ thống.
    *   *Link tải chính thức:* [Tải MSYS2 Installer](https://msys2.org)
*   **Live Server Extension (Tiện ích chạy thử):**
    *   *Mô tả:* Tiện ích mở rộng bắt buộc cài trực tiếp bên trong VS Code để tạo server nội bộ, giúp chạy file `index.html` và fetch dữ liệu `books.json` mà không bị lỗi bảo mật CORS của trình duyệt.

## 10.3. Chạy chương trình
Mở thư mục book-spa-nguyen-van-nghia bằng phần mềm Visual Studio Code
Mở file: index.html
Sau đó:
1. Nhấn chuột phải vào `index.html`.
2. Chọn **Open with Live Server**.
3. Trình duyệt sẽ mở ứng dụng.
4. Thực hiện kiểm tra các chức năng.

---
# 11. Hướng dẫn sử dụng
## 11.1. Xem danh sách sách
Khi mở ứng dụng, danh sách sách được hiển thị trên giao diện chính.

Người dùng có thể xem:
* Hình ảnh sách.
* Tên sách.
* Tác giả.
* Thể loại.
* Một số thông tin cơ bản khác.

## 11.2. Tìm kiếm sách

Người dùng nhập từ khóa vào ô tìm kiếm.
Hệ thống thực hiện tìm kiếm theo:
* Tên sách.
* Tác giả.

Sau đó danh sách được cập nhật theo kết quả tìm kiếm.

## 11.3. Lọc sách
Người dùng lựa chọn thể loại sách.
Hệ thống chỉ hiển thị các sách phù hợp với thể loại đã chọn.

## 11.4. Sắp xếp
Người dùng lựa chọn tiêu chí sắp xếp.
JavaScript xử lý dữ liệu và cập nhật lại danh sách sách.

## 11.5. Xem chi tiết
Người dùng chọn một đầu sách.
Hệ thống tìm thông tin tương ứng và hiển thị nội dung chi tiết.

---

# 12. Yêu cầu phi chức năng
Ứng dụng hướng đến các yêu cầu:

### 12.1. Dễ sử dụng
Giao diện rõ ràng, các chức năng tìm kiếm, lọc và xem chi tiết dễ nhận biết.

### 12.2. Responsive
Giao diện có khả năng thích ứng với:

* Máy tính.
* Máy tính bảng.
* Điện thoại.

### 12.3. Hiệu năng
Ứng dụng sử dụng dữ liệu tĩnh nên có thời gian phản hồi nhanh đối với phạm vi dữ liệu của đồ án.

### 12.4. Khả năng bảo trì
Mã nguồn được phân chia thành các thành phần HTML, CSS và JavaScript để thuận tiện cho việc chỉnh sửa.

### 12.5. Khả năng mở rộng
Cấu trúc dữ liệu được thiết kế để có thể bổ sung thêm sách và phát triển thêm chức năng trong tương lai.

---

# 13. Kế hoạch thực hiện đồ án theo tuần
## Tuần 1: 16/08/2026 - 23/08/2026
### Phần 1: Nghiên cứu lý thuyết
#### 1.1. Tìm hiểu tổng quan về đề tài

Các nội dung thực hiện:
* Tìm hiểu yêu cầu của đề tài.
* Xác định mục tiêu của ứng dụng.
* Xác định phạm vi thực hiện.
* Tìm hiểu mô hình Web đơn trang.
* Xác định các chức năng chính của ứng dụng giới thiệu sách.
* Xác định dữ liệu cần thiết cho một đầu sách.

#### 1.2. Tìm hiểu các lý thuyết liên quan đến đề tài
Các nội dung nghiên cứu:
* HTML/HTML5.
* CSS/CSS3.
* JavaScript.
* DOM.
* Event.
* Array.
* Object.
* JSON.
* `map()`.
* `filter()`.
* `find()`.
* `sort()`.
* Tìm kiếm.
* Lọc dữ liệu.
* Responsive Web Design.

### Kết quả dự kiến của Tuần 1
* Hiểu yêu cầu của đề tài.
* Xác định phạm vi ứng dụng.
* Xác định chức năng chính.
* Hoàn thành phần nghiên cứu lý thuyết ban đầu.
* Khởi tạo GitHub repository.
* Tạo README.md ban đầu.
* Tạo thư mục `progress-report`.

---

## Tuần 2: 24/08/2026 - 30/08/2026
### Phần 1: Nghiên cứu lý thuyết (tiếp)
#### 1.3. Chọn lọc các lý thuyết có thể ứng dụng vào đề tài

Lựa chọn các kiến thức phù hợp với ứng dụng:
* HTML/HTML5 để xây dựng cấu trúc.
* CSS/CSS3 để thiết kế giao diện.
* JavaScript để xử lý logic.
* DOM để cập nhật giao diện.
* Event để xử lý thao tác người dùng.
* Array/Object để tổ chức dữ liệu.
* `filter()` để tìm kiếm và lọc.
* `find()` để tìm thông tin chi tiết.
* `sort()` để sắp xếp.
* `map()` để xử lý dữ liệu.
* JSON để tổ chức dữ liệu nếu cần.

### Phần 2: Nghiên cứu chuyên sâu
#### 2.1. Xây dựng mô hình, sơ đồ, dữ liệu

Thực hiện:
* Xác định cấu trúc dữ liệu sách.
* Xác định các trường dữ liệu.
* Thiết kế luồng xử lý.
* Thiết kế bố cục giao diện.
* Xác định cách tổ chức mã nguồn.
* Chuẩn bị dữ liệu mẫu.

#### 2.2. Xây dựng chương trình
Bắt đầu xây dựng:
* File HTML.
* File CSS.
* File JavaScript.
* Dữ liệu sách.
* Giao diện danh sách sách.
* Chức năng tìm kiếm.
* Chức năng lọc.
* Chức năng sắp xếp.

#### 2.3. Kết luận
Đánh giá:
* Ưu điểm của chương trình.
* Nhược điểm của chương trình.
* Những kiến thức lý thuyết đã áp dụng.
* Kết quả bước đầu của việc áp dụng lý thuyết vào đề tài.

### Kết quả dự kiến của Tuần 2
* Hoàn thành thiết kế dữ liệu.
* Hoàn thành thiết kế giao diện cơ bản.
* Hoàn thành cấu trúc mã nguồn ban đầu.
* Bắt đầu xây dựng các chức năng chính.
* Cập nhật README.md.
* Thực hiện commit mã nguồn.
* Hoàn thành báo cáo tiến độ Tuần 2.

---

# Tuần 3: 31/08/2026 - 06/09/2026 - Nghiên cứu chuyên sâu

> **Lưu ý:** Trong kế hoạch được cung cấp, phần công việc của Tuần 3 được mô tả tiếp nối từ Phần 2 của Tuần 2.

### Phần 2: 
Tiếp tục xây dựng và hoàn thiện ứng dụng:
* Hoàn thiện giao diện.
* Hoàn thiện dữ liệu sách.
* Hoàn thiện chức năng hiển thị danh sách.
* Hoàn thiện chức năng tìm kiếm.
* Hoàn thiện chức năng lọc.
* Hoàn thiện chức năng sắp xếp.
* Xây dựng chức năng xem chi tiết.
* Xử lý các sự kiện trên giao diện.
* Kiểm tra hoạt động của từng chức năng.

### Kết quả dự kiến
* Ứng dụng có thể chạy được.
* Các chức năng chính bắt đầu hoạt động.
* Mã nguồn được cập nhật lên GitHub.
* README.md được cập nhật theo tiến độ thực tế.
* Báo cáo tiến độ Tuần 3 được cập nhật.

---
# Tuần 4: 07/09/2026 - 13/09/2026 - Nghiên cứu chuyên sâu (tiếp)
Tiếp tục hoàn thiện chương trình:
* Hoàn thiện các chức năng còn thiếu.
* Kiểm tra chức năng tìm kiếm.
* Kiểm tra chức năng lọc.
* Kiểm tra chức năng sắp xếp.
* Kiểm tra chức năng xem chi tiết.
* Kiểm tra giao diện Responsive.
* Sửa lỗi phát sinh.
* Tối ưu mã nguồn.
* Hoàn thiện dữ liệu mẫu.
* Cập nhật README.md.
* Thực hiện commit các thay đổi lên GitHub.

### Kết quả dự kiến
* Hoàn thành phần lớn chức năng của ứng dụng và có phiên bản tương đối hoàn chỉnh để chuyển sang giai đoạn viết báo cáo.

---
# Tuần 5: 14/09/2026 - 20/09/2026 - Viết báo cáo
Bắt đầu hoàn thiện báo cáo đồ án.
Các nội dung thực hiện:
* Hoàn thiện Chương 1: Tổng quan.
* Hoàn thiện Chương 2: Cơ sở lý thuyết.
* Hoàn thiện Chương 3: Phân tích, thiết kế và xây dựng ứng dụng.
* Chụp hình giao diện chương trình.
* Chụp hình kết quả thực hiện chức năng.
* Mô tả các chức năng chính.
* Bổ sung sơ đồ và bảng cần thiết.
* Cập nhật tài liệu tham khảo.
* Đối chiếu báo cáo với yêu cầu của giảng viên.
* Tiếp tục cập nhật README.md.

### Kết quả dự kiến
Hoàn thành bản báo cáo ban đầu và tiếp tục hoàn thiện chương trình nếu phát hiện lỗi trong quá trình viết báo cáo.

---
# Tuần 6: 21/09/2026 - 27/09/2026 - Viết báo cáo (tiếp)
Các nội dung thực hiện:
* Hoàn thiện Chương 4: Kết quả thực hiện và kiểm thử.
* Hoàn thiện Chương 5: Kết luận và hướng phát triển.
* Kiểm tra toàn bộ chức năng chương trình.
* Kiểm tra lại giao diện.
* Kiểm tra lỗi chính tả.
* Kiểm tra mục lục.
* Kiểm tra đánh số chương, mục.
* Kiểm tra hình ảnh và bảng biểu.
* Kiểm tra tài liệu tham khảo.
* Hoàn thiện README.md.
* Kiểm tra lịch sử commit trên GitHub.
* Kiểm tra thư mục `progress-report`.
* Chuẩn bị bản báo cáo cuối cùng.

### Kết quả dự kiến
Hoàn thành chương trình và bản báo cáo gần như hoàn chỉnh trước khi nộp.
---
# Tuần 7: 28/09/2026 - 04/10/2026 - Nộp báo cáo
Các công việc cuối cùng:
* Kiểm tra toàn bộ chương trình.
* Kiểm tra repository GitHub.
* Kiểm tra README.md.
* Kiểm tra thư mục `progress-report`.
* Kiểm tra lịch sử commit.
* Hoàn thiện báo cáo.
* Kiểm tra lại định dạng báo cáo.
* Hoàn thiện các nội dung còn thiếu.
* Nộp báo cáo theo yêu cầu.

### Kết quả
**Hoàn thành và nộp báo cáo đồ án.**


