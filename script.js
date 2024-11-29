score=0;
cross=true;
document.onkeydown=function(e)
{
    console.log("Key pressed is:", e.key);

            if (e.key === 'ArrowUp') { // Up arrow key
                let pika = document.querySelector('.pika');
                if (pika) {
                    pika.classList.add('animatePika');
                    setTimeout(() => {
                        pika.classList.remove('animatePika');
                    }, 700);
                }
            }

            if (e.key === 'ArrowDown') { // Down arrow key
                let pika = document.querySelector('.pika');
                let pikaX = parseInt(window.getComputedStyle(pika, null).getPropertyValue('left'));
                pika.style.left = pikaX + 112 + "px";
            }

            if (e.key === 'ArrowRight') { // Right arrow key
                let pika = document.querySelector('.pika');
                let pikaX = parseInt(window.getComputedStyle(pika, null).getPropertyValue('left'));
                pika.style.left = pikaX + 112 + "px";
            }

            if (e.key === 'ArrowLeft') { 
                let pika = document.querySelector('.pika');
                let pikaX = parseInt(window.getComputedStyle(pika, null).getPropertyValue('left'));
                pika.style.left = pikaX - 112 + "px";
            }
    }
setInterval(() => {
    pika=document.querySelector('.pika');
    gameOver=document.querySelector('.gameOver');
    obstacle=document.querySelector('.obstacle');

    dx=parseInt(window.getComputedStyle(pika,null).getPropertyValue('left'));
    dy=parseInt(window.getComputedStyle(pika,null).getPropertyValue('top'));
    
    ox=parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('left'));
    oy=parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('top'));

    offsetX=Math.abs(dx-ox);
    offsetY=Math.abs(dy-oy);
    
    if(offsetX<50&&offsetY<52){
       gameOver.style.visibility='visible';
       obstacle.classList.remove('obstacleAni')
    }
    else if(offsetX<145&& cross){
        score+=1;
        updateScore(score);
        cross=false;
        setTimeout(() => {
            cross=true;
        }, 1000);

    }
}, 100);

function updateScore(score){
    scoreCont.innerHTML="Your Score:"+score
}
