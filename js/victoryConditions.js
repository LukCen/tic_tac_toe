'use strict'
/* 
    there's probably a better way to do this, but I don't want to bother with jQuery or frameworks at this point, and I just want to finish this project, so it'll do with being "brute-forced" for now and I'll maybe revisit it later
*/

const cells = document.querySelectorAll('.gameCell');
let cell_1 = document.querySelector('.container :nth-child(1)')
let cell_2 = document.querySelector('.container :nth-child(2)')
let cell_3 = document.querySelector('.container :nth-child(3)')
let cell_4 = document.querySelector('.container :nth-child(4)')
let cell_5 = document.querySelector('.container :nth-child(5)')
let cell_6 = document.querySelector('.container :nth-child(6)')
let cell_7 = document.querySelector('.container :nth-child(7)')
let cell_8 = document.querySelector('.container :nth-child(8)')
let cell_9 = document.querySelector('.container :nth-child(9)')

// for X


export let checkCross = () => {

    cells.forEach((c) => {
        c.addEventListener('click', () => {
            
            
            // top row

            if(cell_1.classList.contains('hasCross') && cell_2.classList.contains('hasCross') && cell_3.classList.contains('hasCross')){
                cell_1.style.backgroundColor = '#009900';
                cell_2.style.backgroundColor = '#009900';
                cell_3.style.backgroundColor = '#009900';
                
                
                cell_1.classList.add('crossVictory')
                cell_2.classList.add('crossVictory')
                cell_3.classList.add('crossVictory')

                

            }

            // middle row 

            if(cell_4.classList.contains('hasCross') && cell_5.classList.contains('hasCross') && cell_6.classList.contains('hasCross')){
                cell_4.style.backgroundColor = '#009900';
                cell_5.style.backgroundColor = '#009900';
                cell_6.style.backgroundColor = '#009900';

                cell_4.classList.add('crossVictory')
                cell_5.classList.add('crossVictory')
                cell_6.classList.add('crossVictory')

            }

            // bottom row

            if(cell_7.classList.contains('hasCross') && cell_8.classList.contains('hasCross') && cell_9.classList.contains('hasCross')){
                cell_7.style.backgroundColor = '#009900';
                cell_8.style.backgroundColor = '#009900';
                cell_9.style.backgroundColor = '#009900';

                cell_7.classList.add('crossVictory');
                cell_8.classList.add('crossVictory');
                cell_9.classList.add('crossVictory');

            }

            // left column
            if(cell_1.classList.contains('hasCross') && cell_4.classList.contains('hasCross') && cell_7.classList.contains('hasCross')){
                cell_1.style.backgroundColor = '#009900';
                cell_4.style.backgroundColor = '#009900';
                cell_7.style.backgroundColor = '#009900';

                cell_1.classList.add('crossVictory')
                cell_4.classList.add('crossVictory')
                cell_7.classList.add('crossVictory')

            }

            // middle column

            if(cell_2.classList.contains('hasCross') && cell_5.classList.contains('hasCross') && cell_8.classList.contains('hasCross')){
                cell_2.style.backgroundColor = '#009900';
                cell_5.style.backgroundColor = '#009900';
                cell_8.style.backgroundColor = '#009900';

                cell_2.classList.add('crossVictory')
                cell_5.classList.add('crossVictory')
                cell_8.classList.add('crossVictory')

            }

            // right column

            if(cell_3.classList.contains('hasCross') && cell_6.classList.contains('hasCross') && cell_9.classList.contains('hasCross')){
                cell_3.style.backgroundColor = '#009900';
                cell_6.style.backgroundColor = '#009900';
                cell_9.style.backgroundColor = '#009900';

                cell_3.classList.add('crossVictory')
                cell_6.classList.add('crossVictory')
                cell_9.classList.add('crossVictory')

                
            }

            // diagonal - left top to right bottom

            if(cell_1.classList.contains('hasCross') && cell_5.classList.contains('hasCross') && cell_9.classList.contains('hasCross')){
                cell_1.style.backgroundColor = '#009900';
                cell_5.style.backgroundColor = '#009900';
                cell_9.style.backgroundColor = '#009900';

                cell_1.classList.add('.crossVictory')
                cell_5.classList.add('.crossVictory')
                cell_9.classList.add('.crossVictory')

                
            }
            
            // diagonal - right top to left bottom

            if(cell_3.classList.contains('hasCross') && cell_5.classList.contains('hasCross') && cell_7.classList.contains('hasCross')){
                cell_3.style.backgroundColor = '#009900';
                cell_5.style.backgroundColor = '#009900';
                cell_7.style.backgroundColor = '#009900';

                cell_3.classList.add('.crossVictory')
                cell_5.classList.add('.crossVictory')
                cell_7.classList.add('.crossVictory')

                
            }
        })
    })

            

}

export let checkCircle = () => {

    cells.forEach((c) => {
        c.addEventListener('click', () => {
            
            
            // top row

            if(cell_1.classList.contains('hasCircle') && cell_2.classList.contains('hasCircle') && cell_3.classList.contains('hasCircle')){
                cell_1.style.backgroundColor = '#009900';
                cell_2.style.backgroundColor = '#009900';
                cell_3.style.backgroundColor = '#009900';

                cell_1.classList.add('circleVictory');
                cell_2.classList.add('circleVictory');
                cell_3.classList.add('circleVictory');

            }

            // middle row 

            if(cell_4.classList.contains('hasCircle') && cell_5.classList.contains('hasCircle') && cell_6.classList.contains('hasCircle')){
                cell_4.style.backgroundColor = '#009900';
                cell_5.style.backgroundColor = '#009900';
                cell_6.style.backgroundColor = '#009900';

                cell_4.classList.add('circleVictory');
                cell_5.classList.add('circleVictory');
                cell_6.classList.add('circleVictory');

            }

            // bottom row

            if(cell_7.classList.contains('hasCircle') && cell_8.classList.contains('hasCircle') && cell_9.classList.contains('hasCircle')){
                cell_7.style.backgroundColor = '#009900';
                cell_8.style.backgroundColor = '#009900';
                cell_9.style.backgroundColor = '#009900';

                cell_7.classList.add('circleVictory');
                cell_8.classList.add('circleVictory');
                cell_9.classList.add('circleVictory');

            }

            // left column
            if(cell_1.classList.contains('hasCircle') && cell_4.classList.contains('hasCircle') && cell_7.classList.contains('hasCircle')){
                cell_1.style.backgroundColor = '#009900';
                cell_4.style.backgroundColor = '#009900';
                cell_7.style.backgroundColor = '#009900';

                cell_1.classList.add('circleVictory');
                cell_4.classList.add('circleVictory');
                cell_7.classList.add('circleVictory');

            }

            // middle column

            if(cell_2.classList.contains('hasCircle') && cell_5.classList.contains('hasCircle') && cell_8.classList.contains('hasCircle')){
                cell_2.style.backgroundColor = '#009900';
                cell_5.style.backgroundColor = '#009900';
                cell_8.style.backgroundColor = '#009900';

                cell_2.classList.add('circleVictory');
                cell_5.classList.add('circleVictory');
                cell_8.classList.add('circleVictory');
                

            }

            // right column

            if(cell_3.classList.contains('hasCircle') && cell_6.classList.contains('hasCircle') && cell_9.classList.contains('hasCircle')){Circle
                cell_3.style.backgroundColor = '#009900';
                cell_6.style.backgroundColor = '#009900';
                cell_9.style.backgroundColor = '#009900';

                cell_3.classList.add('circleVictory');
                cell_6.classList.add('circleVictory');
                cell_9.classList.add('circleVictory');

                
            }

            // diagonal - left top to right bottom

            if(cell_1.classList.contains('hasCircle') && cell_5.classList.contains('hasCircle') && cell_9.classList.contains('hasCircle')){
                cell_1.style.backgroundColor = '#009900';
                cell_5.style.backgroundColor = '#009900';
                cell_9.style.backgroundColor = '#009900';

                cell_1.classList.add('circleVictory');
                cell_5.classList.add('circleVictory');
                cell_9.classList.add('circleVictory');

                
            }
            
            // diagonal - right top to left bottom

            if(cell_3.classList.contains('hasCircle') && cell_5.classList.contains('hasCircle') && cell_7.classList.contains('hasCircle')){
                cell_3.style.backgroundColor = '#009900';
                cell_5.style.backgroundColor = '#009900';
                cell_7.style.backgroundColor = '#009900';

                cell_3.classList.add('circleVictory');
                cell_5.classList.add('circleVictory');
                cell_7.classList.add('circleVictory');

                
            }
        })

    })

};


checkCross()
checkCircle()

