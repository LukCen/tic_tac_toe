'use strict'

const cells = document.querySelectorAll('.gameCell');
const container = document.querySelector('.buttonContainer')
let playing = 2;
let gameOver = false;

cells.forEach((c)=> {

    c.addEventListener('click', () => {
        console.log(cells[c])
        // dynamically create both X and O
        const drawCross = () => {
            let crossLeft = document.createElement('div');
            let crossRight = document.createElement('div');
            let soundCrossLeft = new Audio('../assets/Cross_left.wav')
            let soundCrossRight = new Audio('../assets/Cross_right.wav')
    
            crossLeft.classList.add("crossLeft");
            setTimeout(() => {

                crossRight.classList.add("crossRight");
            }, 250)
            c.classList.add('hasCross')
            c.appendChild(crossLeft);
            
            soundCrossLeft.play();
            c.appendChild(crossRight);
            setTimeout(() => {soundCrossRight.play()}, 250)
            
        }

        const drawCircle = () => {
            let circle = document.createElement('div');
            let soundCircle = new Audio('../assets/circle.mp3');
            soundCircle.volume = 0.5
            circle.classList.add('circle');
            c.classList.add('hasCircle')
            c.appendChild(circle);
            soundCircle.play();
        }

        const play = () => {
            // draws a correct symbol in the clicked cell - always starts with X
            if(c.classList.contains('empty')){
                (playing % 2 === 0) ? drawCross() : drawCircle();
                c.classList.remove('empty')
                playing += 1;
            }
            
            if(playing === 11 && gameOver === false){
                // ensures the button isn't generated every time a cell is clicked once no empty cells remain
                gameOver = true;

                // create the reset button, give it "button" type and add a styling class
                let reset = document.createElement('button');
                let buttonSound = new Audio('../assets/btnClick.mp3')
                buttonSound.volume = 0.1
                reset.type = 'button';
                reset.classList.add('restart');
                reset.innerHTML = 'Clear'
                container.appendChild(reset)
                
                // resets the board upon clicking then deletes itself
                reset.addEventListener('click', () => {
                    buttonSound.play()
                    cells.forEach((c) => {
                        c.classList.add('empty')
                        c.innerHTML = ''
                        playing = 2;
                        
                    })
                    container.removeChild(reset)
                })
            }
        }
        play()
    })
    
})

