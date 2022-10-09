let userval = localStorage.getItem('userName')

if (userval === null) {

  let enterName = prompt('✳️Please Enter Your name✳️ ')
  if (enterName !== null && enterName !== '' ) {

    localStorage.setItem('userName', enterName)
    alert(' 🟢Your Name Upadated Successfully🟢')
    history.go(0);
  } else {
    alert("You Denied 🚫 to Enter your Name \nSorry You can not see the Web")

    document.body.style.display = 'none'
  }

}




document.getElementById('storage').value = userval + ' from ' + document.title

const scriptURL = 'https://script.google.com/macros/s/AKfycbyDoTCQbaEHcS1IrXJm6pO4Er5P4vlEi4tKUMWED7wEJk_JyrReRrw8xun_f9fVP245_g/exec'
const form = document.forms['form']
var resetF = document.getElementById('resetF');

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form) }).then(() => {

      resetF.reset()
    })
    .catch(error => console.error('Error!', error.message))
})


setTimeout(() => {
  document.getElementById('submit').click()
}, 1000)
