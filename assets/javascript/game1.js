
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
console.log("Your Dinosaor is:"+" "+ word);
let wordLength = word.length;
console.log("Word Length:"+ " "+ wordLength);
let wordToArray = [];
let win =0;
let check = "_"+" ";
let complete = null;
let winFlag = false;
let sum ='';


for (let i=0; i < wordLength; i++){
    wordToArray.push(word.charAt(i));
}

let dashes = [];
  let drawDash = "_"+' ' ;


for (let i=0; i < wordLength ; i++)
dashes.push("_"+' ');

let guesses = 13;

function presentDashes (){
  

for (let i =0; i < wordLength; i++)
sum = sum + dashes[i];

document.getElementById("wordBlank").innerHTML = sum;
//return sum;
}

//document.onkeypress=function(e){
    
//}
//let guessLetterPrint = ' '; 
let guessLetterArray = [];
var kick = 0;let flag = 0; 
document.onkeyup = function(){start()};

function start(){
    let guessLetterPresent = "";
     
   if (kick===0){
       presentDashes();
       document.getElementById("press").innerHTML = ''; 
       document.getElementById("tries").innerHTML = 'Guesses Remaining:'+' '+ guesses; 
       document.getElementById("win").innerHTML = "Win Count:"+" "+ win;
       document.getElementById('audio').play();
       }
       kick = 1;
      
   //console.log(kick);
   if (guesses > 0){
   let guessLetter = event.key.toLowerCase();
   if (winFlag === false){
       guesses = guesses -1; 
   }
  
   
   //console.log(word);
   //console.log(guessLetter);
   //console.log(wordLength); 
   if (guesses > 0 && winFlag === false)
      guessLetterArray.push(guessLetter); 
   //console.log(guessLetterArray);
   else {
      //console.log("Fire play it again function");
       //kick = 0;
       //word = pickWord();
       alert("Do you want to play another round?");
       guesses = 13;
       kick = 0;
       winFlag = false;
       guessLetterArray=[];
       word = pickWord();

       console.log(word);
       wordLength = word.length;
       wordToArray=[];
       for (let i=0; i < wordLength; i++){
        wordToArray.push(word.charAt(i));}
       sum ='';
       dashes=[];
       for (let i=0; i < wordLength ; i++)
          dashes.push("_"+' ');
       presentDashes(); 
      // guessLetterPresent ="";
      //console.log(sum);
     // console.log(dashes);
      guessLetterArray =[];
      guessLetterPresent ="";
      console.log(guessLetterPresent);
      document.getElementById("guessedWords").innerHTML = "Letters Guessed:"+" "+ guessLetterPresent;
     
      //dashes=[];
      // presentDashes.sum ='';
       //presentDashes();
      // wordLength = word.length;*/
       



       
   }

   
   
   
   
   for (let i=1; i < guessLetterArray.length; i++){
       guessLetterPresent = guessLetterPresent + " " +guessLetterArray[i] + ",";
       //console.log(guessLetterPresent);
       document.getElementById("guessedWords").innerHTML = "Letters Guessed:"+" "+ guessLetterPresent;
   }
   
 
   
    

  for (let i=0; i < wordLength; i++){
       //console.log("here");
       if( guessLetter === wordToArray[i]){
         // console.log("Great Guess");
          dashes.splice(i,1,guessLetter+' ');
          const indexOfDash = dashes.indexOf("_"+" ");
          //console.log(indexOfDash);
          if(indexOfDash === -1){
              win = win+1;
              winFlag = true;
            document.getElementById("win").innerHTML = "Win Count:"+" "+ win;
            document.getElementById("press").innerHTML = "You WON!!";
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

    //console.log(sumCurrent);
    document.getElementById("wordBlank").innerHTML = sumCurrent;
    document.getElementById("tries").innerHTML = 'Guesses Remaining:'+' '+ guesses; 
}
else { 
    document.getElementById("press").innerHTML = "You have reached maximum guesses";
    
}
if (guesses === 6){
    document.getElementById("hint").innerHTML = "Hint: Check the console";
}

}   





    
 

    

   







