function compent() {
  let element = document.createElement('div')
  element.innerHTML = 'hellow webpack'
  return element
}
document.body.appendChild(compent())