const uploadZone = document.getElementById('upload');
const fileInput = document.getElementById('file-input');

// Gérer le clic sur la zone de téléversement
uploadZone.addEventListener('click', () => {
    fileInput.click();
});

// Gérer le drag and drop
uploadZone.addEventListener('dragover', (e) => {
    e.preventDefault(); // Empêche le comportement par défaut
    uploadZone.style.border = '2px dashed #007bff'; // Ajoute un style pour indiquer le drop
});

uploadZone.addEventListener('dragleave', () => {
    uploadZone.style.border = ''; // Réinitialise le style
});

uploadZone.addEventListener('drop', (e) => {
    e.preventDefault(); // Empêche le comportement par défaut
    uploadZone.style.border = ''; // Réinitialise le style
    const files = e.dataTransfer.files; // Récupère les fichiers glissés
    handleFiles(files);
});

// Gérer les fichiers sélectionnés manuellement
fileInput.addEventListener('change', () => {
    const files = fileInput.files; // Récupère les fichiers sélectionnés
    handleFiles(files);
});

// Fonction pour afficher les fichiers
function handleFiles(files) {
    for (const file of files) {
        console.log(`Fichier téléversé : ${file.name}`);
        // Vous pouvez ici gérer l'affichage ou le traitement des fichiers
    }
}

uploadZone.addEventListener('click', () => {
    uploadZone.style.borderColor = "red"; // Change la bordure au clic
    fileInput.click();
});
