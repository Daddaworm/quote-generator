document.addEventListener('DOMContentLoaded', function(){

fetchQuote() //1. ON PAGE LOAD - IMMEDIATELY CALLS fetchQuote() WHICH THEN FIRES getNewQuote() SO THAT CLIENT SEES A QUOTE ON PAGE LOAD

document.querySelector('#new-quote-button').addEventListener('click', fetchQuote) // FIRES EACH TIME THE CLIENT PRESSES THE "GET NEW QUOTE BUTTON"

document.querySelector('#add-to-list-button').addEventListener('click', addToList) // FIRES EACH TIME THE CLIENT PRESSES THE ADD TO LIST BUTTON.  

})


function fetchQuote(){ //fetches quote data (both quote and author)
    fetch('https://api.quotable.io/random')
      .then(resp => resp.json()) // TAKES THE RESPONSE DATA FROM THE FETCH AND CONVERTS THAT RESPONSE INTO JSON
      .then(data => getNewQuote(data)) //2. TAKES THE JSON DATA AND CALLS getNewQuote() EVERY TIME CLIENT CLICKS 'GET NEW QUOTE' BUTTON.
        // console.log(data) // CONSOLE LOGS DATA RETURNED BY FETCH TO ENSURE IT WAS RECEIVED PROPERLY
        // console.log(data.content); // CONSOLE LOGS DATA  AND ACCESSES THE QUOTE INFO.
        // console.log(data.author) // CONSOLE LOGS DATA AN AND ACCESSES THE AUTHOUR INFO.
        // console.log(data.authorSlug) // NOT SURE WHAT authorSlug info is but it is not needed for this project.
}

// GLOBAL VARIABLES DECLAIRED
const h3 = document.createElement('h3')
const contentDiv = document.querySelector('#quote-content-div')
const p = document.createElement('p')

function getNewQuote(quoteData){ //3. DATA FROM FETCH IS  PASSED INTO THIS FUNCTION.  IT IS THEN BROKEN DOWN INTO SEPARATE ELEMENTS BASED ON QUOTE OR AUTHOR
    //console.log(quoteData); // CONSOLE LOGED TO ENSURE DATE IS BEING PASSED CORRECTLEY. (AND IT IS!)
    h3.style.textAlign ="center"; //<----not sure this is even working.....test it out without this line of code to ensure that it is working correctly. Delete if not nessecary.
    h3.setAttribute('id', 'quotes') // ADDS AN id ATTRIBUTE OF 'quotes' TO THE <h3> TAG.
    h3.innerHTML = quoteData.content; // PASSES THE QUOTE DATA INTO <H3> ELEMENT
    contentDiv.appendChild(h3) // APPENDS THE <H3> WITH QUOTE DATA INSIDE 
    p.style.textAlign = "right"; // ALIGNS THE <p> WITH AUTHORS NAME TO THE RIGHT INSIDE THE DIV.
    p.innerHTML = quoteData.author; // PASSES THE AUTHOR DATA INTO THE <P> ELEMENT
    h3.appendChild(p) // APPENDS THE <P> WITH THE AUTHOR DATA INSIDE TO THE <H3>
}



function addToList(){  // FIRED EACH TIME THE CLIENT PRESSES THE "ADD TO LIST" BUTTON.
  let li = document.createElement('li'); // DECLAIRES A VARIABLE OF li AND SETS THE VALUE TO CREATE A NEW <li>
  let listUl = document.getElementById('list-ul') // DECLAIRS A VARIABLE OF listUl AND SETS VALUE TO GRAB 'list-ul' element.
  listUl.appendChild(li); // APPEND THE <li>  TO THE <ul> WITH ID OF 'list-ul'
  let listValue = document.getElementById('quotes').innerHTML;
  li.innerHTML = listValue;
  li.style.cursor = "pointer"; // CHANGES DEFAULT CURSOR OF EACH <li> TO LOOK LIKE A HAND SO CLIENT CAN SEE THAT THE <li> IS CLICKABLE
  let hr = document.createElement('hr')
  li.appendChild(hr);
  li.addEventListener('click', () => {
  li.remove()
  })
  
}

