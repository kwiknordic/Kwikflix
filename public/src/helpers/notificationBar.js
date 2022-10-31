export function showNotification(status) {

  // remove current element from DOM if new alert is triggered
  let notificationVisible = document.querySelector(".notification-bar")
  if (notificationVisible) notificationVisible.remove()

  // add new notificationBar-element to the page
  let template = notificationTemplate(status)
  let modal = template.content.cloneNode(true)
  document.body.prepend(modal)
  let notification = document.querySelector(".notification-bar")
  notification.classList.add("notification-bar-visible")

  // remove element from DOM when out of view
  notification.addEventListener("animationend", e => {
    if (e.animationName === "moveout") notification.remove()
  });
}

function notificationTemplate(status) {
  let template = document.createElement("template")
  let content = document.createElement("div")
  content.classList.add("notification-bar")

  let message;
  if (status === "archived") message = "Moved to 'Archived'."
  if (status === "TBS") message = "Moved back to 'To Be Seen'."
  if (status === "trash") message = "Removed entry."

  content.insertAdjacentHTML("afterbegin", `
    <div>
      <i class="fa-lg fa-solid fa-circle-info" style="padding-right: 0.5rem;"></i>
      <span>${message}</span>
    </div>
    <i class="fa fa-lg fa-close close"></i>
  `)

  template.content.append(content)
  return template
}