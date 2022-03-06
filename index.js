var shortlink;
var shorturl=document.getElementById("shorturl");
console.log(url)
function generate(){
  
  short();
  dateTime();
}

function dateTime(){
  let currentDate = new Date();
  let date = currentDate.getDate(); +"/"+ (currentDate.getMonth() + 1)+"/"+currentDate.getFullYear();
  let time= currentDate.getHours() + ":" + currentDate.getMinutes();
  document.getElementById("time").textContent="Today at "+time;
}
function short(){
  var url="https://api.shrtco.de/v2/shorten?url="+document.getElementById("text").value;
  document.getElementById("links").style.visibility="visible"
  fetch(url)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    shortlink = data.result.short_link;
    // console.log(shortlink)
    if(data.ok!=false){
      document.getElementById("ogurl").textContent=document.getElementById("text").value;
      shorturl.textContent=shortlink;
      shorturl.setAttribute("href","https://www."+shortlink)
    }
    else{
      error(error_code);
    }
    

  })
}
function error(e){
  document.getElementById("text").style.border="1px red solid";
  document.getElementById("text").style.color="red";
  document.getElementById("text").setAttribute("value","");
  if(e==1)
  document.getElementById("text").setAttribute("value","No URL given.")
  else if(e==2)
  document.getElementById("text").setAttribute("value","Invalid URL.")
  else if(e==3)
  document.getElementById("text").setAttribute("value","Rate limit reached. Wait a second and try again.")
  else if(e==10)
  document.getElementById("text").setAttribute("value","Disallowed Link.")
  else
  document.getElementById("text").setAttribute("value","Unhandled Error.")
}
function copy(){
  document.getElementById("copy").innerText="Copied"
  navigator.clipboard.writeText(shortlink);
}
function dele(){
  document.getElementById("links").style.visibility="hidden";
}
//   console.log(shortlink)
document.getElementById("hello").innerHTML