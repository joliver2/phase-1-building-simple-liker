// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

let likes = document.querySelectorAll('.like-glyph')
let counter = 0
// const counterDisplay = document.createElement('button')
// const liker = document.querySelector(".like")
// liker.appendChild(counterDisplay)
// counterDisplay.textContent = counter

for (heart of likes) {
  heart.addEventListener('click', addLike)
  // liker.appendChild(counterDisplay)
}

function addLike(event) {
  targetHeart = event.target;
  // liker.appendChild(counterDisplay)
  mimicServerCall()
    .then(function (response) {
      if (targetHeart.textContent === EMPTY_HEART) {
        // counter++
        targetHeart.classList.add('activated-heart')
        targetHeart.textContent = FULL_HEART;
        
        // counterDisplay.textContent = counter

      }
      else if (targetHeart.textContent === FULL_HEART) {
        targetHeart.classList.remove('activated-heart')
        targetHeart.textContent = EMPTY_HEART
      }
    })
    .catch(function (error) {
      document.querySelector('#modal').classList.remove('hidden')
      setTimeout(function () {
        document.querySelector('#modal').classList.add('hidden')
      }, 3000)
    });
}





//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
