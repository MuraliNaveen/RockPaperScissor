
let score=JSON.parse(localStorage.getItem('score'))||{

    wins:0,
    loss:0,
    ties:0
 
 
     };
updateScore();


//!score
/*if(score===null){
    score={

   wins:0,
   loss:0,
   ties:0


    };
}*/

console.log(score);
    function playGame(playerMove){
        let result='';
        const computermove= computermoves();

        const imageMap = {
            rock: 'rock-emoji_ktfa0t.png',
            paper: 'paper-emoji_1_t9ceee.png',
            scissor: 'scissor-emoji_n7h1ie.png',
        };

        
            if (playerMove==='scissor'){


         
            if(computermove==='rock'){
            result='You Loss';
            }
            else if(computermove==='paper'){

            result='You Win';
            }
            else if(computermove==='scissor'){
            result='Tie';
            }
        }
            else if(playerMove==='rock'){
                  
                    if(computermove==='rock'){
                        result='Tie';
                            }
                    else if(computermove==='paper'){
                    
                         result='You Loss';
                    }
                    else if(computermove==='scissor'){
                         result='You Win';
                    }
            }

               else if(playerMove==="paper"){
                          

                        if(computermove==='rock'){
                        result='You Win';
                        }
                        else if(computermove==='paper'){
                        
                        result='Tie';
                        }
                        else if(computermove==='scissor'){
                        result='You Loss';
                        }
               }

            
            if(result==='You Win'){
                   score.wins += 1;

            }
            else if(result==='You Loss'){
                 score.loss +=1;
            }
            else if(result==='Tie'){
                score.ties += 1;
            }


            localStorage.setItem('score',JSON.stringify(score));


            updateScore();
 

            document.querySelector('.js-result').innerHTML=result;
            document.querySelector('.js-moves').innerHTML=`You
 <img src="https://res.cloudinary.com/dko49jfq3/image/upload/v1734176809/${imageMap[playerMove]}" class="move-icon">
        <img src="https://res.cloudinary.com/dko49jfq3/image/upload/v1734176809/${imageMap[computermove]}" class="move-icon">
Computer `;

          /*  alert(`you picked ${playerMove} .computer picked ${computermove}.${result}
            wins:${score.wins}
            Loss:${score.loss}
            Tie:${score.ties}
            
            ` );*/
        } 

   function updateScore(){
    document.querySelector('.score').innerHTML=
    ` wins:${score.wins}
     Loss:${score.loss}
     Tie:${score.ties}
     
     `;

   }




 function computermoves(){
    const randomNumber=  Math.random();
   
    let computermove='';
      if(randomNumber>=0 && randomNumber <1/3 ){
    
     computermove='rock';
      }
    else if(randomNumber>=1/3 && randomNumber <2/3){
    
    computermove='paper';
    }
        else if(randomNumber>=2/3 && randomNumber <1){
    
       
     computermove='scissor';
        }
        console.log(computermove)
        return computermove
 }
 