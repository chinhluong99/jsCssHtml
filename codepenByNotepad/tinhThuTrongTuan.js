//b1: Áp dụng công thức zeller để tính ra thứ
//b2: Gán các biến còn lại (ngày, tháng, năm) ra ngoài gộp chung với thứ
//b3: Tạo 1 function tính buổi sáng chiều tối theo giờ hiện tại
const testNu = so => {
  if (isNaN(parseFloat(so))) return false;
  else return true;
};
const century = c => {
  return Math.floor(c / 100);
};
const month = m => {
  if (m < 3) return m + 12;
  else return m;
};
const year = y => {
  return y % 100;
};
const zeller = (day, month, year) => {
  const q = day;
  const m = month;
  const K = year % 100;
  const J = 20; //mặc định thế kỉ 20
  const h = (q +
      Math.floor(13 * (m + 1) / 5) +
      K +
      Math.floor(K / 4) +
      Math.floor(J / 4) +
      5 * J + 6) % 7;
  return h;
};
const week = (d, m, y) => {
  if (testNu(d) && testNu(m) && testNu(y)) {
    //alert('chỗ này');
    d = parseInt(d);
    m = parseInt(m);
    y = parseInt(y);
    
    if (m < 3) y = y - 1;
    
    let thu = zeller(d, month(m), year(y));
    thu = Math.trunc(thu);
    let today = "";
    switch (thu) {
      case 0:
        today = "Chủ nhật";
        break;
      case 1:
        today = "Thứ Hai";
        break;
      case 2:
        today = "Thứ Ba";
        break;
      case 3:
        today = "Thứ Tư";
        break;
      case 4:
        today = "Thứ Năm";
        break;
      case 5:
        today = "Thứ Sáu";
        break;
      case 6:
        today = "Thứ Bảy";
        break;
    }
    return today;
  } else {
    alert("Kí tự bạn nhập không phải số!!!");
    return "VUI LÒNG NHẬP LẠI!!!";
  }
};
