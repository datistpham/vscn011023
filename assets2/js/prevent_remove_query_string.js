// Lắng nghe sự kiện beforeunload trước khi trang được thoát
window.addEventListener('beforeunload', function(event) {
    // Kiểm tra xem query string hiện tại có tồn tại hay không
    var currentQueryString = window.location.search;
    
    if (!currentQueryString || currentQueryString === '?') {
      // Nếu query string không tồn tại hoặc chỉ là dấu "?" thì thực hiện xử lý ở đây
      // Ví dụ: Hiển thị một thông báo cảnh báo
      event.preventDefault();
      event.returnValue = ''; // Cung cấp một thông báo tùy chỉnh (chưa được hỗ trợ bởi tất cả các trình duyệt)
    }
  });
  
  // Thêm mã JavaScript của bạn ở đây