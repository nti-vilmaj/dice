document.querySelector('button').addEventListener('click', randomDice);


function randomDice (){
  
    let nr = Math.floor((Math.random()*6) +1);
    // console.log(nr)
    document.querySelector('img'). src = nr + '.png';
} 