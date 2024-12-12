// Liste des images dynamiques et leurs textes
const dynamicData = [
    { text: "FICHUE BESTIOLE ; ELLE A DES DENTS REDOUTABLES ALORS JE PRÉFÈRE M’EN DÉBARRASSER AU CAS OÙ. IL Y A D’AILLEURS UN PROVERBE AFRICAIN QUI DIT", image: "images/img0.jpg" },
    { text: "JE VOUS DONNE UNE HEURE POUR TROUVER UNE SOLUTION. SINON JE ME CHARGE DE TOUT. ET NE ME DITES PAS QUE", image: "images/img1.jpg" },
    { text: "JE N’AI JAMAIS FUI. ET JE NE COMMENCERAI PAS AUJOURD’HUI. SURTOUT SI", image: "images/img2.jpg" },
];

// Fonction pour afficher la progress bar et l'image dynamique
function displayDynamicImage(userInput) {
    const randomIndex = Math.floor(Math.random() * dynamicData.length);
    const dynamicContent = dynamicData[randomIndex];
    const dynamicImage = document.getElementById("strip-image3");
    const overlayText = document.getElementById("dynamic-text");
    const progressBar = document.getElementById("progress-bar");

    // Initialisation de la barre de progression
    progressBar.style.width = "0";
    progressBar.style.display = "block";
    dynamicImage.style.display = "none";
    overlayText.style.display = "none";

    setTimeout(() => {
        progressBar.style.width = "100%"; // Remplit la barre
    }, 10);

    setTimeout(() => {
        progressBar.style.display = "none"; // Cache la barre
        dynamicImage.src = dynamicContent.image; // Charge l'image
        dynamicImage.style.display = "block"; // Affiche l'image

        setTimeout(() => {
            overlayText.style.display = "block";
            overlayText.innerText = `${dynamicContent.text} ${userInput}`;
        }, 100); // Afficher le texte après un court délai
    }, 1500); // La durée de la barre de progression
}

// Gestion du clic sur le bouton
document.getElementById("update-button").addEventListener("click", () => {
    const userInput = document.getElementById("user-input").value.trim();
    if (userInput === "") {
        alert("Veuillez entrer un texte.");
        return;
    }

    displayDynamicImage(userInput);
});
