window.onload=function(){
  var search = document.querySelector("#search");
  var searchDiv = document.querySelector(".initialClass");
  var button = document.querySelector("#searchButton");
  var input = document.querySelector("input[type='text']");
  var img = document.querySelector("#searchImg");
  var marginLeft = searchDiv.offsetLeft;
  var marginTop = searchDiv.offsetTop;
  searchDiv.addEventListener("touchstart",function(){
    searchImg.className="clickImg";
    input.placeholder="请输入关键字";
    searchDiv.className="clickClass";
    search.className="clickSearch";
    button.className="clickOne";
    setTimeout(function(){
      button.style.display="block";
    },50);
  },false)

  input.addEventListener("blur",function(){
    img.className="initialImg";
    input.placeholder="搜索";
    searchDiv.className="initialClass";
    search.className="initialSearch";
    button.className="initialOne";
    button.style.display="none";
  },false)
}
