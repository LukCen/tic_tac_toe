'use strict'
let gameCell = document.querySelectorAll('canvas');
let singleCell = document.querySelector('canvas');
let cellHeight = singleCell.clientHeight;
let cellWidth = singleCell.clientWidth;
let playing = 2;

gameCell.forEach((c) => {
    c.width = c.height * (c.clientWidth / c.clientHeight);
})

console.log(cellHeight, cellWidth)


gameCell.forEach((e) => {
    e.addEventListener('click', () => {
        

        const drawX = () => {
    
            let context = e.getContext('2d');
            context.moveTo(10, 10);
            context.lineTo(140, 140);
            context.stroke();
            context.moveTo(120, 10);
            context.lineTo(10, 140);
            context.stroke();
            console.log('works');
        }

        const drawCircle = () => {
            
            let context = e.getContext('2d');
            context.beginPath(0, 0);
            context.arc(cellHeight/3.5, cellWidth/3.5, 40, 0, 2*Math.PI )
            context.stroke()
        }
        
        let play = () => {
            
            if(playing % 2 === 0){
                drawX()
                playing += 1 
            } else if (playing % 2 === 1) {
                drawCircle()
                playing += 1
            }
        }

        
        play()
    })
})