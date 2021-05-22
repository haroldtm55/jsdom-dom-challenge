const counter = document.querySelector('h1#counter')
let timesLiked = 0
document.addEventListener('DOMContentLoaded',() => {
  counter.innerHTML = 0
  function seconds() {
    let time = 0
    time += 1
    counter.innerHTML = parseInt(counter.innerHTML) + time
    timesLiked = 0
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

const likesTester = document.createElement('footer')
document.body.appendChild(likesTester)

const heart = document.querySelector('button#heart')
heart.addEventListener('click',(event) => {
  const li = document.createElement('li')
  const ul = document.querySelector('ul')
  
  timesLiked += 1
  
  
  li.innerHTML = `${counter.innerHTML} has been liked ${timesLiked} times`
  ul.appendChild(li)
  
  
  likesTester.innerHTML = timesLiked 
  
    
  for (let i = 1; i<= document.querySelectorAll('li').length - 1; i++) {
    if (document.querySelectorAll('li').length <= 1) {
      break
    }
    if (numberExtractor(document.querySelectorAll('li')[i-1].innerHTML)===numberExtractor(document.querySelectorAll('li')[i].innerHTML)) {
      document.querySelectorAll('li')[i-1].remove() 
    }
  }
})

const numberExtractor = string => {
  let number = ''
  for (i = 0; i <= string.length - 1; i++) {
    if (string.charAt(i) === ' ') {
      break
    }
    number = number + string.charAt(i)
  }
  return parseInt(number)
}