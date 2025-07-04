const formulaire = document.getElementById("formulaire")
let quoteCount = 0


formulaire.addEventListener("submit", (event) => {
    event.preventDefault()

    const text = document.getElementById("citation").value
    const author = document.getElementById("nom").value
    console.log(text)
    console.log(author)
    addQuote(text, author)
}
)

function addQuote(text, author) {

    const count = document.getElementById("count")
    quoteCount += 1
    count.innerText = quoteCount

    const quoteList = document.getElementById("quote-list")
    const quote =

    const text1 = document.createElement("p")  
    text1.classList.add("text")
    text1.innerText = text

     document.getElementsByClassName("quote").appendChild(text1)
     document.getElementsByClassName("quote").appendChild(author1)

    const author1 = document.createElement("p")
    author1.classList.add("author")
    author1.innerText = author

    quoteList.appendChild(quote)                              // quote enfants de quote-list 

}
addQuote()