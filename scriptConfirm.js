const confirmBtn = document.getElementById("confirmBtn");
const modal = document.getElementById("confirmationModal");
const confirmAction = document.getElementById("confirmAction");
const cancelAction = document.getElementById("cancelAction");

// Ouvrir la boîte de dialogue
confirmBtn.addEventListener("click", function () {
  modal.style.display = "block";
});

// Fermer la boîte de dialogue
cancelAction.addEventListener("click", function () {
  modal.style.display = "none";
});

// Action de confirmation
confirmAction.addEventListener("click", function () {
  alert("Action confirmée !");
  modal.style.display = "none"; // Fermer la boîte de dialogue
});

// Fermer la boîte de dialogue si l'utilisateur clique en dehors de celle-ci
window.addEventListener("click", function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});
