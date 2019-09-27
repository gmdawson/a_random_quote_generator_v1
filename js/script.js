/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


/*** 
  Create the array of quote objects and name it `quotes`.
  Add at least five quote objects to the `quotes` array.
  Give each quote object a `quote` and `source` property.
  Add the `citation` property to at least one object in the array.
  Add the `year` property to at least one object in the array.
  Use console.log() to log your array of quotes to the console.
***/
let quotes = [
  {
    quote:“Three may keep a secret, if two of them are dead.”,
    source: "Benjamin Franklin",
    citation: "Poor Richard's Almanack",
    year: July 1735
    }
    {
      quote: “If violence is wrong in America, violence is wrong abroad. If it is wrong to be violent defending black women and black children and black babies and black men, then it is wrong for America to draft us, and make us violent abroad in defense of her. And if it is right for America to draft us, and teach us how to be violent in defense of her, then it is right for you and me to do whatever is necessary to defend our own people right here in this country.”,
    source: Malcom X,
    citation:"New York City Speech,
    year: Nov. 1963
    }
    {quote: "They [America] don't practice what they preach, whereas South Africa preaches and practices the same thing. I have more respect for a man who lets me know where he stands, even if he's wrong, than the one who comes up like an angel and is nothing but a devil.",
    source: "Malcom X",
    citation: "Malcolm X Lays Harlem Riot To ‘Scare Tactics’ of Police", The New York Times,
    year: July 21, 1964
  }
  {
    quote: "A journey of a thousand miles begins with a single step.", 
    source: Lao-tzu,
    citation: The Way of Lao-tzu,
    year: around the 600 BC - 400 BC
  }
  {quote: "You get freedom by letting your enemy know that you'll do anything to get your freedom; then you'll get it. It's the only way you'll get it.",
    source: "Malcom X",
    citation: "Advice to the Youth of Mississippi",
    year: December 31, 1964
}
] 



/***
  Create the `getRandomQuote` function to:
   - Create a variable to store a random number 
   - Cse the random number to `return` a random quote object from the `quotes` array.
***/

function getRandomQuote() {
  // generate a random number between 0 and the last index in the array parameter
  // use the random number and box notation to grab a random item from the quotes
  array
  // return the random item
  }


/***
  Create the `printQuote` function to: 
   - Call the `getRandomQuote` function and assign it to a variable.
   - Create a variable for the HTML string and set it equal to an empty string.
   - Use the HTML template in the instructions or the markup in the index.html file, AND 
     the random quote vairable to build your HTML string.
   - Add the quote and source section to the HTML string.
   - Use an if statement to check for the citation property before adding it to the HTML string.
   - Use an if statement to check for the year property before adding it to the HTML string.
   - Don't forget to close that final `p` tag.
   - Set the `innerHTML` of the `quote-box` div to the HTML string. 
***/

function printQuote() {
  // create a variable that calls the getRandomQuote() function
  // create a variable that initiates your HTML string
  // using the template in the project instructions, add the two default quote
  properties, quote and source
  // if there is a quote.citation property, add it the string
  // if there is a quote.year property, add it the string
  // close the string with the necessary closing HTML tags
  // set the innnerHTML of the .quote-box to the complete HTML string
  }


/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.