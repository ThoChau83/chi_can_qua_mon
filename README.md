# HomeCare – Website đặt lịch chăm sóc sức khỏe tại nhà

Đồ án môn Thiết kế Web. Viết bằng **HTML, CSS, JavaScript thuần**, không dùng framework.

---

## 1. Cách chạy

- **Cách 1:** nhấp đúp file `index.html`, trang sẽ mở bằng Chrome/Edge.
- **Cách 2 (nên dùng):** cài extension **Live Server** trong VS Code, chuột phải `index.html` rồi chọn **Open with Live Server**. Mỗi lần lưu file, trang tự tải lại.

> Máy cần có mạng để tải font chữ (Google Fonts) và icon (Font Awesome).

---

## 2. Cấu trúc thư mục

```
homecare/
├── index.html                 Trang chủ
├── dang-nhap.html             Đăng nhập
├── dang-ky-khach-hang.html    Đăng ký khách hàng
├── dang-ky-bac-si.html        Đăng ký bác sĩ
├── dat-kham.html              Đặt khám theo bác sĩ
├── css/
│   ├── base.css               Màu, reset, nút bấm (dùng chung)
│   ├── layout.css             Header, footer (dùng chung)
│   ├── home.css
│   ├── dang-nhap.css
│   ├── dang-ky.css
│   └── dat-kham.css
├── js/
│   ├── layout.js              Chèn header/footer vào các trang (dùng chung)
│   ├── home.js
│   ├── dang-nhap.js
│   ├── dang-ky.js
│   └── dat-kham.js
└── images/
    ├── hero-bac-si.png
    └── doi-tac/               Logo đối tác
```

---

## 3. Phân công

Mỗi người **chỉ sửa file của mình**, vì vậy khi commit sẽ không bao giờ bị conflict.

| Thành viên | Phần | File phụ trách | Kiến thức chính (để thuyết trình) |
|---|---|---|---|
| **TV1** | Phần chung | `README.md`, `css/base.css`, `css/layout.css`, `js/layout.js` | Biến CSS `:root`, reset CSS, header `sticky`, menu con khi rê chuột, `@media`; JS chèn HTML bằng `outerHTML`, `classList.toggle` |
| **TV2** | Trang chủ | `index.html`, `css/home.css`, `js/home.js`, thư mục `images/` | Flexbox, Grid, margin âm, hiệu ứng `hover`; JS bắt sự kiện `submit`, `preventDefault`, chuyển trang kèm tham số `?q=` |
| **TV3** | Đăng nhập | `dang-nhap.html`, `css/dang-nhap.css`, `js/dang-nhap.js` | Bố cục 2 cột, `::before`/`::after`, `:focus-within`; JS chọn vai trò, hiện/ẩn mật khẩu, kiểm tra form |
| **TV4** | Đăng ký (2 trang) | `dang-ky-khach-hang.html`, `dang-ky-bac-si.html`, `css/dang-ky.css`, `js/dang-ky.js` | Form 2 cột bằng Grid, `:has()`; JS kiểm tra email/SĐT bằng regex, sự kiện `blur`/`change`, kéo thả file |
| **TV5** | Đặt khám | `dat-kham.html`, `css/dat-kham.css`, `js/dat-kham.js` | Grid + cột `sticky`; JS mảng object, template string, tìm kiếm không dấu, sắp xếp, phân trang, `URLSearchParams` |

Đầu mỗi file đều có dòng `Người phụ trách: THÀNH VIÊN X`.

---

## 4. Cách commit lên GitHub

### Bước 0: mỗi người cài tên cho Git (chỉ làm 1 lần)

Để GitHub ghi nhận đúng ai commit, mỗi người chạy trên máy mình:

```bash
git config --global user.name "Ho Ten Cua Ban"
git config --global user.email "email-dang-ky-github@gmail.com"
```

### Bước 1: TV1 tạo repo và commit TRƯỚC

Các trang khác đều dùng CSS/JS chung của TV1, nên TV1 phải đưa phần chung lên trước.

1. Lên GitHub, tạo repo mới (ví dụ `homecare`).
2. Vào **Settings → Collaborators** để mời 4 bạn còn lại.
3. Mở terminal trong thư mục `homecare` rồi chạy:

```bash
git init
git add README.md css/base.css css/layout.css js/layout.js
git commit -m "Them phan chung: mau sac, nut bam, header, footer"
git branch -M main
git remote add origin https://github.com/TEN-TAI-KHOAN/homecare.git
git push -u origin main
```

### Bước 2: TV2 → TV5 lần lượt commit phần của mình

```bash
# 1. Tải repo về máy
git clone https://github.com/TEN-TAI-KHOAN/homecare.git
cd homecare

# 2. Chép các file mình phụ trách vào đúng thư mục (xem bảng phân công)

# 3. Commit (ví dụ của TV2)
git add index.html css/home.css js/home.js images/
git commit -m "Them trang chu"

# 4. Lấy code mới nhất của các bạn khác về, rồi đẩy lên
git pull --rebase
git push
```

Lệnh `git add` của từng người:

| TV | Lệnh |
|---|---|
| TV2 | `git add index.html css/home.css js/home.js images/` |
| TV3 | `git add dang-nhap.html css/dang-nhap.css js/dang-nhap.js` |
| TV4 | `git add dang-ky-khach-hang.html dang-ky-bac-si.html css/dang-ky.css js/dang-ky.js` |
| TV5 | `git add dat-kham.html css/dat-kham.css js/dat-kham.js` |

> Nên chia nhỏ commit thay vì commit 1 lần cho tất cả, ví dụ: commit HTML trước, rồi CSS, rồi JS.
> Lịch sử commit sẽ đẹp hơn và giảng viên dễ thấy quá trình làm việc.

---

## 5. Quy tắc làm việc nhóm

1. **Chỉ sửa file của mình.** Muốn sửa file của bạn khác (ví dụ đổi màu trong `base.css`) thì nhắn người phụ trách.
2. **Không tự gõ mã màu mới.** Dùng biến có sẵn: `color: var(--primary);`
3. **Chạy `git pull` trước khi bắt đầu làm** mỗi ngày.
4. **Commit message ghi rõ đã làm gì**, ví dụ: `"Them kiem tra email cho form dang ky"`.
5. **Tên biến JS không được trùng** với tên trong `layout.js` (`headerHTML`, `footerHTML`, `footerSimpleHTML`, `insertLayout`...), vì các file JS dùng chung một phạm vi toàn cục.

---

## 6. Ghi chú

- **Header và footer** không viết trong từng file HTML. Mỗi trang chỉ có `<div id="site-header"></div>`, file `js/layout.js` sẽ tự chèn HTML vào. Muốn sửa menu thì sửa 1 chỗ trong `layout.js`.
- **Ảnh** trong `images/` được cắt từ ảnh xuất của Figma nên hơi mờ. Có thể xuất lại từ Figma (chọn ảnh → Export → PNG 2x) rồi ghi đè **đúng tên file cũ**.
- **Chưa có backend (máy chủ):** đăng nhập và đăng ký chỉ kiểm tra dữ liệu rồi hiện thông báo. Danh sách bác sĩ là dữ liệu mẫu nằm trong mảng `doctors` ở `js/dat-kham.js`.
