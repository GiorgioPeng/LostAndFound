window.onload=function(){
  var search = document.querySelector("input[type='text']");
  var link = document.querySelector("#link");
  var content = document.querySelector("#content");
  var button = document.querySelector("input[type='button']");
  var img = document.querySelector("#search img");
  search.addEventListener("touchstart",function(){
    link.style.display="none";
    content.style.display="none"
    button.style="display:inline-block;position:relative;top:0.2vh;margin-top:3%;margin-left:0;margin-right:5%;width:15%;height:80%;background-color:skyblue;color:white;";
    search.placeholder="请输入关键字";
    search.style.height="80%";
    img.style.top="0.5vh";
    search.style.width="70%";
  },false)
  search.addEventListener("input",function(event){
    if(search.value[0]!==" ")
    {
      search.value="      "+search.value;
    }
    if(search.value.length<"      ".length&&!search.value.match(/\S/g))
      {
        search.value="      "+search.value;
        search.value=search.value.substr(0,"      ".length);
      }
    setTimeout(function(){search.setSelectionRange(search.value.length,search.value.length)},5);
  },false)
  search.addEventListener("blur",function(){
    link.style.display="block";
    content.style.display="block"
    search.placeholder="搜索";
    button.style.display="none";
    search.style.width="90%";
    search.style.height="60%";
    img.style.top="0.4vh";
    if(search.value==="      ")
      search.value="";
  },false)
}
