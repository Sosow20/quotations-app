const formulaire = document.getElementById("formulaire")
let quoteCount = 0
const count = document.getElementById("count")

formulaire.addEventListener("submit", () => {
    const text = document.getElementById("citation")
    const author = document.getElementById("nom")
    // console.log(text, author)
    addQuote()
}
)

function addQuote(quote, author) {
    quoteCount += 1
    const quote = document.createElement("p")
    const author = document.createElement("p")
    const quoteList = document.getElementById("quote-list")
    quote.classList.add("text")
    quote.innerText = "On ne naît pas femme, on le devient."
    quoteList.appendChild("citation")
    author.classList.add("author")
    author.innerText = "Simone de Beauvoir"
    quoteList.appendChild("nom")
}
addQuote()