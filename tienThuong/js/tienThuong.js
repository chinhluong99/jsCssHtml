const tienThuong = (tien,xepLoai)=>{
  let heSo = "";
  if(xepLoai === 'A')
    heSo = 2;
  else if(xepLoai === 'B')
    heSo = 1.8;
  else if(xepLoai === 'C')
    heSo = 1.2;
  else(xepLoai === 'D')
  heSo = 0.8;
  return 'Tien thuong la:' + tien*heSo + 'Dong';
}