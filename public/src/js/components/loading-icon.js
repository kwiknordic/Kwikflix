let body = document.querySelector("body")
let loader = document.createElement("div")

let loaderCSS = `
  visibility: visible;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;

  border: 12px solid #f3f3f3;
  border-radius: 50%;
  border-top: 12px solid #444444;
  width: 6rem;
  height: 6rem;
  animation: spin 1s linear infinite;
  `

loader.setAttribute("style", loaderCSS)
body.append(loader)

document.addEventListener("readystatechange", e => {

  if (document.readyState !== "complete") {
    body.style.visibility = "hidden";
  } 

  else {
    loader.style.display = "none";
    body.style.visibility = "visible";
  }
})