const testNu = so=>{
  if(isNaN(parseFloat(so)))
    return false;
  else
    return true;
}
const tienThuong = (tien,xepLoai)=>{
  if(testNu(tien)){
    if(parseFloat(tien) != 0){
      tien = parseFloat(tien);
      let heSo;
      if(xepLoai == "A")
        heSo = 2;
      else if(xepLoai == "B")
        heSo = 1.8;
      else if(xepLoai == "C")
        heSo = 1.2;
      else
        heSo = 0.8;
      return "Tiền thưởng là: " + tien*heSo + " Triệu Đồng";
    }
    else
      return "Nhân viên thực tập không lương";
  }
  else{
    alert('Kí tự bạn nhập không phải số');
    return 'VUI LÒNG NHẬP LẠI';
  }
}
