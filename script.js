// Texte préparé
const preparedText = " - Ceci est un ajout préparé";

// Gestion du bouton
document.getElementById("update-button").addEventListener("click", () => {
    const userInput = document.getElementById("user-input").value.trim();
    if (userInput === "") {
        alert("Veuillez entrer un texte.");
        return;
    }

    // Mettre à jour le texte sur l'image
    document.getElementById("dynamic-text").innerText = userInput + preparedText;

    // Mettre à jour l'image
    const randomIndex = Math.floor(Math.random() * 10) + 1; // Choisir un nombre entre 1 et 10
    document.getElementById("dynamic-image").src = `images/img${randomIndex}.jpg`;
});
