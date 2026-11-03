/* =========================================================
   LAYOUT.JS - TẠO HEADER VÀ FOOTER DÙNG CHUNG
   Người phụ trách: THÀNH VIÊN 1

   Ý TƯỞNG:
   Thay vì copy header/footer vào từng file HTML (5 trang = 5 bản copy),
   ta viết HTML 1 lần trong file này rồi dùng JavaScript "chèn" vào trang.
   -> Sửa 1 chỗ, tất cả các trang đều được cập nhật.

   CÁCH DÙNG trong file HTML:
     <div id="site-header"></div>          chỗ đặt header
     <div id="site-footer"></div>          chỗ đặt footer đầy đủ
     <div id="site-footer-simple"></div>   chỗ đặt footer rút gọn
     <script src="js/layout.js"></script>  đặt ở cuối thẻ <body>

   Để tô đậm menu của trang đang mở, thêm data-page vào thẻ body:
     <body data-page="dat-kham">
   ========================================================= */


/* ---------- 1. HTML CỦA HEADER ----------
   Dấu ` (backtick, phím cạnh số 1) cho phép viết chuỗi nhiều dòng */
const headerHTML = `
  <div class="topbar">
    <div class="container">
      <span class="topbar-welcome">Chào mừng bạn đến với HomeCare – chăm sóc sức khỏe tại nhà</span>
      <a href="dang-nhap.html" class="topbar-account">
        <i class="fa-regular fa-user"></i> Tài khoản
      </a>
    </div>
  </div>

  <header class="header">
    <div class="container">
      <!-- Logo -->
      <a href="index.html" class="logo">
        <span class="logo-icon"><i class="fa-solid fa-house-medical"></i></span>
        HomeCare
      </a>

      <!-- Hotline -->
      <div class="hotline">
        <span class="hotline-icon"><i class="fa-solid fa-headset"></i></span>
        <div>
          <small>Tư vấn/Đặt lịch</small>
          <strong>1900 1234</strong>
        </div>
      </div>

      <!-- Menu -->
      <nav class="nav" id="nav">
        <ul class="nav-list">
          <li class="nav-item">
            <a href="dat-kham.html" class="nav-link" data-page="dat-kham">
              Dịch vụ <i class="fa-solid fa-chevron-down"></i>
            </a>
            <div class="dropdown">
              <a href="dat-kham.html">Đặt khám tại nhà</a>
              <a href="#">Gọi video với bác sĩ</a>
              <a href="#">Đặt lịch xét nghiệm</a>
              <a href="#">Gói chăm sóc định kỳ</a>
            </div>
          </li>
          <li class="nav-item">
            <a href="dat-kham.html" class="nav-link">Bác sĩ</a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">Gói chăm sóc</a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">Tin tức <i class="fa-solid fa-chevron-down"></i></a>
            <div class="dropdown">
              <a href="#">Tin sức khỏe</a>
              <a href="#">Tin HomeCare</a>
            </div>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">Hướng dẫn <i class="fa-solid fa-chevron-down"></i></a>
            <div class="dropdown">
              <a href="#">Hướng dẫn đặt lịch</a>
              <a href="#">Câu hỏi thường gặp</a>
            </div>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">Liên hệ hợp tác <i class="fa-solid fa-chevron-down"></i></a>
            <div class="dropdown">
              <a href="dang-ky-bac-si.html">Đăng ký làm bác sĩ</a>
              <a href="#">Hợp tác bệnh viện</a>
            </div>
          </li>
        </ul>
      </nav>

      <!-- Nút đặt lịch -->
      <a href="dat-kham.html" class="btn btn-primary header-booking">
        <i class="fa-regular fa-calendar"></i> Đặt lịch khám
      </a>

      <!-- Nút ☰ (chỉ hiện trên điện thoại) -->
      <button class="menu-toggle" id="menu-toggle" aria-label="Mở menu">
        <i class="fa-solid fa-bars"></i>
      </button>
    </div>
  </header>
`;


/* ---------- 2. HTML CỦA FOOTER ĐẦY ĐỦ ---------- */
const footerHTML = `
  <footer class="footer">
    <div class="container footer-grid">
      <div>
        <a href="index.html" class="logo">
          <span class="logo-icon"><i class="fa-solid fa-house-medical"></i></span>
          HomeCare
        </a>
        <p class="footer-desc">
          Nền tảng đặt lịch chăm sóc sức khỏe tại nhà – kết nối gia đình bạn
          với đội ngũ bác sĩ và điều dưỡng chuyên nghiệp.
        </p>
      </div>

      <div>
        <h4>Dịch vụ</h4>
        <ul class="footer-links">
          <li><a href="dat-kham.html">Khám tại nhà</a></li>
          <li><a href="#">Gọi video với bác sĩ</a></li>
          <li><a href="#">Xét nghiệm tại nhà</a></li>
          <li><a href="#">Gói chăm sóc định kỳ</a></li>
        </ul>
      </div>

      <div>
        <h4>Hỗ trợ</h4>
        <ul class="footer-links">
          <li><a href="#">Hướng dẫn đặt lịch</a></li>
          <li><a href="#">Câu hỏi thường gặp</a></li>
          <li><a href="#">Chính sách hoàn tiền</a></li>
          <li><a href="#">Điều khoản sử dụng</a></li>
        </ul>
      </div>

      <div>
        <h4>Liên hệ</h4>
        <ul class="footer-contact">
          <li><strong>Hotline:</strong> 1900 1234</li>
          <li><strong>Email:</strong> support@homecare.vn</li>
          <li><strong>Địa chỉ:</strong> Khu phố 6, P. Linh Trung, TP. Thủ Đức</li>
        </ul>
      </div>
    </div>

    <div class="container footer-bottom">
      © 2026 HomeCare – Đồ án IE106, Nhóm 9, Trường ĐH Công nghệ Thông tin – ĐHQG TP.HCM
    </div>
  </footer>

  <!-- Nút nổi góc phải màn hình -->
  <div class="float-buttons">
    <a href="tel:19001234" class="float-phone" title="Gọi 1900 1234">
      <i class="fa-solid fa-phone"></i>
    </a>
    <a href="dat-kham.html" class="btn btn-primary float-booking">
      <i class="fa-solid fa-plus"></i> Đặt lịch khám
    </a>
  </div>
`;


/* ---------- 3. HTML CỦA FOOTER RÚT GỌN (trang đăng ký) ---------- */
const footerSimpleHTML = `
  <footer class="footer-simple">
    <div class="container">
      <div class="footer-simple-brand">
        <strong>HomeCare</strong>
        <span>© 2026 HomeCare Medical. All rights reserved.</span>
      </div>
      <div class="footer-simple-links">
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Service</a>
        <a href="#">Contact Support</a>
      </div>
    </div>
  </footer>
`;


/* ---------- 4. HÀM CHÈN HTML VÀO TRANG ----------
   Tìm thẻ có id tương ứng. Nếu trang có thẻ đó thì thay nó bằng HTML ở trên.
   outerHTML = thay CẢ thẻ <div> giữ chỗ (khác innerHTML chỉ thay nội dung bên trong) */
function insertLayout(placeholderId, html) {
  const placeholder = document.getElementById(placeholderId);

  if (placeholder !== null) {
    placeholder.outerHTML = html;
  }
}

insertLayout("site-header", headerHTML);
insertLayout("site-footer", footerHTML);
insertLayout("site-footer-simple", footerSimpleHTML);


/* LƯU Ý: Phần 5 và 6 được viết bên trong hàm (function).
   Lý do: biến khai báo ngoài hàm là biến "toàn cục", dùng chung với
   file JS của trang (home.js, dat-kham.js...). Nếu 2 file cùng đặt tên
   biến giống nhau sẽ bị lỗi. Để trong hàm thì biến chỉ sống trong hàm đó. */


/* ---------- 5. TÔ ĐẬM MENU CỦA TRANG ĐANG MỞ ----------
   Đọc data-page của thẻ <body>, so với data-page của từng link.
   Trùng nhau thì thêm class "active" để gạch chân link đó. */
function highlightCurrentMenu() {
  const pageName = document.body.dataset.page;
  const navLinks = document.querySelectorAll(".nav-link");

  for (const link of navLinks) {
    if (link.dataset.page === pageName) {
      link.classList.add("active");
    }
  }
}


/* ---------- 6. NÚT ☰ MỞ / ĐÓNG MENU TRÊN ĐIỆN THOẠI ----------
   classList.toggle("open"): chưa có class "open" thì thêm, có rồi thì xóa */
function setupMenuToggle() {
  const menuToggle = document.getElementById("menu-toggle");
  const nav = document.getElementById("nav");

  // Trang không có header (trang đăng nhập) thì không làm gì
  if (menuToggle === null) {
    return;
  }

  menuToggle.addEventListener("click", function () {
    nav.classList.toggle("open");
  });
}

highlightCurrentMenu();
setupMenuToggle();
