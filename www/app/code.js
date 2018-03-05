var burger = document.getElementById('burger');
var sidebar = document.getElementById('sidebar');

var mClosed = "closed"; //class name for closed button
var mOpened = "opened"; //class name for opened button
var mContClosed = "m_sidebar closed"; //class name for closed menu
var mContOpened = "m_sidebar opened"; //class name for opened menu

burger.onclick = function() {
  if (burger.className == mClosed) {
    burger.className = mOpened;
    sidebar.className = mContOpened;
  }
  else if (burger.className == mOpened) {
    burger.className = mClosed;
    sidebar.className = mContClosed;
  }
}

var colorPicker = document.getElementById("bgColor");
function changeColor(){
   var colorVal = colorPicker.value;
   document.getElementById("page").style.background = colorVal;
}
colorPicker.addEventListener("change",changeColor);

document.getElementById('close').onclick = function() {
   var pTag = document.getElementsByTagName('p');
   pTag[pTag.length-1].parentNode.removeChild(pTag[pTag.length-1]);
}

function changeTxt(){
  var size= document.getElementById('txtChange').value;
  var txt = page.getElementsByTagName('p');
  var min = 8;
  var max= 24;
    var change = size + 'px';
    console.log(change);
    console.log(size);
      for(i=0; i<txt.length; i++){
        if (size >= min && size <=max ){
          txt[i].style.fontSize = change;
          console.log(txt[i].style.fontSize.value);
        }  else {
          alert("Введите от 8 до 24");
          size= "";
          console.log(txt[i]);
               }
    }
  }
  var font= document.getElementById('font');
  var post = document.getElementById('post');
  font.onclick=function(){
    var family=this.value;
    console.log(family);
    console.log(font);
    post.style.fontFamily=family;
  }

var burger2=document.getElementById('burger2');
var sett=document.getElementById('sett');

var closed2="closed2";
var opened2="opened2";
var settClosed="sett closed2";
var settOpened="sett opened2";
burger2.onclick=function(){
  if(burger2.className==closed2){
    burger2.className= opened2;
    sett.className=settOpened;
  }
  else if(burger2.className==opened2){
    burger2.className=closed2;
    sett.className=settClosed;
  }
}
