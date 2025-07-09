
const formulaire = document.getElementById('formulaire')
let quoteCount = 1

// Ajoute un écouteur d'événement qui va se déclencher à chaque fois que le formulaire est soumis
formulaire.addEventListener('submit', (event) => {                  // function (e)
    event.preventDefault()                                          // Empêche le rechargement de la page

    const text = document.getElementById("citation").value          // .value.trim() enlever les espaces blancs
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

//^ CORRECTION

/* Voici la version simplifiée

const form = document.getElementById("quote-form")
let quotes = [];


form.addEventListener("submit", function (event) {
  event.preventDefault();
  const quote = document.getElementById("quote-text").value.trim();
  const author = document.getElementById("quote-author").value.trim();

  console.log("quote is", quote)
  console.log("author is", author)


  quotes.push({ text: quote, author: author });
  localStorage.setItem("quotes", JSON.stringify(quotes));

const storedQuotes = localStorage.getItem("quotes");
console.log(storedQuotes)
});
NOUVEAU
[18:21]
***

Et la version complète:

// Variable globale pour compter les citations
let quoteCount = 0;
// Tableau vie pour receuillir les citations
let quotes = [];

// Fonction d'affichage d'une citation dans le DOM 
function renderQuote(quote, author) {
  const textP = document.createElement("p");


  const authorP = document.createElement("p");
 

  const quoteDiv = document.createElement("div");

  quoteDiv.appendChild(textP);
  quoteDiv.appendChild(authorP);

  document.getElementById("quote-list").appendChild(quoteDiv);

  quoteCount += 1;
  document.getElementById("count").innerText = ${quoteCount} citation${quoteCount > 1 ? "s" : ""};
}

// Fonction d'ajout dans le stockage 
function addQuote(quote, author) {
  quotes.push({ text: quote, author: author });
  localStorage.setItem("quotes", JSON.stringify(quotes));
  renderQuote(quote, author);
}

// Chargerment des citations depuis le localStorage
const storedQuotes = localStorage.getItem("quotes");

if (storedQuotes) {
  quotes = JSON.parse(storedQuotes);
  document.getElementById("quote-list").innerHTML = ""; // Vider d'abord quote-list
  quoteCount = 0; // Réinitialiser le compteur aussi
  quotes.forEach(({ text, author }) => {
    renderQuote(text, author); 
  });
}

// Ecouteur d‘événement sur le formulaire
document.getElementById("quote-form").addEventListener("submit", function (event) {
  event.preventDefault();
  const quote = document.getElementById("quote-text").value.trim();
  const author = document.getElementById("quote-author").value.trim();

  if (quote && author) {
    addQuote(quote, author);

    // Vide les champs du formulaire
    document.getElementById("quote-text").value = "";
    document.getElementById("quote-author").value = "";
  }
}); */
