const btns = document.querySelectorAll(".btn");
const output = document.querySelector(".notifications");

const notifications = [
  {
    type: "info",
    title: "John Doe",
    message: "Super, merci beaucoup pour la réponse rapide!",
    icon: `<svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
<path fill-rule="evenodd" d="M3.559 4.544c.355-.35.834-.544 1.33-.544H19.11c.496 0 .975.194 1.33.544.356.35.559.829.559 1.331v9.25c0 .502-.203.981-.559 1.331-.355.35-.834.544-1.33.544H15.5l-2.7 3.6a1 1 0 0 1-1.6 0L8.5 17H4.889c-.496 0-.975-.194-1.33-.544A1.868 1.868 0 0 1 3 15.125v-9.25c0-.502.203-.981.559-1.331ZM7.556 7.5a1 1 0 1 0 0 2h8a1 1 0 0 0 0-2h-8Zm0 3.5a1 1 0 1 0 0 2H12a1 1 0 1 0 0-2H7.556Z" clip-rule="evenodd"/>
</svg>
`,
  },
  {
    type: "success",
    title: "Changement enregistré",
    message: "La date du contrat a été changée avec succès.",
    icon: `<svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
               <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
            </svg>`,
  },
  {
    type: "danger",
    title: "Document supprimé",
    message: "Document supprimé avec succès.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M3 6h18a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2zm1 4h16v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V10zm2 0v10h12V10H6z"/></svg>`,
  },
];

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    const id = btn.dataset.alert;
    const n = createNotification(notifications[id]);
    output.appendChild(n);
  });
});

function createNotification({ type, title, message, icon }) {
  const notification = document.createElement("div");
  notification.classList.add("notifications", type);
  notification.innerHTML = `
          <div>
              <span class="icon">${icon}</span>
              <div>
                  <h3>${title}</h3>
                  <p>${message}</p>
              </div>
              <span class="close-btn">×</span>
          </div>
      `;
  notification.querySelector(".close-btn").addEventListener("click", () => {
    notification.remove();
  });
  return notification;
}
