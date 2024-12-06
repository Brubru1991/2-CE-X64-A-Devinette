// script.js

// Définition des variables
const min = 1;
const max = 100;
const nombreMystere = Math.floor(Math.random() * max) + min; // Nombre entre 1 et 100
let tentative = 0;

// Récupération des éléments du DOM
const guessInput = document.getElementById("guessInput");
const submitGuess = document.getElementById("submitGuess");
const feedback = document.getElementById("feedback");
const attempts = document.getElementById("attempts");

// Gestion de l'événement au clic du bouton
submitGuess.addEventListener("click", () => {
    const reponse = guessInput.value;
    tentative++;

    if (!reponse) {
        feedback.textContent = "Veuillez entrer un nombre.";
        feedback.style.color = "red";
        return;
    }

    const nombre = parseInt(reponse, 10);

    if (isNaN(nombre)) {
        feedback.textContent = "Ce n'est pas un nombre valide.";
        feedback.style.color = "red";
    } else if (nombre < nombreMystere) {
        feedback.textContent = "C'est plus !";
        feedback.style.color = "orange";
    } else if (nombre > nombreMystere) {
        feedback.textContent = "C'est moins !";
        feedback.style.color = "orange";
    } else {
        feedback.textContent = `Félicitations ! Vous avez trouvé le nombre ${nombreMystere} en ${tentative} tentative(s).`;
        feedback.style.color = "green";
        guessInput.disabled = true;
        submitGuess.disabled = true;
    }

    attempts.textContent = `Tentatives : ${tentative}`;
});
