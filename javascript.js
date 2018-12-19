window.onload=function(){
  var search = document.querySelector("input[type='text']");
  var link = document.querySelector("#link");
  var content = document.querySelector("#content");
  var button = document.querySelector("input[type='button']");
  search.addEventListener("touchstart",function(){
    link.style.display="none";
    content.style.display="none"
    button.style="display:inline-block;position:relative;top:0.2vh;margin-top:3%;margin-left:0;margin-right:5%;width:15%;height:70%;background-color:skyblue;color:white;";
    search.placeholder="请输入关键字";
    search.style.width="70%";
  },false)
  search.addEventListener("input",function(event){
    if(search.value.length<"      ".length)
      search.value="      "+search.value;
  },false)
  search.addEventListener("blur",function(){
    link.style.display="block";
    content.style.display="block"
    search.placeholder="搜索";
    button.style.display="none";
    search.style.width="90%";
    if(search.value==="      ")
      search.value="";
  },false)
}
