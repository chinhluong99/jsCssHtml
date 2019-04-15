<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>learnJS</title>
  <link rel="stylesheet" href="https://stackedit.io/style.css" />
</head>

<body class="stackedit">
  <div class="stackedit__left">
    <div class="stackedit__toc">
      
<ul>
<li><a href="#những-lưu-ý-trong-khi-học-js-thuần-và-es6">Những lưu ý trong khi học JS thuần và ES6</a>
<ul>
<li><a href="#phương-thức-return">Phương thức return</a></li>
<li><a href="#compare-var-let-and-const--variable">Compare: var, let and const  variable</a></li>
</ul>
</li>
</ul>

    </div>
  </div>
  <div class="stackedit__right">
    <div class="stackedit__html">
      <h1 id="những-lưu-ý-trong-khi-học-js-thuần-và-es6">Những lưu ý trong khi học JS thuần và ES6</h1>
<h2 id="phương-thức-return">Phương thức <em>return</em></h2>
<p>Đây là phương thức phổ biến để trả về giá trị cho function<br>
Và phương thức này luôn luôn phải được đặt <strong>cuối cùng</strong> trong funtion</p>
<ul>
<li>Ví dụ:</li>
</ul>
<pre><code>var balance = 10500;
var cameraOn = true;
function steal(balance, amount){
  cameraOn = false;
  if(amount &lt; balance) balance = balance - amount;
  cameraOn = true;
  return amount;
  
}
var amount = steal(balance, 1250);
console.log('criminal: you stole ' + amount);
console.log(cameraOn);
</code></pre>
<ul>
<li>Console:</li>
</ul>
<blockquote>
<p>criminal: you stole 1250<br>
true</p>
</blockquote>
<ul>
<li>Nếu <em>return</em> bị đảo lên trên:</li>
</ul>
<blockquote>
<p>return amount;<br>
cameraOn = true;</p>
</blockquote>
<ul>
<li>Console sẽ báo:</li>
</ul>
<blockquote>
<p>criminal: you stole 1250<br>
false</p>
</blockquote>
<p>Có nghĩa là nó sẽ lấy giá trị cameraOn ban đầu vì khi <em>return</em> trả về thì nó sẽ không quan tâm các lệnh bên dưới func nữa</p>
<h2 id="compare-var-let-and-const--variable">Compare: <em>var</em>, <em>let</em> and <em>const</em>  variable</h2>
<h3 id="const-variable"><em>Const</em> variable</h3>
<p>Được dùng để khai báo 1 hằng số - 1 giá trị không thay đổi trong suốt quá trình chạy</p>
<pre><code>const A = 5;
A = 10; // Lỗi Uncaught TypeError: Assignment to constant variable
</code></pre>
<h3 id="var-and-let-variable"><em>Var</em> and <em>let</em> variable</h3>
<p><em>let</em> tạo ra một biến có thể truy cập được trong block bao quanh nó như <em>if, while, for,…</em><br>
Khác với <em>var</em> ở chỗ nó có quyền truy cập xuyên suốt trong 1 function</p>
<ul>
<li>Sử dụng <em>var</em>:</li>
</ul>
<pre><code>function foo() {
   var x = 10;
   if (true) {
      var x = 20; // x ở đây cũng là x ở trên
      console.log(x); // in ra 20
   }
   console.log(x); // vẫn là 20
}
</code></pre>
<ul>
<li>Sử dụng <em>let</em>:</li>
</ul>
<pre><code>function foo() {
   let x = 10;
   if (true) {
      let x = 20; // x này là x khác rồi đấy
      console.log(x); // in ra 20
   }
   console.log(x); // in ra 10
}
</code></pre>
<p>Ngoài ra, trong <strong>global spoce</strong>, từ khóa <em>var</em> tạo ra thuộc tính mới cho <strong>global object (this)</strong>, còn <em>let</em> thì không:</p>
<pre><code>var x = 'global';
let y = 'global';
console.log(this.x); // "global"
console.log(this.y); // undefined
</code></pre>
<h3 id="callback-và-let">Callback và <em>let</em></h3>
<p>Trường hợp này sử dụng <em>let</em> rất hiểu quả đó là sử dụng <strong>callback</strong> trong 1 vòng lặp.</p>
<ul>
<li>Nếu dùng <em>var</em>:</li>
</ul>
<pre><code>for (var i = 0; i &lt; 5; i++) {
   setTimeout(function(){ 
      console.log('Yo! ', i);
   }, 1000); // delay 1000ms
}
</code></pre>
<ul>
<li>Console:</li>
</ul>
<blockquote>
<p>Yo! 5<br>
Yo! 5<br>
Yo! 5<br>
Yo! 5<br>
Yo! 5</p>
</blockquote>
<p>Giá trị của biến <strong>i</strong> bên trong hàm <strong>callback</strong> luôn là giá trị cuối cùng trong vòng lặp.<br>
Để giải quyết vấn đề này, chúng ta sẽ thay <em>var</em> bằng <em>let</em>:</p>
<pre><code>for (let i = 0; i &lt; 5; i++) {
   setTimeout(function(){ 
      console.log('Yo! ', i);
   }, 1000);
}
</code></pre>
<ul>
<li>Console sẽ đúng như yêu cầu:</li>
</ul>
<blockquote>
<p>Yo! 0<br>
Yo! 1<br>
Yo! 2<br>
Yo! 3<br>
Yo! 4</p>
</blockquote>

    </div>
  </div>
</body>

</html>
