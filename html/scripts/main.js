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