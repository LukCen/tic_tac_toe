'use strict'

const cells = document.querySelectorAll('.gameCell');
let playing = 2;

cells.forEach((c)=> {

    c.addEventListener('click', () => {
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
            
            if(c.classList.contains('empty')){
                (playing % 2 === 0) ? drawCross() : drawCircle();
                c.classList.remove('empty')
                playing += 1;

                console.log(playing)
            }

        }
        
        
        play()
    })
    
})

