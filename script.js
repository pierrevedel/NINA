// Liste des images dynamiques et leurs textes
const dynamicData = [
    { text: "FICHUE BESTIOLE ; ELLE A DES DENTS REDOUTABLES ALORS JE PRÉFÈRE M’EN DÉBARRASSER AU CAS OÙ. IL Y A D’AILLEURS UN PROVERBE AFRICAIN QUI DIT", image: "images/img0.jpg" },
    { text: "JE VOUS DONNE UNE HEURE POUR TROUVER UNE SOLUTION. SINON JE ME CHARGE DE TOUT. ET NE ME DITES PAS QUE", image: "images/img1.jpg" },
    { text: "JE N’AI JAMAIS FUI. ET JE NE COMMENCERAI PAS AUJOURD’HUI. SURTOUT SI", image: "images/img2.jpg" },
];

// Cache les images et leurs textes
function hideImages() {
    const images = document.querySelectorAll(".strip-image");
    const texts = document.querySelectorAll(".overlay-text");

    images.forEach((img) => (img.style.display = "none"));
    texts.forEach((text) => (text.style.display = "none"));
}

// Affiche une image après l'animation de la barre de progression
function displayImageWithProgressBar(progressBarId, imageId, callback, duration = 1500) {
    const progressBar = document.getElementById(progressBarId);
    const image = document.getElementById(imageId);

    // Réinitialise la barre de progression
    progressBar.style.width = "0";
    progressBar.style.display = "block";
    image.style.display = "none";

    setTimeout(() => {
        progressBar.style.width = "100%"; // Animation de la barre
    }, 10);

    setTimeout(() => {
        progressBar.style.display = "none"; // Cache la barre
        image.style.display = "block"; // Affiche l'image

        if (callback) callback(); // Appelle la fonction suivante
    }, duration);
}

// Gère l'affichage des trois images
function displayStrip(userInput) {
    const randomIndex = Math.floor(Math.random() * dynamicData.length);
    const dynamicContent = dynamicData[randomIndex];
    const dynamicImage = document.getElementById("strip-image3");
    const overlayText = document.getElementById("dynamic-text");

    // Met à jour l'image dynamique
    dynamicImage.src = dynamicContent.image;

    // Affiche les images et le texte dynamique séquentiellement
    displayImageWithProgressBar("progress-bar1", "strip-image1", () => {
        displayImageWithProgressBar("progress-bar2", "strip-image2", () => {
            // Affiche l'image dynamique
            displayImageWithProgressBar("progress-bar3", "strip-image3", () => {
                overlayText.style.display = "block";
                overlayText.innerText = `${dynamicContent.text} ${userInput}`;
            });
        });
    });
}

// Gestion du clic sur le bouton
document.getElementById("update-button").addEventListener("click", () => {
    const userInput = document.getElementById("user-input").value.trim();
    if (userInput === "") {
        alert("Veuillez entrer un texte.");
        return;
    }

    // Masque les images et le texte dynamique
    hideImages();

    // Lance l'affichage des images
    displayStrip(userInput);
});
