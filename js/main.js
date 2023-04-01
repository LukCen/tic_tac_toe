'use strict'


// global variables

let playing = 0;
const cells = document.querySelectorAll('.gameCell');
const cellContainer = document.querySelector('.container');
const container = document.querySelector('.buttonContainer');
let gameOver = false;
const cell_1 = document.querySelector('.container :nth-child(1)');
const cell_2 = document.querySelector('.container :nth-child(2)');
const cell_3 = document.querySelector('.container :nth-child(3)');
const cell_4 = document.querySelector('.container :nth-child(4)');
const cell_5 = document.querySelector('.container :nth-child(5)');
const cell_6 = document.querySelector('.container :nth-child(6)');
const cell_7 = document.querySelector('.container :nth-child(7)');
const cell_8 = document.querySelector('.container :nth-child(8)');
const cell_9 = document.querySelector('.container :nth-child(9)');

// victory conditions 



/* 
    there's probably a better way to do this, but I don't want to bother with jQuery or frameworks at this point, and I just want to finish this project, so it'll do with being "brute-forced" for now and I'll maybe revisit it later
*/


// for X

let checkCross = () => {
    
    cells.forEach((c) => {
        const playerWinReset = () => {
            if(gameOver === false){
                gameOver = true;
                let reset = document.createElement('button');
                let buttonSound = new Audio('assets/btnClick.mp3');
                const cover = document.createElement('div');
                cover.classList.add('containerCover');
                buttonSound.volume = 0.25;
                reset.type = 'button';
                reset.classList.add('restart');
                reset.innerHTML = 'Clear';
                cellContainer.appendChild(cover)
                container.appendChild(reset);
                
                // resets the board upon clicking then deletes itself
                reset.addEventListener('click', () => {
                    buttonSound.play();
                    cells.forEach((c) => {
                        c.classList.add('empty')
                        c.innerHTML = ''
                        playing = 0;
                        c.style.backgroundColor = '';
                        c.classList.remove('hasCross', 'hasCircle');
                        c.classList.remove('circleVictory', 'crossVictory')
                        cellContainer.classList.remove('crossVictory', 'circleVictory');
                                            
                    })
                                    
                    container.removeChild(reset);
                    cellContainer.removeChild(cover)
                    gameOver = false;
                })

            }
            

        }
        c.addEventListener('click', () => {
                  // top row

            if(cell_1.classList.contains('hasCross') && cell_2.classList.contains('hasCross') && cell_3.classList.contains('hasCross')){
               
                cell_1.style.backgroundColor = '#009900';
                cell_2.style.backgroundColor = '#009900';
                cell_3.style.backgroundColor = '#009900';
                
                
                playerWinReset()
            }

            // middle row 

            if(cell_4.classList.contains('hasCross') && cell_5.classList.contains('hasCross') && cell_6.classList.contains('hasCross')){
                cell_4.style.backgroundColor = '#009900';
                cell_5.style.backgroundColor = '#009900';
                cell_6.style.backgroundColor = '#009900';

                playerWinReset()

            }

            // bottom row

            if(cell_7.classList.contains('hasCross') && cell_8.classList.contains('hasCross') && cell_9.classList.contains('hasCross')){
                cell_7.style.backgroundColor = '#009900';
                cell_8.style.backgroundColor = '#009900';
                cell_9.style.backgroundColor = '#009900';

                playerWinReset()

            }

            // left column
            if(cell_1.classList.contains('hasCross') && cell_4.classList.contains('hasCross') && cell_7.classList.contains('hasCross')){
                cell_1.style.backgroundColor = '#009900';
                cell_4.style.backgroundColor = '#009900';
                cell_7.style.backgroundColor = '#009900';

                playerWinReset()

            }

            // middle column

            if(cell_2.classList.contains('hasCross') && cell_5.classList.contains('hasCross') && cell_8.classList.contains('hasCross')){
                cell_2.style.backgroundColor = '#009900';
                cell_5.style.backgroundColor = '#009900';
                cell_8.style.backgroundColor = '#009900';

                playerWinReset()

            }

            // right column

            if(cell_3.classList.contains('hasCross') && cell_6.classList.contains('hasCross') && cell_9.classList.contains('hasCross')){
                cell_3.style.backgroundColor = '#009900';
                cell_6.style.backgroundColor = '#009900';
                cell_9.style.backgroundColor = '#009900';

                playerWinReset()

                
            }

            // diagonal - left top to right bottom

            if(cell_1.classList.contains('hasCross') && cell_5.classList.contains('hasCross') && cell_9.classList.contains('hasCross')){
                cell_1.style.backgroundColor = '#009900';
                cell_5.style.backgroundColor = '#009900';
                cell_9.style.backgroundColor = '#009900';

                playerWinReset()

                
            }
            
            // diagonal - right top to left bottom

            if(cell_3.classList.contains('hasCross') && cell_5.classList.contains('hasCross') && cell_7.classList.contains('hasCross')){
                cell_3.style.backgroundColor = '#009900';
                cell_5.style.backgroundColor = '#009900';
                cell_7.style.backgroundColor = '#009900';

                playerWinReset()
                
                
            }

        })

        
        
    })
 
}
let checkCircle = () => {

    const playerWinReset = () => {
        if(gameOver === false){
            gameOver = true;
            const reset = document.createElement('button');
            const buttonSound = new Audio('assets/btnClick.mp3');
            const cover = document.createElement('div');
            cover.classList.add('containerCover');
            buttonSound.volume = 0.25;
            reset.type = 'button';
            reset.classList.add('restart');
            reset.innerHTML = 'Clear';
            cellContainer.appendChild(cover)
            container.appendChild(reset);
            
            // resets the board upon clicking then deletes itself
            reset.addEventListener('click', () => {
                buttonSound.play();
                cells.forEach((c) => {
                    c.classList.add('empty')
                    c.innerHTML = ''
                    playing = 0;
                    c.style.backgroundColor = '';
                    c.classList.remove('hasCross', 'hasCircle');
                    c.classList.remove('circleVictory', 'crossVictory')
                    cellContainer.classList.remove('crossVictory', 'circleVictory');
                                        
                })
                                
                container.removeChild(reset);
                cellContainer.removeChild(cover)
                gameOver = false;
            })
        }
    }

    cells.forEach((c) => {
        c.addEventListener('click', () => {
            
            // top row

            if(cell_1.classList.contains('hasCircle') && cell_2.classList.contains('hasCircle') && cell_3.classList.contains('hasCircle')){
                cell_1.style.backgroundColor = '#009900';
                cell_2.style.backgroundColor = '#009900';
                cell_3.style.backgroundColor = '#009900';

                playerWinReset();

            }

            // middle row 

            if(cell_4.classList.contains('hasCircle') && cell_5.classList.contains('hasCircle') && cell_6.classList.contains('hasCircle')){
                cell_4.style.backgroundColor = '#009900';
                cell_5.style.backgroundColor = '#009900';
                cell_6.style.backgroundColor = '#009900';

                playerWinReset();

            }

            // bottom row

            if(cell_7.classList.contains('hasCircle') && cell_8.classList.contains('hasCircle') && cell_9.classList.contains('hasCircle')){
                cell_7.style.backgroundColor = '#009900';
                cell_8.style.backgroundColor = '#009900';
                cell_9.style.backgroundColor = '#009900';

                playerWinReset();

            }

            // left column
            if(cell_1.classList.contains('hasCircle') && cell_4.classList.contains('hasCircle') && cell_7.classList.contains('hasCircle')){
                cell_1.style.backgroundColor = '#009900';
                cell_4.style.backgroundColor = '#009900';
                cell_7.style.backgroundColor = '#009900';

                playerWinReset();

            }

            // middle column

            if(cell_2.classList.contains('hasCircle') && cell_5.classList.contains('hasCircle') && cell_8.classList.contains('hasCircle')){
                cell_2.style.backgroundColor = '#009900';
                cell_5.style.backgroundColor = '#009900';
                cell_8.style.backgroundColor = '#009900';

                playerWinReset();
                

            }

            // right column

            if(cell_3.classList.contains('hasCircle') && cell_6.classList.contains('hasCircle') && cell_9.classList.contains('hasCircle')){
                cell_3.style.backgroundColor = '#009900';
                cell_6.style.backgroundColor = '#009900';
                cell_9.style.backgroundColor = '#009900';

                playerWinReset();

                
            }

            // diagonal - left top to right bottom

            if(cell_1.classList.contains('hasCircle') && cell_5.classList.contains('hasCircle') && cell_9.classList.contains('hasCircle')){
                cell_1.style.backgroundColor = '#009900';
                cell_5.style.backgroundColor = '#009900';
                cell_9.style.backgroundColor = '#009900';

                playerWinReset();

                
            }
            
            // diagonal - right top to left bottom

            if(cell_3.classList.contains('hasCircle') && cell_5.classList.contains('hasCircle') && cell_7.classList.contains('hasCircle')){
                cell_3.style.backgroundColor = '#009900';
                cell_5.style.backgroundColor = '#009900';
                cell_7.style.backgroundColor = '#009900';

                playerWinReset();

                
            }
        })

    })

};



// main logic starts here

cells.forEach((c)=> {
    c.addEventListener('click', () => {
        // dynamically create both X and O
        const drawCross = () => {
            let crossLeft = document.createElement('div');
            let crossRight = document.createElement('div');
            let soundCrossLeft = new Audio('assets/crossLeft.wav');
            let soundCrossRight = new Audio('assets/crossRight.wav');
    
            crossLeft.classList.add("crossLeft");
            setTimeout(() => {
                crossRight.classList.add("crossRight");
            }, 250);

            c.classList.add('hasCross');

            c.appendChild(crossLeft);
            soundCrossLeft.play();
            c.appendChild(crossRight);
            setTimeout(() => {soundCrossRight.play()}, 250)
            
        }

        const drawCircle = () => {
            let circle = document.createElement('div');
            let soundCircle = new Audio('assets/circle.mp3');
            soundCircle.volume = 0.5
            circle.classList.add('circle');
            c.classList.add('hasCircle')

            c.appendChild(circle);
            soundCircle.play();
        }

        const gameEnd = () => {
            if(playing === 9 && gameOver === false){
                // ensures the button isn't generated every time a cell is clicked once no empty cells remain
                gameOver = true;

                // create the reset button, give it "button" type and add a styling class
                if(gameOver === true){
                    let reset = document.createElement('button');
                    let buttonSound = new Audio('assets/btnClick.mp3');
                    buttonSound.volume = 0.25;
                    reset.type = 'button';
                    reset.classList.add('restart');
                    reset.innerHTML = 'Clear';
                    container.appendChild(reset);
                    
                    // resets the board upon clicking then deletes itself
                    reset.addEventListener('click', () => {
                        buttonSound.play();
                        cells.forEach((c) => {
                            c.classList.add('empty')
                            c.innerHTML = ''
                            playing = 0;
                            c.style.backgroundColor = '';
                            c.classList.remove('hasCross');
                            c.classList.remove('hasCircle');
                            
                            cellContainer.classList.remove('crossVictory');
                            cellContainer.classList.remove('circleVictory');
                        })
                        container.removeChild(reset);
                        gameOver = false;
                    })
                    //

                }
            }
        }

        const play = () => {
            // draws a correct symbol in the clicked cell - always starts with X
            if(c.classList.contains('empty')){
               
                checkCross();
                checkCircle();
                (playing % 2 === 0) ? drawCross() : drawCircle();
                c.classList.remove('empty')
                playing += 1;
                
            }
        }
        
        play()
        gameEnd()
    })
})


