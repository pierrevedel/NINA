// Tableau de textes préparés
const preparedTexts = [
    "mon père me disait",
    "si j'avais de l'argent je ferais",
    "quand je ferme les yeux, je vois"
];

// Gestion du bouton
document.getElementById("update-button").addEventListener("click", () => {
    const userInput = document.getElementById("user-input").value.trim();
    if (userInput === "") {
        alert("Veuillez entrer un texte.");
        return;
    }

    // Sélection d'un texte préparé au hasard
    const preparedText = preparedTexts[Math.floor(Math.random() * preparedTexts.length)];

    // Mettre à jour le texte sur l'image
    document.getElementById("dynamic-text").innerText = `${preparedText} ${userInput}`;

    // Mettre à jour l'image
    const randomIndex = Math.floor(Math.random() * 5) + 1; // Choisir un nombre entre 1 et 10
    document.getElementById("dynamic-image").src = `images/img${randomIndex}.jpg`;
});
