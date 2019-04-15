<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>thingamajig</title>
  <link rel="stylesheet" href="https://stackedit.io/style.css" />
</head>

<body class="stackedit">
  <div class="stackedit__left">
    <div class="stackedit__toc">
      
<ul>
<li><a href="#the-thing-a-ma-jig">The Thing-A-Ma-Jig</a>
<ul>
<li><a href="#the-thing-a-ma-jig-is-quite-a-contraption-it-clanks-and-clunks-and-even-thunks-but-what-it-really-does-well-youve-got-us-stumped.-coders-claim-they-know-how-it--works.-can-you-uncrack-the-code-and-find-its-quirks">The Thing-A-Ma-Jig is quite a contraption-it clanks and clunks and even thunks, but what it really does, well, you’ve got us stumped. Coders claim they know how it  works. Can you uncrack the code and find its quirks?</a></li>
</ul>
</li>
</ul>

    </div>
  </div>
  <div class="stackedit__right">
    <div class="stackedit__html">
      <h1 id="the-thing-a-ma-jig">The Thing-A-Ma-Jig</h1>
<h2 id="the-thing-a-ma-jig-is-quite-a-contraption-it-clanks-and-clunks-and-even-thunks-but-what-it-really-does-well-youve-got-us-stumped.-coders-claim-they-know-how-it--works.-can-you-uncrack-the-code-and-find-its-quirks">The Thing-A-Ma-Jig is quite a contraption-it clanks and clunks and even thunks, but what it really does, well, you’ve got us stumped. Coders claim they know how it  works. Can you uncrack the code and find its quirks?</h2>
<pre><code>function clunk(times){
    var num = times;
    while(num &gt; 0){
        display('clunk');
        num = num -1;
    }
}
function thingamajig(size){
    var facky = 1;
    clunkCounter = 0;
    if(size == 0) display('clank');
    else if(size == 1) display('thunk');
    else{
        while(size &gt; 1){
            facky = facky * size;
            size = size -1;
        }
        clunk(facky);
    }
}
function display(output){
    console.log(output);
    clunkCounter = clunkCounter + 1;
}
var clunkCounter = 0;
thingamajig(5);
console.log(clunkCounter);
</code></pre>
<p><strong>We recommed passing the Thing-A-Ma-Jig the numbers 0,1,2,3,4,5, etc. See if you know what it’s doing.</strong></p>

    </div>
  </div>
</body>

</html>
