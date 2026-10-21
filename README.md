# BÀI TẬP LẬP TRÌNH WEB (LTW) - BÀI 9: FUNCTION COMPONENT & HOOKS

## Quản Lý Sinh Viên (React Hooks & ThemeContext)

Ứng dụng quản lý sinh viên được xây dựng bằng Function Component, React Hooks và Context API.

---

## Cấu Trúc Thư Mục

```
AAAAAAA/
├── index.html                   # File chạy trực tiếp ứng dụng trên trình duyệt
├── App.jsx                      # Mã nguồn Function Component & Hooks
├── style.css                    # Giao diện CSS tối giản (Sáng / Tối)
├── hooks/
│   └── useFetch.js              # Custom Hook useFetch lấy dữ liệu MockAPI
├── context/
│   └── ThemeContext.js          # ThemeContext quản lý giao diện Sáng / Tối
└── README.md                    # Tài liệu hướng dẫn
```

---

## Cách Chạy Ứng Dụng

Nhấp đúp chuột vào file index.html để mở trên trình duyệt (Chrome, Edge, Firefox, Cốc Cốc,...).  
Ứng dụng sử dụng React 18 & Babel Standalone qua CDN, chạy độc lập không cần cài đặt.

---

## Các Tính Năng Đã Thực Hiện

1. Function Component & Hooks:
   - Quản lý state bằng useState, tối ưu tìm kiếm với useMemo, logic hàm với useCallback.
   - Quản lý danh sách sinh viên: Thêm mới, Sửa thông tin.

2. Dữ Liệu Lấy Từ MockAPI Qua useFetch:
   - Custom Hook useFetch(url) quản lý đầy đủ trạng thái data, loading, error, refetch, setData.
   - Có thanh kết nối URL MockAPI (ví dụ: mockapi.io) và tự động dùng dữ liệu dự phòng nếu offline.

3. ThemeContext Sáng / Tối:
   - ThemeContext & ThemeProvider chuyển đổi chế độ Sáng (theme-light) và Tối (theme-dark).
   - Nút chuyển đổi trên header, lưu trạng thái theme vào LocalStorage.

4. Tìm Kiếm Theo Tên:
   - Ô input tìm kiếm lọc danh sách sinh viên tức thì theo từ khóa tên (không phân biệt hoa/thường).

5. Validate Điểm GPA (0 đến 4):
   - Kiểm tra định dạng số thực.
   - Bắt buộc giá trị nằm trong khoảng từ 0.0 đến 4.0, báo lỗi cụ thể khi nhập sai.

6. Xóa Có Hỏi Xác Nhận (Confirm Modal):
   - Khi bấm Xóa sẽ hiển thị hộp thoại Modal hỏi xác nhận tên và mã sinh viên trước khi xóa.
