const formulaire = document.getElementById('formulaire')            // Récupère l'élément HTML du formulaire via son id "formulaire"

// Initialise une variable globale pour compter le nombre de citations affichées.
// On part de 1 car il y a déjà une citation dans le HTML au chargement.
let quoteCount = 1


formulaire.addEventListener('submit', (event) => {                  // Ajoute un écouteur d'événement qui va se déclencher à chaque fois que le formulaire est soumis
    event.preventDefault()                                           // Empêche le comportement par défaut du formulaire (rechargement de la page)

    const text = document.getElementById("citation").value          // Récupère la valeur saisie dans le champ input avec l'id "citation"
    const author = document.getElementById("nom").value             // Récupère la valeur saisie dans le champ input avec l'id "nom"
    addQuote(text, author)                                          // Appelle la fonction addQuote avec la citation et l'auteur récupérés pour les ajouter à la liste
    formulaire.reset()                                              // Réinitialise le formulaire, vide tous les champs input après soumission
}
)


// Fonction qui ajoute une nouvelle citation dans la page
// Elle prend deux paramètres : le texte de la citation et le nom de l'auteur
function addQuote(text, author) {


    quoteCount += 1                                                 // Incrémente le compteur global de citations
    const count = document.getElementById("count")                  // Récupère l'élément <h3> avec l'id "count" qui affiche le nombre de citations
    count.innerText = `${quoteCount} citations`                     // Met à jour le texte de ce compteur avec le nouveau nombre et le mot "citations"


    const citationText = document.createElement("p")                // Crée un nouvel élément <p> pour contenir le texte de la citation
    citationText.className = 'text'                                 // Ajoute la classe CSS "text" à cet élément pour pouvoir le styliser
    citationText.innerText = `"${text}"`                            // Met le texte de la citation entre guillemets dans cet élément

    const citationAuteur = document.createElement('p')              // Crée un nouvel élément <p> pour contenir le nom de l'auteur
    citationAuteur.className = 'author'                             // Ajoute la classe CSS "author" à cet élément pour le styliser différemment
    citationAuteur.innerText = author                               // Met le nom de l'auteur dans cet élément

    const citation = document.createElement('div')                  // Crée un élément <div> qui va contenir la citation complète (texte + auteur)
    citation.className = 'quote'                                    // Ajoute la classe CSS "quote" à ce conteneur
    citation.appendChild(citationText)                              // Ajoute le paragraphe texte dans ce conteneur
    citation.appendChild(citationAuteur)                            // Ajoute le paragraphe auteur dans ce conteneur

    const quoteList = document.getElementById('quote-list')         // Récupère l'élément contenant la liste des citations (div avec id "quote-list")
    quoteList.appendChild(citation)                                 // Ajoute la nouvelle citation (div) à la fin de cette liste dans le DOM

}
