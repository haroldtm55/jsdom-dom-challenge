const counter = document.querySelector('h1#counter')
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
}    
//DOMContentLoaded listener to the document that starts the counter
document.addEventListener('DOMContentLoaded',() => {
  counter.innerHTML = 0
  timerStarter('on') 
  
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

// const minus = document.querySelector('button#minus')
minus.addEventListener('click',() => {
  const currentValue = parseInt(counter.innerHTML)
  if (currentValue > 0) {
    counter.innerHTML = currentValue - 1
  }
})

// const plus = document.querySelector('button#plus')
plus.addEventListener('click',() => {
  const currentValue = parseInt(counter.innerHTML)
  counter.innerHTML = currentValue + 1
})

let counterObj = {}
heart.addEventListener('click',(event) => {
  const currentValue = parseInt(counter.innerHTML)
  
 
  if (counterObj[currentValue]) {
    counterObj[currentValue].count++
  }
  else {
    counterObj[currentValue] = {
      li: document.createElement('li'),
      count: 1,
    }
    document.querySelector('ul.likes').appendChild(counterObj[currentValue].li)
  }
  counterObj[currentValue].li.textContent = `${currentValue} has been liked ${counterObj[currentValue].count} times`
  console.log(counterObj)
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

const timesLikedExtractor = string => {
  const digits = ['0','1','2','3','4','5','6','7','8','9']
  let digitList = []
  let number = ''
  
  for (let i = string.length-1; i >= 0; i--) {
    if (string.charAt(i) !== 'd') {
      for (digit of digits) {
        if (string.charAt(i) === digit) {
          digitList.unshift(digit)
        }
      }    
    }
    else break
  }
  for (let i=0;i<=digitList.length -1;i++) {
    number = number + digitList[i]
  }
  return parseInt(number)
}

const form = document.querySelector('div form#comment-form')
form.addEventListener('click', (event) => {
  event.preventDefault()
  list.appendChild(document.createElement('p')).innerText = document.querySelector('input#comment-input').value
  document.getElementById('comment-form').reset()
})