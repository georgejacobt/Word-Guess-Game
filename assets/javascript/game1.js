
function pickWord (){
let wordsArray =["tyrannosaurusrex",
                "velociraptor",
                "triceratops",
                "apatosaurus",
                "diplodocus",
                "brachiosaurus",
                "carnotaurus",
                "stegosaurus",
                "spinosaurus",
                "ankylosaurus",
                "iguanodon",
                "allosaurus",
                "parasaurolophus",
                "deinonychus" ,
                "titanosaurs"];

var computerPick = wordsArray[Math.floor(Math.random() * wordsArray.length)];      
return computerPick;  

//let wordLength = computerPick.length ;



}

let word = pickWord();  
console.log(word);
let wordLength = word.length;
console.log(wordLength);
let wordToArray = [];
let win =0;
let check = "_"+" ";
let complete = null;


for (let i=0; i < wordLength; i++){
    wordToArray.push(word.charAt(i));
}

let dashes = [];
  let drawDash = "_"+' ' ;


for (let i=0; i < wordLength ; i++)
dashes.push("_"+' ');

let guesses = 13;

function presentDashes (){
  
let sum ='';
for (let i =0; i < wordLength; i++)
sum = sum + dashes[i];

document.getElementById("wordBlank").innerHTML = sum;
return sum;
}

//document.onkeypress=function(e){
    
//}

var kick = 0;let flag = 0;
document.onkeyup = function(start){
    
   if (kick===0){
       presentDashes();
       document.getElementById("press").innerHTML = ''; 
       document.getElementById("tries").innerHTML = 'Guesses Remaining:'+' '+ guesses; 
       document.getElementById("win").innerHTML = "Win Count:"+" "+ win;
       document.getElementById('audio').play();
       }
       kick = 1;

   //console.log(kick);
   if (guesses >= 1){
   let guessLetter = event.key.toLowerCase();
   guesses = guesses -1;
   //console.log(word);
   console.log(guessLetter);
   //console.log(wordLength);
    

  for (let i=0; i < wordLength; i++){
       //console.log("here");
       if( guessLetter === wordToArray[i]){
          console.log("Great Guess");
          dashes.splice(i,1,guessLetter+' ');
          const indexOfDash = dashes.indexOf("_"+" ");
          console.log(indexOfDash);
          if(indexOfDash === -1){
              win = win+1;
            document.getElementById("win").innerHTML = "Win Count:"+" "+ win;
            
          }
          
        
       }
    }
    for (let i=0; i < wordLength; i++){
        if (flag === dashes[i])
           complete = false;
        else complete = true;
    }

   

   let sumCurrent ='';
    for (let i=0; i < wordLength; i++)
        sumCurrent = sumCurrent + dashes[i];

    console.log(sumCurrent);
    document.getElementById("wordBlank").innerHTML = sumCurrent;
    document.getElementById("tries").innerHTML = 'Guesses Remaining:'+' '+ guesses; 
}
else { 
    document.getElementById("press").innerHTML = "You have reached maximum guesses";
}
}   

/*function addWin(){
console.log(this.indexOfDash);
win = win +1;
document.getElementById("win").innerHTML = "Win Count"+" "+ win;

}*/


    
 

    

   







