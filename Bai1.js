/*
    for (var i= 0; i < 3; i++) {
        setTimeout(()=> console.log(i),100);
    }
*/

/*
    Nhận định “Đoạn code này sẽ in ra lần lượt các số 0, 1, 2” là sai.

    Nguyên nhân cốt lõi:
        Biến i được khai báo bằng var, nên nó có scope toàn hàm (function scope), không phải block scope.

        Khi vòng lặp kết thúc, giá trị cuối cùng của i là 3.

        Các hàm callback trong setTimeout chỉ được thực thi sau khi vòng lặp đã chạy xong, nên tất cả đều truy cập cùng một biến i với giá trị cuối cùng là 3.

    Kết quả: chương trình sẽ in ra 3, 3, 3 thay vì 0, 1, 2.
*/

// Cách viết lại bằng ES6:

for (let i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 100);
}