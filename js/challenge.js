const counter = document.querySelector('h1#counter')
let timesLiked = 0
let pauseResume = document.querySelector('button#pause')

function timerStarter(value = 'on') {
  //This function takes one argument, that can either be "on"/"off". If "on", the counter will start to run. If "off", the counter will pause.
  let swticher
  if (value === 'on') {
    switcher = window.setInterval(seconds, 1000)
  }
  if (value === 'off') {
    clearInterval(switcher)
  }
}
function seconds() {
  //Callback function that increases the initial number by 1 and add it to the counter value.
  let time = 0
  time += 1
  counter.innerHTML = parseInt(counter.innerHTML) + time
  timesLiked = 0
}    
//DOMContentLoaded listener to the document that starts the counter
document.addEventListener('DOMContentLoaded',() => {
  counter.innerHTML = 0
  timerStarter('on') 
  
  // BUTTONS DON'T HAVE TO BE DECLARED AS A VARIABLE IF THEY HAVE ID??
  
  //Add a click event listener to the pause button, if clicked it will either pause or resume the counter and disable or enable the -,+ and heart buttons respectively.
  pauseResume.addEventListener('click', () => {
    if (pauseResume.innerText === 'pause') {
      pauseResume.innerText = 'resume'
      timerStarter('off')
      minus.disabled = true
      plus.disabled = true
      heart.disabled = true
      submit.disabled = true
    }
    else if (pauseResume.innerText === 'resume') {
      pauseResume.innerText = 'pause'
      timerStarter('on')
      minus.disabled = false
      plus.disabled = false
      heart.disabled = false
      submit.disabled = false
    }
  })
})


// BUTTONS DON'T HAVE TO BE DECLARED AS A VARIABLE IF THEY HAVE ID
// const minus = document.querySelector('button#minus')
minus.addEventListener('click',() => {
  if (counter.innerHTML > 0) {
    counter.innerHTML = parseInt(counter.innerHTML) - 1
  }
})

// const plus = document.querySelector('button#plus')
plus.addEventListener('click',() => {
  counter.innerHTML = parseInt(counter.innerHTML) + 1
})


// const heart = document.querySelector('button#heart')
// When the heart button is clicked, a list with the current counter number and the number of times liked within that counter number will be assigned to a newly created list element that is appended to the unordered list.
heart.addEventListener('click',(event) => {
  const li = document.createElement('li')
  const ul = document.querySelector('ul')
  timesLiked += 1
  li.innerHTML = `${counter.innerHTML} has been liked ${timesLiked} ${timesLiked === 1 ? 'time' : 'times'}`
  ul.appendChild(li)
  
  //Once there are already 2 or more lists elements, it will automatically remove if the counter number is the same.
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
  //Designed for this problem. It returns all the digits until first space encountered
  let number = ''
  for (i = 0; i <= string.length - 1; i++) {
    if (string.charAt(i) === ' ') {
      break
    }
    number = number + string.charAt(i)
  }
  return parseInt(number)
}

const form = document.querySelector('div form#comment-form')
form.addEventListener('click', (event) => {
  event.preventDefault()
  list.appendChild(document.createElement('p')).innerText = document.querySelector('input#comment-input').value
  document.querySelector('input#comment-input').value = ''
})