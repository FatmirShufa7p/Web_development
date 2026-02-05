const pressMe = document.getElementById("press-me-btn");
pressMe.addEventListener("click", refresh);



document.addEventListener("keydown", move);

speed = 10;

let y = 0;
let x = 0;

function gameOver(){
    window.alert("You died !");
}

function refresh(){
    location.reload();
}

function move(){

    const dot = document.getElementById("main-character");

    if(event.key === "ArrowDown"){
        dot.style.top = `${y + speed}px`;
        y+=speed;
    }

    else if(event.key === "ArrowUp"){
        y-=speed;
        dot.style.top = `${y - speed}px`;
    }

    else if(event.key === "ArrowLeft"){
        dot.style.right = `${x + speed}px`;
        x+=speed;
    }

    else if(event.key === "ArrowRight"){
        dot.style.right = `${x - speed}px`;
        x-=speed;
    }

    if(y < 0 && y > 440){
        gameOver();
        refresh();
    }

}