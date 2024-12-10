let direction ={x: 0, y: 0};
const foodSound = new Audio('eat it.mp3');
const moveSound = new Audio('play.mp3');
const gameOverSound = new Audio('out.mp3') 
let lastPaintTime =0;
let snakeArr = [
    {x: 13, y: 15}
]
//function

function main(ctime) {
    console.log(ctime)
    
    window.requestAnimationFrame(main);
    if((ctime - lastPaintTime)/1000 ,1/speed) {
     return;   
    }
    lastPaintTime =ctime;
     gameEngine();
     function gameEngine() {
        
     
    // part 1 :update th snake array & food


    // part2: display  the snake and food
    board.innerHTML = "";
    snakeArr.forEach ((e, index)=>{
        snakeElement = document.createElement('div');
        snakeElement.style.gribRowStart = e.y;
        snakeElement.style.gribRowStart = e.x;
        board.appendChild(snakeElement);
    })    

}

   
}



// main logics
window.requestAnimationFrame(main);