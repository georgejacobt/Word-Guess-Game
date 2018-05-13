
var wordsList =[];

wordsList.push("")


//var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];



var word = "dinosaur";

var wordLength = word.length; 

console.log("Guess this" +" "+ wordLength + " "+ "letter word!!");

var dashes = [];

var wordArray = [];

for (let i=0; i < wordLength; i++)

wordArray.push(word.charAt(i));

//console.log(wordArray);



for (let i=0; i < wordLength; i++)
dashes.push("_"+" ");

//dashes.splice(0, 1, 'g'+' ');

var drawDash = dashes[0];

for (let i=1; i<wordLength; i++)
drawDash = drawDash + dashes[i];

console.log(drawDash);




document.getElementById("wordBlank").innerHTML = drawDash;

var guessArray =[];


//function guessXtract() {
    
  document.onkeypress=function(e){
    begin();
}
  
document.onkeyup = function(begin){

var guessLetter = event.key.toLowerCase();

/*var fruit =["a"]
     var price = [1.25, 1.50]

     const indexOfA = fruit.indexOf("a")
     const priceOfA = price[indexOfA]*/




}

  
  if (event.keyCode >= 65 && event.keyCode <=122 ){
      
     
    guessArray.push(guessLetter);    
    for (let i =0; i < wordLength; i++){
      if (guessLetter === wordArray[i]) {
         console.log("Great guessing");
         dashes.splice(i,1,guessLetter+' ');
         
      }
      
    }
    var sum = '';
    for (let i= 0; i < wordLength; i++)
        sum = sum + dashes[i];
    
   console.log(sum);
 


   document.getElementById("wordBlank").innerHTML = sum;
   
}

var input = document.getElementById("guess");
let tries =12;
input.addEventListener("keyup", function () {
      tries = tries -1;  
      document.getElementById("numberTries").innerHTML = tries;
    
    

});

//}

/*var fruit =["a"]
     var price = [1.25, 1.50]

     const indexOfA = fruit.indexOf("a")
     const priceOfA = price[indexOfA]*/


