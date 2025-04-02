document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Empêche l'envoi du formulaire pour validation côté client

    var studentId = document.getElementById('studentId').value;
    var password = document.getElementById('password').value;
    var errorNotification = document.getElementById('errorNotification');

    // Vérification de l'identifiant et du mot de passe
    if (studentId.slice(-4) === "2024" && password.slice(-4) === "2024" && studentId.length === 9 && password.length === 9) {
        // Si l'identifiant et le mot de passe sont valides, redirection vers le tableau de bord
        window.location.href = "dashboard.html"; // Redirige vers la page dashboard
    } else {
        // Afficher un message d'erreur en cas de mauvaise combinaison
        errorNotification.textContent = "Identifiant ou mot de passe incorrect.";
        errorNotification.style.display = "block"; // Afficher la notification d'erreur
    }
});
