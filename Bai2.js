/*
    const users = [
        { id: 1, role: 'admin', active: true },
        { id: 2, role: 'user', active: false },
        { id: 3, role: 'admin', active: true }
    ];
*/

/*
    Nhận định “Chỉ cần dùng duy nhất hàm .map() kết hợp với câu lệnh if là có thể trả về một mảng nguyên sạch chỉ chứa id của các user thỏa mãn điều kiện” là sai.

    Vì:
        .map() luôn trả về một mảng có cùng độ dài với mảng gốc.

        Nếu dùng if bên trong .map(), những phần tử không thỏa điều kiện sẽ trả về undefined hoặc giá trị rỗng, dẫn đến mảng kết quả không “sạch” (có phần tử không mong muốn).

        Để lấy ra đúng mảng id thỏa điều kiện, ta cần kết hợp .filter() (lọc trước) rồi .map() (lấy id).
*/

// Đoạn code tối ưu:

const ids = users
  .filter(user => user.role === 'admin' && user.active)
  .map(user => user.id);

console.log(ids); 