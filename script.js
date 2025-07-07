
const formulaire = document.getElementById('formulaire')            
let quoteCount = 1


formulaire.addEventListener('submit', (event) => {                  // Ajoute un écouteur d'événement qui va se déclencher à chaque fois que le formulaire est soumis
    event.preventDefault()                                          // Empêche le rechargement de la page

    const text = document.getElementById("citation").value          
    const author = document.getElementById("nom").value             
    addQuote(text, author)                                   
    formulaire.reset()                                              
}
)


// Fonction qui ajoute une nouvelle citation dans la page
function addQuote(text, author) {


    quoteCount += 1                                                
    const count = document.getElementById("count")                  
    count.innerText = `${quoteCount} citations`                     

    const citationText = document.createElement("p")
    citationText.classList.add("text")
    citationText.innerHTML = ` <strong> citation: </strong> "${text}"`   

    const citationAuteur = document.createElement('p')           
    citationAuteur.classList.add("author") 
    citationAuteur.innerHTML = `<strong> Auteur/Autrice: </strong> ${author}`          

    const citation = document.querySelector(".quote")
    citation.appendChild(citationText)                              
    citation.appendChild(citationAuteur)                          

    const quoteList = document.getElementById('quote-list')      
    quoteList.appendChild(citation)                                

}
