// Funzione per mostrare una sezione specifica
function showSection(sectionId) {
    // Nascondi tutte le sezioni
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.remove('active');
    });

    // Mostra la sezione selezionata
    const selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.classList.add('active');
    }
}

// Mostra la homepage all'avvio
document.addEventListener('DOMContentLoaded', () => {
    showSection('home');
});
