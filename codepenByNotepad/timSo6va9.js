const testNu = so=>{
  if(isNaN(parseFloat(so)))
    return false;
  else
    return true;
}
const inSo = n => {
  if(testNu(n)){
    if(n>=18){
      xy = "";
      for(i=18;i<=n;i++){
        if(i%6==0 && i%9==0)
          xy = xy + i + " ";
      }
      kq.innerHTML = 'Các số chia hết gồm: ' + xy;
    }
    else
      kq.innerHTML = 'Không có số nào chia hết cho 6 và 9';
  }
  else
    {
      alert('Kí tự bạn nhập không phải số');
      kq.innerHTML = 'Vui lòng nhập lại';
    }
}
