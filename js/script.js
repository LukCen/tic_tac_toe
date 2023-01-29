'use strict'

const cells = document.querySelectorAll('.gameCell');
const container = document.querySelector('.buttonContainer')
let playing = 2;

cells.forEach((c)=> {

    c.addEventListener('click', () => {
       
        // dynamically create both X and O
        const drawCross = () => {
            let crossLeft = document.createElement('div');
            let crossRight = document.createElement('div');
    
            crossLeft.classList.add("crossLeft");
            crossRight.classList.add("crossRight");
    
            c.appendChild(crossLeft)
            c.appendChild(crossRight)
        }

        const drawCircle = () => {
            let circle = document.createElement('div')
            circle.classList.add('circle')
            c.appendChild(circle)
        }

        const play = () => {
            // draws a correct symbol in the clicked cell - always starts with X
            if(c.classList.contains('empty')){
                (playing % 2 === 0) ? drawCross() : drawCircle();
                c.classList.remove('empty')
                playing += 1;

                console.log(playing)
            }

            if(playing === 11){
                
                // create the reset button, give it "button" type and add a styling class
                let reset = document.createElement('button');
                reset.type = 'button';
                reset.classList.add('restart');
                reset.innerHTML = 'Clear'
                container.appendChild(reset)

                // resets the board upon clicking then deletes itself
                reset.addEventListener('click', () => {
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

