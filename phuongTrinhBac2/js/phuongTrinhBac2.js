function phuongTrinhBacHai(a, b, c){
    if(testNu(a) && testNu(b) && testNu(c)){
        if(parseFloat(a) != 0){
        a = parseFloat(a);
            // phải có vì khi kí dạng '9t'(ví dụ) thì chỉ ở điều kiện if bên trên mới lọc ra '9' để thỏa điều kiện != 0
            // khi xuống phép tính delta thì a lại trở về dạng '9t'
        delta = b*b - 4*a*c;
        if(delta < 0){
            alert('phương trình vô nghiệm');
            del.innerHTML = '<span class="color text-2">VUI LÒNG NHẬP LẠI</span>';
            return delta;
        }
        else if(delta == 0){
            x = -parseFloat(b)/(2*parseFloat(a));
            n1.innerHTML = x;
            n2.innerHTML = x;
        }
            else {
               x1 = (-parseFloat(b) + Math.sqrt(delta)) / (2*parseFloat(a));
                x2 = (-parseFloat(b) - Math.sqrt(delta)) / (2*parseFloat(a));
                n1.innerHTML = x1.toFixed(3);
                n2.innerHTML = x2.toFixed(3);
            }
            del.innerHTML = delta.toFixed(3);
            return delta;
        }
        else{
            x0 = (-c) / b;
            n1.innerHTML = x0.toFixed(3);
            n2.innerHTML = x0.toFixed(3);
            del.innerHTML = '<span class="color text-2">ĐÂY LÀ PHƯƠNG TRÌNH BẬC NHẤT</span>';
            return delta;
        }
    }
    else{
        n1.innerHTML = " ";
        n2.innerHTML = " ";
        alert('a, b, c chưa phải là số');
        del.innerHTML = '<span class="color text-2">VUI LÒNG NHẬP LẠI</span>';
        return delta;
    }
}
