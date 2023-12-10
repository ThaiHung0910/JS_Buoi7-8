// Add number into arr
var arr = [];
document.querySelector(".addBtn").onclick = function () {
  var number = document.querySelector('input[name="number1"]').value * 1;
  arr.push(number);
  document.querySelector(".listResult").innerHTML = arr;
};

// Tính tổng các số dương
/*
Đầu vào: mảng có các số được người dùng nhập vào

Cách xử lý: 
+ Tạo hàm
+ Tạo một biến để lưu giá trị tổng của các số dương
+ Dùng vòng lặp kết hợp cấu trúc điều kiện thỏa mãn theo đề bài để lấy các phần tử trong mảng là số dương 
+ Cộng giá trị thỏa mãn điều kiện vào biến tổng đã tạo
+ Hàm trả về giá trị biến đã lưu

Đầu ra: tổng các số dương
*/
function sumInt(i, arr) {
  var result = 0;
  for (i; i < arr.length; i++) {
    if (arr[i] > 0) {
      result += arr[i];
    }
  }
  return result;
}

document.querySelector(".sumBtn").addEventListener("click", function () {
  var result = sumInt(0, arr);
  document.querySelector(
    ".sumResult"
  ).innerHTML = `Tổng các số dương là ${result}`;
});

// Đếm các số dương trong mảng
/*
Đầu vào: mảng có các số được người dùng nhập vào

Cách xử lý: 
+ Tạo hàm 
+ Tạo một biến để lưu giá trị đếm của các số dương 
+ Dùng vòng lặp kết hợp cấu trúc điều kiện thỏa mãn theo đề bài để lấy các phần tử trong mảng là số dương 
+ Với mỗi số dương thỏa mãn điều kiện, tăng biến đếm đã tạo lên 1
+ Hàm trả về giá trị biến đã lưu

Đầu ra: các số dương có trong mảng
*/
function countInt(i, arr) {
  var result = 0;
  for (i; i < arr.length; i++) {
    if (arr[i] > 0) {
      result++;
    }
  }
  return result;
}

document.querySelector(".countBtn").addEventListener("click", function () {
  var result = countInt(0, arr);
  document.querySelector(
    ".countResult"
  ).innerHTML = `Các số dương có trong mảng là ${result}`;
});

// Tìm số nhỏ nhất trong mảng
/*
Đầu vào: mảng có các số được người dùng nhập vào

Cách xử lý: 
+ Tạo hàm
+ Tạo một biến để lưu giá trị số nhỏ nhất là phần tử đầu tiên của mảng 
+ Dùng vòng lặp kết hợp cấu trúc điều kiện thỏa mãn theo đề bài để lấy phần tử trong mảng nhỏ hơn biến đã tạo
+ Gán giá trị thỏa mãn điều kiện vào biến đã tạo
+ Hàm trả về giá trị biến đã lưu

Đầu ra: số nhỏ nhất có trong mảng
*/

function minInt(i, arr) {
  var result = arr[0];
  for (i; i < arr.length; i++) {
    if (result > arr[i]) {
      result = arr[i];
    }
  }
  return result;
}

document.querySelector(".minBtn").addEventListener("click", function () {
  var result = minInt(0, arr);
  arr.length > 0
    ? (document.querySelector(
        ".minResult"
      ).innerHTML = `Số nhỏ nhất có trong mảng là ${result}`)
    : alert("Bạn không nhập số! Vui lòng thử lại");
});

// Tìm số dương nhỏ nhất trong mảng
/*
Đầu vào: mảng có các số được người dùng nhập vào

Cách xử lý:
+ Tạo hàm
+ Tạo một biến là một mảng rỗng để lưu giá trị các số dương có trong mảng
+ Dùng vòng lặp kết hợp cấu trúc điều kiện thỏa mãn theo đề bài để lấy phần tử trong mảng là số dương
+ Dùng phương thức push để đẩy các giá trị thỏa mãn vào biến mảng đã tạo
+ Tạo một biến để lưu giá trị số nhỏ nhất là phần tử đầu tiên của mảng 
+ Nếu biến mảng đã tạo có phần tử thì dùng vòng lặp kết hợp cấu trúc điều kiện thỏa mãn theo đề bài để lấy phần tử trong mảng là số nhỏ hơn biến số nhỏ nhất đã tạo và gán giá trị này cho biến nhỏ nhất. Nếu biến mảng không phần tử thì trả về false
+ Hàm trả về giá trị biến đã lưu

Đầu ra: số dương nhỏ nhất có trong mảng
*/
function minPosInt(i, arr) {
  var newArr = [];
  for (i; i < arr.length; i++) {
    if (arr[i] > 0) {
      newArr.push(arr[i]);
    }
  }
  var minInt = newArr[0];
  if (newArr.length > 0) {
    for (var j = 0; j < newArr.length; j++) {
      if (minInt > newArr[j]) {
        minInt = Math.min(minInt, newArr[j]);
      }
    }
  } else {
    return false;
  }
  return minInt;
}

document.querySelector(".minPosBtn").addEventListener("click", function () {
  var result = minPosInt(0, arr);
  arr.length > 0
    ? (document.querySelector(".minPosResult").innerHTML = result
        ? `Số dương nhỏ nhất có trong mảng là ${result}`
        : "Không có số dương trong mảng")
    : alert("Bạn không nhập số! Vui lòng thử lại");
});

// Tìm số chẵn cuối cùng trong mảng
/*
Đầu vào: mảng có các số được người dùng nhập vào

Cách xử lý: 
+ Tạo hàm
+ Tạo một biến để lưu giá trị số chẵn của mảng 
+ Dùng vòng lặp kết hợp cấu trúc điều kiện thỏa mãn theo đề bài để lấy phần tử trong mảng là số chẵn
+ Gán giá trị thỏa mãn điều kiện vào biến đã tạo
+ Hàm trả về giá trị biến đã lưu. Nếu không có giá trị nào trong mảng thỏa mãn điều kiện thì hàm trả về -1

Đầu ra: số chẵn cuối cùng trong mảng, -1 nếu không tìm thấy số chẵn
*/
function evenInt(i, arr) {
  var result = -1;
  for (i; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      result = arr[i];
    }
  }
  return result;
}

document.querySelector(".evenBtn").addEventListener("click", function () {
  var result = evenInt(0, arr);
  document.querySelector(".evenResult").innerHTML =
    result != -1 ? `Số chẵn cuối cùng có trong mảng là ${result}` : result;
});

// Đổi chỗ
/*
Đầu vào: mảng có các số được người dùng nhập vào, vị trí của 2 giá trị cần đổi

Cách xử lý: 
+ Tạo hàm
+ Tạo 1 biến tạm, gán giá trị của phần tử ở vị trí 1 vào biến tạm
+ Gán giá trị của phần tử ở vị trí 2 vào vị trí 1
+ Gán giá trị biến tạm vào vị trí 2
+ Hàm trả về mảng sau khi thay đổi vị trí 2 phần tử

Đầu ra: Mảng sau khi đổi vị trí
*/

function switchInt(arr, position1, position2) {
  if (arr.length > 0) {
    if (
      position1 >= 0 &&
      position2 >= 0 &&
      position1 < arr.length &&
      position2 < arr.length
    ) {
      var point = arr[position1];
      arr[position1] = arr[position2];
      arr[position2] = point;
    } else {
      return alert("Vị trí nhập không hợp lệ ! Vui lòng thử lại");
    }
  } else {
    return alert("Bạn không nhập số! Vui lòng thử lại");
  }
  return arr;
}

document.querySelector(".switchBtn").addEventListener("click", function () {
  var position1 = Math.floor(
    document.querySelector('input[name="position1"]').value * 1
  );
  var position2 = Math.floor(
    document.querySelector('input[name="position2"]').value * 1
  );
  var result = switchInt(arr, position1, position2);

  document.querySelector(".switchResult").innerHTML = result
    ? `Mảng sau khi hoán đổi vị trí: ${result}`
    : "";
});

// Sắp xếp theo thứ tự tăng dần
/*
Đầu vào: mảng có các số được người dùng nhập vào

Cách xử lý: 
+ Tạo hàm 
+ Sử dụng phương thức sort để sắp xếp phần tử theo thứ tự tăng dần 
+ Hàm trả về mảng sau khi sắp xếp

Đầu ra: Mảng sau khi sắp xếp
*/

// function sortInt(arr) {
//   for (var j = arr.length - 1; j > 0; j--) {
//     for (var i = 0; i < j; i++) {
//       if (arr[i] > arr[i + 1]) {
//         var point = arr[i];
//         arr[i] = arr[i + 1];
//         arr[i + 1] = point;
//       }
//     }
//   }
//   return arr;
// }

function sortInt(arr) {
  return arr.sort(function (a, b) {
    return a - b;
  });
}

document.querySelector(".sortBtn").addEventListener("click", function () {
  var result = sortInt(arr);
  arr.length > 0
    ? (document.querySelector(
        ".sortResult"
      ).innerHTML = `Mảng sau khi sắp xếp: ${result}`)
    : alert("Bạn không nhập số! Vui lòng thử lại");
});

// Tìm số nguyên tố đầu tiên trong mảng
/*
Đầu vào: mảng có các số được người dùng nhập vào

Cách xử lý: 
+ Tạo hàm kiểm tra một số có phải số nguyên tố
+ Tạo hàm và dùng vòng lặp kết hợp cấu trúc điều kiện để kiểm tra xem các phần tử trong mảng phần tử nào là số nguyên tố
+ Hàm trả về phần tử số nguyên tố đầu tiên tìm thấy, nếu không tìm thấy hàm trả về -1

Đầu ra: Số nguyên tố đầu tiên trong mảng, nếu không tìm thấy thì trả về -1
*/
function is_prime(n) {
  for (var i = 2; i <= Math.sqrt(n); i++) {
    if (n % i == 0) {
      return false;
    }
  }
  return true;
}

function primeInt(i, arr) {
  for (i; i < arr.length; i++) {
    if (arr[i] > 1) {
      if (is_prime(arr[i])) {
        return arr[i];
      }
    }
  }
  return -1;
}

document.querySelector(".primeBtn").addEventListener("click", function () {
  var result = primeInt(0, arr);
  document.querySelector(".primeResult").innerHTML =
    result != -1 ? `Số nguyên tố đầu tiên của mảng là: ${result}` : result;
});

// Nhập thêm 1 mảng số thực, tìm xem trong mảng có bao nhiêu số nguyên
/*
Đầu vào: mảng có các số được người dùng nhập vào

Cách xử lý: 
+ Tạo hàm 
+ Tạo biến đếm số nguyên trong mảng
+ Dùng vòng lặp kết hợp cấu trúc điều kiện để kiểm tra phần tử có thỏa yêu cầu đề bài là số nguyên
+ Với mỗi số nguyên thỏa mãn điều kiện, tăng biến đếm đã tạo lên 1
+ Hàm trả về giá trị biến đã lưu
 

Đầu ra: Số nguyên có trong mảng
*/
var arr2 = [];
document.querySelector(".addIntBtn").addEventListener("click", function () {
  var number = document.querySelector('input[name="number2"]').value * 1;
  arr2.push(number);
  document.querySelector(".addIntResult").innerHTML = arr2;
});

function countNumberInt(i, arr) {
  var count = 0;
  for (i; i < arr.length; i++) {
    if (Number.isInteger(arr[i])) {
      count++;
    }
  }
  return count;
}

document.querySelector(".countIntBtn").addEventListener("click", function () {
  var result = countNumberInt(0, arr2);
  document.querySelector(
    ".countIntResult"
  ).innerHTML = `Số nguyên có trong mảng là ${result}`;
});

// So sánh số lượng số dương và số lượng số âm xem số nào nhiều hơn
/*
Đầu vào: mảng có các số được người dùng nhập vào

Cách xử lý: 
+ Tạo hàm 
+ Tạo biến lưu giá trị đếm số âm và giá trị đếm số dương
+ Dùng vòng lặp kết hợp cấu trúc điều kiện để kiểm tra phần tử có thỏa yêu cầu đề bài là số âm hoặc số dương
+ Với mỗi số thỏa mãn điều kiện, tăng biến đếm đã tạo lên 1
+ Tạo giá trị lưu kết quả so sánh biến đếm số âm và biến đếm số dương
+ Dùng cấu trúc điều kiện để so sánh biến đếm số âm và biến đếm số dương
+ Gán giá trị vào biến so sánh với kết quả so sánh tương ứng
+ Hàm trả về giá trị biến so sánh

Đầu ra: số lượng số dương so với số âm trong mảng
*/

function compareNumber(i, arr) {
  var positive = 0;
  var negative = 0;
  for (i; i < arr.length; i++) {
    if (arr[i] > 0) {
      positive++;
    } else if (arr[i] < 0) {
      negative++;
    }
  }
  var result;
  if (positive > negative) {
    result = `Số dương > số âm`;
  } else if (positive < negative) {
    result = `Số dương < số âm`;
  } else {
    result = `Số dương = số âm`;
  }
  return result;
}
document.querySelector(".compareBtn").addEventListener("click", function () {
  var result = compareNumber(0, arr);
  document.querySelector(".compareResult").innerHTML = result;
});
