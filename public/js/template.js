function main() {
var bp = document.getElementById('bp');
var fb = document.getElementById('fb');
var ins = document.getElementById('ins');
var sc = document.getElementById('sc');
var tw = document.getElementById('tw');
var yt = document.getElementById('yt');

bp.onmouseover = function(){
  bp.setAttribute("src", "img/hovers/beatport.png");
}
bp.onmouseout = function(){
  bp.setAttribute("src", "img/icons/beatport.png");
}

fb.onmouseover = function(){
  fb.setAttribute("src", "img/hovers/facebook.png");

}
fb.onmouseout = function(){
  fb.setAttribute("src", "img/icons/facebook.png");
}

ins.onmouseover = function(){
  ins.setAttribute("src", "img/hovers/instagram.png");
}
ins.onmouseout = function(){
  ins.setAttribute("src", "img/icons/instagram.png");
}

sc.onmouseover = function(){
  sc.setAttribute("src", "img/hovers/soundcloud.png");
}
sc.onmouseout = function(){
  sc.setAttribute("src", "img/icons/soundcloud.png");
}

tw.onmouseover = function(){
  tw.setAttribute("src", "img/hovers/twitter.png");
}
tw.onmouseout = function(){
  tw.setAttribute("src", "img/icons/twitter.png");
}

yt.onmouseover = function(){
  yt.setAttribute("src", "img/hovers/youtube.png");
}
yt.onmouseout = function(){
  yt.setAttribute("src", "img/icons/youtube.png");
}

bp.onclick = function(){
  window.open("#");
}
fb.onclick = function(){
  window.open("https://www.facebook.com/joaquim.jacquemyn");
}
ins.onclick = function(){
  window.open("https://www.instagram.com/joaquim.jacquemyn/");
}
tw.onclick = function(){
  window.open("#");
}
sc.onclick = function(){
  window.open("https://soundcloud.com/joaquim-jacquemyn");
}
yt.onclick = function(){
  window.open("https://www.youtube.com/channel/UCWCKuhFsjO0w9vEBYzWvz3Q?view_as=subscriber");
}

}

window.onload = function() {
       main();
}
