// Add number into arr
var arr = [];
document.querySelector(".addBtn").onclick = function () {
  var number = document.querySelector('input[name="number1"]').value * 1;
  arr.push(number);
  document.querySelector(".listResult").innerHTML = arr;
};

// Tính tổng các số nguyên dương
/*
Đầu vào: mảng có các số được người dùng nhập vào

Cách xử lý: dùng vòng lặp qua các phần tử trong mảng, xét điều kiện thỏa mãn theo đề bài và tính tổng các số thỏa mãn điều kiện

Đầu ra: tổng các số nguyên dương
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
  ).innerHTML = `Tổng các số nguyên dương là ${result}`;
});

// Đếm các số nguyên dương trong mảng
/*
Đầu vào: mảng có các số được người dùng nhập vào

Cách xử lý: dùng vòng lặp qua các phần tử trong mảng, xét điều kiện thỏa mãn theo đề bài và đếm các số nguyên dương

Đầu ra: các số nguyên dương có trong mảng
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
  ).innerHTML = `Các số nguyên dương có trong mảng là ${result}`;
});

// Tìm số nhỏ nhất trong mảng
/*
Đầu vào: mảng có các số được người dùng nhập vào

Cách xử lý: dùng vòng lặp qua các phần tử trong mảng, xét điều kiện thỏa mãn theo đề bài và tìm ra số nhỏ nhất

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
  arr.length > 0 ? document.querySelector(
    ".minResult"
  ).innerHTML = `Số nhỏ nhất có trong mảng là ${result}` : alert("Bạn không nhập số! Vui lòng thử lại")
});

// Tìm số dương nhỏ nhất trong mảng
/*
Đầu vào: mảng có các số được người dùng nhập vào

Cách xử lý: dùng vòng lặp qua các phần tử trong mảng, xét điều kiện thỏa mãn theo đề bài và tìm ra số dương nhỏ nhất

Đầu ra: số dương nhỏ nhất có trong mảng
*/
function minPosInt(i, arr) {
  var minInt = arr[0];
  for(i; i < arr.length;i++) {
    if(arr[i] > 0) {
      minInt = Math.min(minInt, arr[i])
    }
  }
  if(minInt > 0) {
    return minInt
  } else {
    return 0
  }
}

document.querySelector(".minPosBtn").addEventListener("click", function () {
  var result = minPosInt(0, arr);
  arr.length > 0 ? (document.querySelector(
    ".minPosResult"
  ).innerHTML = result ? `Số dương nhỏ nhất có trong mảng là ${result}` : "Không có số dương trong mảng") : alert("Bạn không nhập số! Vui lòng thử lại")

});

// Tìm số chẵn cuối cùng trong mảng
/*
Đầu vào: mảng có các số được người dùng nhập vào

Cách xử lý: dùng vòng lặp qua các phần tử trong mảng, xét điều kiện thỏa mãn theo đề bài và tìm ra số chẵn cuối cùng

Đầu ra: số chẵn cuối cùng trong mảng, nếu không tìm thấy thì trả về -1
*/
function evenInt(i, arr) {
  var result = - 1
  for (i; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      result = arr[i];
    }
  }
  return result
}
document.querySelector(".evenBtn").addEventListener("click", function () {
  var result = evenInt(0, arr);
  document.querySelector(".evenResult").innerHTML =
    result != -1 ? `Số chẵn cuối cùng có trong mảng là ${result}` : result;
});

// Đổi chỗ
/*
Đầu vào: mảng có các số được người dùng nhập vào, vị trí của 2 giá trị cần đổi

Cách xử lý: dùng vòng lặp qua các phần tử trong mảng, xét điều kiện thỏa mãn theo đề bài và đổi vị trí của 2 giá trị

Đầu ra: Mảng sau khi đổi vị trí
*/

function switchInt(arr, position1, position2) {
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

Cách xử lý: dùng vòng lặp qua các phần tử trong mảng, xét điều kiện thỏa mãn theo đề bài và sắp xếp các số

Đầu ra: Mảng sau khi sắp xếp
*/
function sortInt(arr) {
  for (var j = arr.length - 1; j > 0; j--) {
    for (var i = 0; i < j; i++) {
      if (arr[i] > arr[i + 1]) {
        var point = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = point;
      }
    }
  }
  return arr;
}
document.querySelector(".sortBtn").addEventListener("click", function () {
  var result = sortInt(arr);
  document.querySelector(
    ".sortResult"
  ).innerHTML = `Mảng sau khi sắp xếp: ${result}`;
});


// Tìm số nguyên tố đầu tiên trong mảng
/*
Đầu vào: mảng có các số được người dùng nhập vào

Cách xử lý: dùng vòng lặp qua các phần tử trong mảng, xét điều kiện thỏa mãn theo đề bài và tìm số nguyên tố

Đầu ra: Số nguyên tố, nếu không tìm thấy thì trả về -1
*/
function is_prime(n) {
  for(var i = 2; i <= Math.sqrt(n); i++) {
		if(n % i == 0) {
			return false;
		}
	}
	return true;
}

function primeInt(i, arr) {
  for (i; i < arr.length; i++) {
    if(arr[i] > 1) {
      if(is_prime(arr[i])) {
        return arr[i]
      }
    }
  }
  return -1
}

document.querySelector(".primeBtn").addEventListener("click", function () {
  var result = primeInt(0, arr);
  document.querySelector(
    ".primeResult"
  ).innerHTML = result != -1 ? `Số nguyên tố đầu tiên của mảng là: ${result}` : result
});

// Nhập thêm 1 mảng số thực, tìm xem trong mảng có bao nhiêu số nguyên
/*
Đầu vào: mảng có các số được người dùng nhập vào

Cách xử lý: dùng vòng lặp qua các phần tử trong mảng, xét điều kiện thỏa mãn theo đề bài và tìm số nguyên 

Đầu ra: Số nguyên có trong mảng
*/
var arr2 = [];
document.querySelector(".addIntBtn").addEventListener("click", function () {
  var number = document.querySelector('input[name="number2"]').value * 1;
  arr2.push(number);
  document.querySelector(".addIntResult").innerHTML = arr2;
})

function countNumberInt(i, arr) {
  var count = 0;
  for(i; i < arr.length; i++) {
    if(Number.isInteger(arr[i])) {
      count++
    }
  }
  return count
}
document.querySelector(".countIntBtn").addEventListener("click", function () {
  var result = countNumberInt(0, arr2)
  document.querySelector(".countIntResult").innerHTML = `Số nguyên có trong mảng là ${result}`;
})

// So sánh số lượng số dương và số lượng số âm xem số nào nhiều hơn
/*
Đầu vào: mảng có các số được người dùng nhập vào

Cách xử lý: dùng vòng lặp qua các phần tử trong mảng, xét điều kiện thỏa mãn theo đề bài và so sánh số lượng số dương so với số âm

Đầu ra: số lượng số dương so với số âm trong mảng
*/

function compareNumber(i, arr) {
  var positive = 0;
  var negative = 0;
  for(i; i < arr.length; i++) {
    if(arr[i] > 0) {
      positive++
    } else if (arr[i] < 0) {
      negative++
    }
  }
  var result;
  if(positive > negative) {
    result = `Số dương > số âm`
  } else if (positive < negative) {
    result = `Số dương < số âm`
  } else {
    result = `Số dương = số âm`
  }
  return result
}
document.querySelector(".compareBtn").addEventListener("click", function () {
  var result = compareNumber(0, arr)
  document.querySelector(".compareResult").innerHTML = result;
})

