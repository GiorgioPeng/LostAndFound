window.onload=function(){
  var search = document.querySelector("input[type='text']");
  var link = document.querySelector("#link");
  var content = document.querySelector("#content");
  search.addEventListener("touchstart",function(){
    link.style.display="none";
    content.style.display="none"
  },false)
  search.addEventListener("blur",function(){
    link.style.display="block";
    content.style.display="block"
  },false)
}
