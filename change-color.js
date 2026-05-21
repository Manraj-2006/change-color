
document.body.style.backgroundColor = "beige";

function changeColor(color) {
};function changeColor(color) {
    if (color == 'black') {
        document.querySelector('body').style = 'background-color:black;color:white';
        document.querySelector('.js-color').innerHTML = 'Black🖤';
    }
    if (color == 'green') {
        document.querySelector('body').style = 'background-color:green;color:white;';
        document.querySelector('.js-color').innerHTML = 'Green💚';
    }
    if (color == 'yellow') {
        document.querySelector('body').style = 'background-color:yellow;color:black;';
        document.querySelector('.js-color').innerHTML = 'Yellow💛';
    }
    if (color == 'red') {
        document.querySelector('body').style = 'background-color:red;color:white;';
        document.querySelector('.js-color').innerHTML = 'Red💖';
    }
    if (color == 'gray') {
        document.querySelector('body').style = 'background-color:gray;color:white;';
        document.querySelector('.js-color').innerHTML = 'Gray🤍';
    }
    if (color == 'blue') {
        document.querySelector('body').style = 'background-color:blue;color:white;';
        document.querySelector('.js-color').innerHTML = 'Blue💙';
    }
    if (color == 'lightskyblue') {
        document.querySelector('body').style = 'background-color:lightskyblue;color:black;';
        document.querySelector('.js-color').innerHTML = 'Light Blue💦';
    }
    if (color == 'white') {
        document.querySelector('body').style = 'background-color:white;color:black;';
        document.querySelector('.js-color').innerHTML = 'White🤍';
    }
    if (color == 'orange') {
        document.querySelector('body').style = 'background-color:orange;color:black;';
        document.querySelector('.js-color').innerHTML = 'Orange🧡';
    }
    if (color == 'blueviolet') {
        document.querySelector('body').style = 'background-color:blueviolet;color:white;';
        document.querySelector('.js-color').innerHTML = 'BlueViolet💜';
    }
}
document.body.style.backgroundColor = "beige";

function changeColor(color) {
    document.body.style.backgroundColor = color;
}

let playerBtn = document.getElementById("playerBtn");

playerBtn.onclick = function() {
    document.body.innerHTML += "<p>Lionel Messi</p>";
}