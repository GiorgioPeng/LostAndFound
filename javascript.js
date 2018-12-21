window.onload=function(){
  var search = document.querySelector("#search div");
  var button = document.querySelector("input[type='button']");
  var img = document.querySelector("#search div img");
  var input = document.querySelector("input[type='text']");
  search.addEventListener("touchstart",function(){
    search.className="clickClass";
    img.className="clickImg";
    button.className="clickOne";
    input.placeholder="请输入关键字";
  },false)
  input.addEventListener("input",function(event){
    if(input.value[0]!==" ")
    {
      input.value="      "+input.value;
    }
    if(input.value.length<"      ".length&&!input.value.match(/\S/g))
      {
        input.value="      "+input.value;
        input.value=input.value.substr(0,"      ".length);
      }
    setTimeout(function(){input.setSelectionRange(input.value.length,input.value.length)},5);
  },false)
  input.addEventListener("blur",function(){
    search.className="initialClass";
    img.className="initialImg";
    button.className="initialOne";
    if(input.value==="      ")
      input.value="";
  },false)
}
