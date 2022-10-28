export function showNotification() {
  let template = notificationTemplate()
  let modal = template.content.cloneNode(true)
  document.body.prepend(modal)
}

function notificationTemplate() {
  let template = document.createElement("template")
  let content = document.createElement("div")
  content.classList.add("notification-bar")

  content.insertAdjacentHTML("afterbegin", `
    <span>Notification: Something just happened</span>
    <i class="fa fa-close close"></i>
  `)

  template.content.append(content)
  return template
}