'use strict'
let gameCell = document.querySelectorAll('canvas');
let singleCell = document.querySelector('canvas');
let cellHeight = singleCell.clientHeight;
let cellWidth = singleCell.clientWidth;
let currentlyPlaying = document.querySelector('h2')
currentlyPlaying.innerHTML = "Now playing : X"
let playing = 2;

gameCell.forEach((c) => {
    c.width = c.height * (c.clientWidth / c.clientHeight);
})

console.log(cellHeight, cellWidth)


gameCell.forEach((e) => {

    // e.marked method is used to check if the clicked square is already filled - when filled, turns to true and prevents filling a square with multiple Xs or Os
    e.marked = false
    e.addEventListener('click', () => {
        const drawX = () => {
            if(e.marked === false){
                e.marked = true
                let context = e.getContext('2d');
                context.moveTo(10, 10);
                context.lineTo(140, 140);
                context.stroke();
                context.moveTo(120, 10);
                context.lineTo(10, 140);
                context.stroke();
                console.log('works');
                
            }
        }

        const drawCircle = () => {
            if(e.marked === false){
                e.marked = true
                let context = e.getContext('2d');
                context.beginPath(0, 0);
                context.arc(cellHeight/3.5, cellWidth/3.5, 40, 0, 2*Math.PI )
                context.stroke()
            }
        }
        
        let play = () => {
            currentlyPlaying.innerHTML = ""
            if(playing % 2 === 0 && e.marked === false){
                drawX()
                playing += 1 
                currentlyPlaying.innerHTML = 'Now playing : O'
            } else if (playing % 2 === 1 && e.marked === false) {
                drawCircle()
                playing += 1
                currentlyPlaying.innerHTML = 'Now playing : X'
            }
        }
        play()
    })
})