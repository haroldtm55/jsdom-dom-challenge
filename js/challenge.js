const counter = document.querySelector('h1#counter')

document.addEventListener('DOMContentLoaded',() => {
  counter.innerHTML = 0
  function seconds() {
    let time = 0
    time += 1
    counter.innerHTML = parseInt(counter.innerHTML) + time
  }    
  window.setInterval(seconds, 1000)  
})

const minus = document.querySelector('button#minus')
minus.addEventListener('click',() => {
  if (counter.innerHTML > 0) {
    counter.innerHTML = parseInt(counter.innerHTML) - 1
  }
})

const plus = document.querySelector('button#plus')
plus.addEventListener('click',() => {
  counter.innerHTML = parseInt(counter.innerHTML) + 1
})

const li = document.createElement('li')
const ul = document.querySelector('ul')
const heart = document.querySelector('button#heart')



heart.addEventListener('click',(event) => {
  if (document.querySelector('li') === null) {
    li.innerHTML = counter.innerHTML
    ul.appendChild(li)
  }
  else ul.appendChild(li.cloneNode(true)).innerHTML = counter.innerHTML
  
})