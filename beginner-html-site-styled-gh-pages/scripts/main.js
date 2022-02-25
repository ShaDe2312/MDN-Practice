let myImage = document.querySelector('img');

myImage.onclick = function(){
    let mySrc= myImage.getAttribute('src');

    if (mySrc === 'images/firefox-icon.png'){
        myImage.setAttribute('src', 'images/chrome1x.png');
    }

    else{
        myImage.setAttribute('src', 'images/firefox-icon.png');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUsername(){
    let myUsername= prompt("Please enter your name?");
    localStorage.setItem('name', myName);
    myHeading.textContent= 'Mozilla is cool, '+ myName;
}