export function filterObserver(dataset) {
  let targetNode = document.querySelector("aside")
  const observer = new MutationObserver( e => {
    let target = e.at(-1).target
    let mutatedAttr = e.at(-1).attributeName
    let attribute = target.getAttribute(mutatedAttr)
    filter(attribute, dataset)
  });
  observer.observe(targetNode, { attributes: true });
}

function filter(attribute, dataset) {
  let entries = document.querySelectorAll(".entry")
  entries.forEach(entry => {
    // reset all entries before filtering
    entry.classList.remove("hidden")
    
    if (!attribute) return;
    if (attribute !== entry.getAttribute(dataset)) entry.classList.add("hidden")
  })
}