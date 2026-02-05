let color = "red";
let selected = 0;

function selectColor(){

    selected++;

    if(selected > 6){
        selected = 0;
    }

    const hello = document.getElementById("only-button");

    let colorArr = ["red", "orange", "yellow", "green", "blue", "indigo", "purple"];

    hello.textContent = colorArr[selected];
    hello.style.color = colorArr[selected];

    color = colorArr[selected];
}

function changeColor(){
    const display = document.getElementById("output");

    display.textContent = color.charAt(0).toUpperCase() + color.slice(1);
    display.style.color = color;
}