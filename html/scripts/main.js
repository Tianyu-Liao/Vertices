let myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';
alert(myHeading.textContent)
// document.querySelector('html').onclick = function() {
//     alert('别戳我，我怕疼。');
// }

let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/edge.jpeg') {
      myImage.setAttribute('src', 'images/vertices.jpg');
    } else {
        myImage.setAttribute('src', 'images/edge.jpeg');
    } 
}

let myButton = document.querySelector('button');

function setUserName() {
    let myName = prompt('请输入你的名字。');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Mozilla 酷毙了，' + myName;
  }

if(!localStorage.getItem('name')) {
setUserName();
} else {
let storedName = localStorage.getItem('name');
myHeading.textContent = 'Mozilla 酷毙了，' + storedName;
}

myButton.onclick = function() {
    setUserName();
 }

 
3
4
5
6
7
8
9
var mapType = google.maps.MapTypeId.ROADMAP;
var lat = 39.915168, lng = 116.403875, zoom = 10;
var mapOptions = {
    center: new google.maps.LatLng(lat, lng),  //地图的中心点
    zoom: zoom,               　　　　　　　　　　//地图缩放比例
    mapTypeId: mapType,       　　　　　　　　　　//指定地图展示类型：卫星图像、普通道路
    scrollwheel: true          　　　　　　　　　 //是否允许滚轮滑动进行缩放
};
var map = new google.maps.Map(document.getElementById("map"), mapOptions); //创建谷歌地图