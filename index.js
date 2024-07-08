function pickComputerMove(){

    let computerMove = '';

    const randomNumber = Math.random();

  if(randomNumber >= 0 && randomNumber < 1/5){
         computerMove = 1
    } else if (randomNumber >= 1/5 && randomNumber < 2/5){
         computerMove = 2
    } else if (randomNumber >= 2/5 && randomNumber < 3/5){
         computerMove = 3
    } else if (randomNumber >= 3/5 && randomNumber < 4/5){
         computerMove = 4
    } else if (randomNumber >= 4/5 && randomNumber < 1){
         computerMove = 5
    } 
 return computerMove;
}

function playGame(playerMove){
    const computerMove = pickComputerMove();
    let result = '';
    if(playerMove === 1){
    if(computerMove === 1){
       result =  'Guessing right!!!';
    } else if (computerMove === 2){
       result = 'You lose';
    } else if (computerMove === 3){
        result = 'You lose';
     } else if (computerMove === 4){
        result = 'You lose';
     } else if (computerMove === 5){
        result = 'You lose';
     }
    } else if (playerMove === 2){
        if(computerMove === 1){
           result =  'You lose';
        } else if (computerMove === 2){
           result = 'Guessing Right!!';
        } else if (computerMove === 3){
            result = 'You lose';
         } else if (computerMove === 4){
            result = 'You lose';
         } else if (computerMove === 5){
            result = 'You lose';
         }
    } else if (playerMove === 3){
        if(computerMove === 1){
           result =  'You lose';
        } else if (computerMove === 2){
           result = 'You lose';
        } else if (computerMove === 3){
            result = 'Guessing Right!!';
         } else if (computerMove === 4){
            result = 'You lose';
         } else if (computerMove === 5){
            result = 'You lose';
         }
    } else if (playerMove === 4){
        if(computerMove === 1){
           result =  'You lose';
        } else if (computerMove === 2){
           result = 'You lose';
        } else if (computerMove === 3){
            result = 'You lose';
         } else if (computerMove === 4){
            result = 'Guessing Right!!!';
         } else if (computerMove === 5){
            result = 'You lose';
         }
    } else if (playerMove === 5){
        if(computerMove === 1){
           result =  'You lose';
        } else if (computerMove === 2){
           result = 'You lose';
        } else if (computerMove === 3){
            result = 'You lose';
         } else if (computerMove === 4){
            result = 'You lose';
         } else if (computerMove === 5){
            result = 'Guessing Right!!!';
         }
        }
     alert(`you picked ${playerMove}. Computer picked ${computerMove}. ${result}`)
}