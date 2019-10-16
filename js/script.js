/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


/*** 
  The hardest part of this project was finding attributable quotes. So many of my favorite quotes have either no known author or was commonly attributed to the wrong person. I hope my quotes are not controversial but I really feel Malcom X speaks to all oppressed people. I wish our society would realize the extinct of oppression throughout history and honor all those who have been and are the victims of needless suffering. I believe Malcom X is one of the voices that speaks for them. We need to acknowledge that all humanity has equal value and judge people soley by they actions and not our stereotypes of them.
 ***/
 
let quotes = [
  {
    quote: "Three may keep a secret, if two of them are dead.",
    source: "Benjamin Franklin",
    citation: "Poor Richards Almanack",
    year :1735 } ,
    
    {
    quote :  "If violence is wrong in America, violence is wrong abroad. If it is wrong to be violent defending black women and black children and black babies and black men, then it is wrong for America to draft us, and make us violent abroad in defense of her. And if it is right for America to draft us, and teach us how to be violent in defense of her, then it is right for you and me to do whatever is necessary to defend our own people right here in this country." ,
    source: "Malcom X" ,
    citation: "New York City Speech",
    year : 1963 } ,
    
    {
      quote : "They [America] don't practice what they preach, whereas South Africa preaches and practices the same thing. I have more respect for a man who lets me know where he stands, even if he's wrong, than the one who comes up like an angel and is nothing but a devil.",
    source : "Malcom X",
    citation : "Malcolm X Lays Harlem Riot To ‘Scare Tactics’ of Police, The New York Times",
    year : 1964} ,
    
  {
    quote : "A journey of a thousand miles begins with a single step", 
    source  : "Lao-tzu",
    citation : "The Way of Lao-tzu" ,
    year : "unknown"},
  
  { 
    quote : "You get freedom by letting your enemy know that you'll do anything to get your freedom; then you'll get it. It's the only way you'll get it",
    source: "Malcom X",
    citation: "Advice to the Youth of Mississippi",
    year: 1964
}
] 



/***
  I am uncertain of how to attach my randonNumber to the quote index
   ***/

function getRandomQuote() {
  {
    let randomNumber = Math.floor(Math.random() *quotes.length);
   
     
    var quote = quotes[randomNumber].quote;
    var source = quotes[randomNumber].source;
    var citation = quotes[randomNumber].citation;
    var year = quotes[randomNumber].year;
   // return quotes[randomNumber];
    
    
    /*** <p class = 'quote'>  </p> 
    <p class ='source'> </p>
    <p class = 'citation'> </p>
    <p class = 'year'> </p>  ***/

   const outQuote= (quote + source + citation + year)
  return outQuote;

  //  I had my variables backwards before help.
  
    }
}

/***I was lost until Julian Johannesen helped me work through several points of confusion for me. I go on line and I look at inexact examples that are dissimular to what I need to code and my code fails. I am going to buy a Javascript reference book with examples of how to use each function and method and complete examples of sytax and a well constructed glossary that makes it easy to find what I need.
  
***/

function printQuote() {
 

  //const outQuoteBox = getRandonQuote ( )

    document.getElementById("quote-box").innerHTML = getRandomQuote()

 
  }

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


