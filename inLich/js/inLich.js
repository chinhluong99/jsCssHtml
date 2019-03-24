const inSo = n =>{
  let str= "";
  for(i=1;i<=n;i++){
    if(i%6==0 && i%9==0)
      str = str + i + ",";
  }
  return 'Các số từ 1 đến' + n + 'là:' +str;
}