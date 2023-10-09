const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add('show');       
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden1');
hiddenElements.forEach((el) => observer.observe(el));

const boxElement = document.querySelector('.box');

let initialTranslateX = -1000;  // Start 200 pixels to the left

window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;
  const shiftAmount = scrollPosition / 1;  // Adjust this value for desired effect
  boxElement.style.transform = `translateX(${initialTranslateX + shiftAmount}px)`;
});

//FUNCTION BELOW

// typing function below
// function([string1, string2],target id,[color1,color2])    
consoleText(['HI.', 'IM HARRY,', 'I HATE FORGETTING.'], 'text',['white','white','white']);

function consoleText(words, id, colors) {
  if (colors === undefined) colors = ['#fff'];
  var visible = true;
  var con = document.getElementById('console');
  var letterCount = 1;
  var x = 1;
  var waiting = false;
  var target = document.getElementById(id)
  target.setAttribute('style', 'color:' + colors[0])
  window.setInterval(function() {

    if (letterCount === 0 && waiting === false) {
      waiting = true;
      target.innerHTML = words[0].substring(0, letterCount)
      window.setTimeout(function() {
        var usedColor = colors.shift();
        colors.push(usedColor);
        var usedWord = words.shift();
        words.push(usedWord);
        x = 1;
        target.setAttribute('style', 'color:' + colors[0])
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (letterCount === words[0].length + 1 && waiting === false) {
      waiting = true;
      window.setTimeout(function() {
        x = -1;
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (waiting === false) {
      target.innerHTML = words[0].substring(0, letterCount)
      letterCount += x;
    }
  }, 120)
  window.setInterval(function() {
    if (visible === true) {
      con.className = 'console-underscore hidden'
      visible = false;

    } else {
      con.className = 'console-underscore'

      visible = true;
    }
  }, 400)
}

/*
const textElement = document.querySelector('.scrolling-text');
let position = 100;  // Adjust the initial position accordingly
const scrollSpeed = 0.5;  // Adjust the scrolling speed

function scrollText() {
    position -= scrollSpeed;
    if (position < -100) {
        position = 100;
    }
    textElement.style.transform = `translateX(${position}%)`;
}

setInterval(scrollText, 20);  // Adjust the interval for the desired speed
*/

const body = document.querySelector('body');

window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    const backgroundOffset = scrollPosition * 0.5;  // Adjust this value for desired parallax effect
    body.style.backgroundPositionY = `-${backgroundOffset}px`;
});
