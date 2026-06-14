function createOrderMessage(user, status = "pending", ...items) {

    /*
        user: tên khách hàng

        status:
        - mặc định là "pending"
        - chỉ dùng khi status = undefined
        - nếu là null thì vẫn giữ null

        ...items:
        - gom tất cả sản phẩm thành mảng
    */

    // có sản phẩm
    if (items.length > 0) {
        return `Khách hàng ${user} có đơn hàng ${status} gồm các món: ${items.join(", ")}`;
    }

    // không có sản phẩm
    return `Khách hàng ${user} có đơn hàng ${status} nhưng giỏ hàng trống.`;
}


// Test
console.log(createOrderMessage("Tuấn", undefined, "Laptop", "Chuột"));
console.log(createOrderMessage("Lan", "completed"));
console.log(createOrderMessage("Tuấn", null, "Bàn phím cơ"));