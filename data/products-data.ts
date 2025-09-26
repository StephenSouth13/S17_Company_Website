// products-data.ts
export const allProducts = [
  {
    id: 1,
    name: "Cơm khay dùng ngay",
    type: "com-khay",
    badges: ["do-an-thuan-thuc-vat"],
    description: "Cơm khay dùng ngay. Có 2 loại: cơm trắng & cơm gạo lứt",
    details: "Đổi trả hoàn tiền khi có dấu hiệu hư hỏng của sản phẩm. Đặt hàng giao ngay. Số lượng lớn hơn 10 khay, cần đặt trước để kiểm tra hàng tổn.",
    price: 45000,
    image: "/images/com-khay.jpg"
  },
  {
    id: 2,
    name: "Thực phẩm thuần thực vật",
    type: "thuc-pham-thuan-thuc-vat",
    badges: ["san-pham-lon"],
    description: "Các sản phẩm lon có thể dùng ngày",
    details: "Thời hạn sử dụng: 12 tháng từ ngày sản xuất. Đặt hàng giao ngay. Số lượng lớn hơn 10 lon, cần đặt trước để kiểm tra hàng tổn.",
    price: 30000,
    image: "/images/thuc-pham-chay.jpg"
  },
  {
    id: 3,
    name: "Trà trái cây",
    type: "tra-trai-cay",
    badges: ["tra-trai-cay-badge"],
    description: "Trà trái cây làm từ trái cây ngâm tự nhiên, không sử dụng syrup",
    details: "Đặt hàng giao ngay. Số lượng lớn hơn 10 ly đặt sớm để giao kịp thời",
    price: 35000,
    image: "/images/tra-trai-cay.jpg"
  },
  // Thêm các sản phẩm khác vào đây
];