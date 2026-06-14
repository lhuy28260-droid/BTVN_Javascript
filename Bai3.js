/*
    Nhận định “Spread Operator (...) khi sao chép object sẽ luôn tạo ra một bản sao độc lập hoàn toàn (deep copy)” là sai.

    Vì
        Spread Operator (...) chỉ tạo shallow copy (bản sao nông).

        Với các thuộc tính nguyên thủy (string, number, boolean), giá trị được copy độc lập.

        Nhưng với các thuộc tính tham chiếu (object, array), Spread chỉ copy tham chiếu, không tạo bản sao sâu. Vì vậy, các object hoặc mảng lồng nhau vẫn bị liên kết với bản gốc.
*/

const state = { 
  user: 'Admin', 
  privileges: ['read', 'write'] 
};

const newState = {
  ...state, // Để copy toàn bộ object.
  privileges: [...state.privileges, 'delete'] // Để copy mảng privileges, sau đó thêm 'delete'.
};
// Nhờ vậy, newState có mảng mới hoàn toàn, không ảnh hưởng đến state ban đầu.

console.log(newState); 

console.log(state); 