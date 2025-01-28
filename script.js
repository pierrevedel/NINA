// Liste des couples d'images statiques (les images 1 et 2 sont liées)
const staticCouples = [
    { img1: "images/couple1_img1.jpg", img2: "images/couple1_img2.jpg" },
    { img1: "images/couple2_img1.jpg", img2: "images/couple2_img2.jpg" },
    { img1: "images/couple3_img1.jpg", img2: "images/couple3_img2.jpg" },
	{ img1: "images/couple4_img1.jpg", img2: "images/couple4_img2.jpg" },
	{ img1: "images/couple5_img1.jpg", img2: "images/couple5_img2.jpg" },
	{ img1: "images/couple6_img1.jpg", img2: "images/couple6_img2.jpg" },
    { img1: "images/couple7_img1.jpg", img2: "images/couple7_img2.jpg" },
    { img1: "images/couple8_img1.jpg", img2: "images/couple8_img2.jpg" },
];

// Liste des images dynamiques et leurs textes
const dynamicData = [
    { text: "FICHUE BESTIOLE ; ELLE A DES DENTS REDOUTABLES ALORS JE PRÉFÈRE M’EN DÉBARRASSER AU CAS OÙ. IL Y A D’AILLEURS UN PROVERBE AFRICAIN QUI DIT", image: "images/img0.jpg" },
    { text: "JE VOUS DONNE UNE HEURE POUR TROUVER UNE SOLUTION. SINON JE ME CHARGE DE TOUT. ET NE ME DITES PAS QUE", image: "images/img1.jpg" },
    { text: "JE N’AI JAMAIS FUI. ET JE NE COMMENCERAI PAS AUJOURD’HUI. SURTOUT SI", image: "images/img2.jpg" },
	{ text: "VOUS POUVEZ M’ENLEVER MA LIBERTÉ DE PENSER MAIS VOUS NE M’EMPÊCHEREZ PAS DE DIRE QUE", image: "images/img3.jpg" },
	{ text: "ON NE PEUT PAS TUER UN GROUPE FINANCIER, BANDE DE RACAILLES. LA SEULE CHOSE POSSIBLE C’EST QUE", image: "images/img4.jpg" },
	{ text: "ÉCOUTEZ-MOI BIEN LES LOUSTICS, IL A Y A DEUX CHOSES QUE JE DÉTESTE : LES ONGLES, ET LES GENS QUI DISENT QUE", image: "images/img5.jpg" },
	{ text: "LA VIE, ÇA ME FAIT PENSER À CE VERRE DE WHISKY.  C’EST FROID DEHORS ET MOUILLÉ DEDANS. ET AUSSI, ÇA ME FAIT PENSER QUE", image: "images/img6.jpg" },
	{ text: "AHAH ! VIEUX TROUBLION ! VIEUX SACRISPAN ! ON EST FAIT DU MÊME BOIS TOI ET MOI ! LE BOIS QUI FAIT QUE", image: "images/img7.jpg" },
	{ text: "À CETTE BELLE VICTOIRE ! QUI EN AMÈNERA D’AUTRES ! QUI EN AMÈNERONT D’AUTRES ! ET QUI AMÈNERONT QUE", image: "images/img8.jpg" },
	{ text: "LE PROCHAIN QUI MOUFTE, JE LE DÉPOSE AU PREMIER SAINT- MACLOU QU’ON CROISE. DANS MA VOITURE, LA RÈGLE N°1 C’EST :", image: "images/img9.jpg" },
];

let lastStaticCouple = null; // Stocke le dernier couple affiché

// Sélectionne un couple d'images statiques aléatoires (différent du précédent)
function initializeStaticImages() {
    let randomCouple;
    
    do {
        randomCouple = staticCouples[Math.floor(Math.random() * staticCouples.length)];
    } while (lastStaticCouple && randomCouple.img1 === lastStaticCouple.img1);

    lastStaticCouple = randomCouple; // Mémorise le couple actuel

    document.getElementById("strip-image1").src = randomCouple.img1;
    document.getElementById("strip-image2").src = randomCouple.img2;

    document.getElementById("strip-image1").style.display = "block";
    document.getElementById("strip-image2").style.display = "block";

    console.log("Nouveau couple affiché :", randomCouple);
}

// Cache uniquement la 3e image et son texte
function hideDynamicImage() {
    document.getElementById("strip-image3").style.display = "none";
    document.getElementById("dynamic-text").style.display = "none";
}

// Affiche la 3e image après la barre de progression
function displayDynamicImage(userInput) {
    const randomDynamic = dynamicData[Math.floor(Math.random() * dynamicData.length)];
    const dynamicImage = document.getElementById("strip-image3");
    const overlayText = document.getElementById("dynamic-text");
    const progressBar = document.getElementById("progress-bar3");

    dynamicImage.src = randomDynamic.image;

    // Réinitialise la barre de progression et masque l'image
    progressBar.style.width = "0";
    progressBar.style.display = "block";
    dynamicImage.style.display = "none";
    overlayText.style.display = "none";

    setTimeout(() => {
        progressBar.style.width = "100%";
    }, 10);

    setTimeout(() => {
        progressBar.style.display = "none";
        dynamicImage.style.display = "block";
        
        setTimeout(() => {
            overlayText.style.display = "block";
            overlayText.innerText = `${randomDynamic.text} ${userInput}`;
        }, 100);
        
        resetUserInput();
    }, 1500);
}

// Réinitialise le champ d'entrée avec un message par défaut
function resetUserInput() {
    const userInputField = document.getElementById("user-input");
    userInputField.value = "";
    userInputField.placeholder = "Ici, rédigez un prompt pour générer une chute";
}

// Gestion du clic sur le bouton pour générer la 3e image
document.getElementById("update-button").addEventListener("click", () => {
    const userInput = document.getElementById("user-input").value.trim();
    if (userInput === "") {
        alert("Veuillez entrer un texte.");
        return;
    }

    hideDynamicImage();
    displayDynamicImage(userInput);
});

// Réinitialisation complète en cliquant sur le champ input
document.getElementById("user-input").addEventListener("focus", () => {
    initializeStaticImages();
    hideDynamicImage();
});

// Initialise les images statiques et l'input au chargement de la page
window.onload = () => {
    initializeStaticImages();
    hideDynamicImage();
    resetUserInput();
};
