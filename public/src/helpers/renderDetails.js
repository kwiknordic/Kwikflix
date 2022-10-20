export function renderDetails(id, media) {
  let reqData = {
    id,
    media,
  }

  localStorage.setItem('reqData', JSON.stringify(reqData))
  window.location.href = "./details.html";
}