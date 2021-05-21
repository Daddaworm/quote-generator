document.addEventListener('DOMContentLoaded', function(){

fetchQuote() 
document.querySelector('#new-quote-button').addEventListener('click', fetchQuote) 
document.querySelector('#add-to-list-button').addEventListener('click', addToList)   

})


function fetchQuote(){ 
    fetch('https://api.quotable.io/random')
      .then(resp => { 
        return resp.json()
      })
      .then(data => getNewQuote(data)) 
        
}

// GLOBAL VARIABLES DECLAIRED
const h3 = document.createElement('h3')
const contentDiv = document.querySelector('#quote-content-div')
const p = document.createElement('p')

function getNewQuote(quoteData){ 
    h3.style.textAlign ="center"; 
    h3.setAttribute('id', 'quotes') 
    h3.innerHTML = quoteData.content; 
    contentDiv.appendChild(h3) 
    p.style.textAlign = "right"; 
    p.innerHTML = quoteData.author; 
    h3.appendChild(p) 
}



function addToList(){  
  fetchQuote();
  let li = document.createElement('li'); 
  let listUl = document.getElementById('list-ul') 
  listUl.appendChild(li); 
  let listValue = document.getElementById('quotes').innerHTML;
  li.innerHTML = listValue;
  li.style.cursor = "pointer"; 
  let hr = document.createElement('hr')
  li.appendChild(hr);
  li.addEventListener('click', () => {
  li.remove()
  })
  
}

// when user clicks add to list a new quote is generated
