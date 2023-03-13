var username = document.querySelector('#username')
var email = document.querySelector('#email')
var password = document.querySelector('#password')
var rePassword = document.querySelector('#re-password')
var form = document.querySelector('form')


function showError (input, message) {
  let parent = input.parentElement
  let small = parent.querySelector('small')

  parent.classList.add('error')
  small.innerText = message
}

function showSuccess (input) {
  let parent = input.parentElement
  let small = parent.querySelector('small')
  parent.classList.remove('error')
  small.classList.add('success')
  small.innerText = ''
}

function checkEmpty(listInput) {
  let isEmptyError = false
  listInput.forEach(input => {
    input.value = input.value.trim()
    
    if (!input.value) {
      isEmptyError = true
      showError(input, 'Cannot be empty')
    }
  })
  return isEmptyError
}

function checkEmail(input) {
  const regexEmail =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  input.value = input.value.trim()
  let isEmailError = regexEmail.test(input.value)
  if (!regexEmail.test(input.value)) {
    showError(input, 'Email Invalid')
  }
  return isEmailError
}


function checkLengthError(input, min, max) {
  input.value = input.value.trim()
  if ((input.value).length > 0 && (input.value).length < min) {
    showError(input, `username length cannot shorter than ${min} characters`)
    return true
  }

  if ((input.value).length > max) {
    showError(input, `username length cannot longer than ${max} characters`)
    return true
  }
  return false
} 

function checkMathPwError (passwordInput, rePasswordInput) {
  if (passwordInput.value !== rePasswordInput.value) {
    showError(rePasswordInput, 'Password doesn\'t match')
    return true
  }
  return false

}

form.addEventListener('submit', function (e) {
  e.preventDefault()
  let isEmptyError = checkEmpty([username, email, password, rePassword])
  let isEmailError = checkEmail(email)
  let isUserLengthError = checkLengthError(username, 3, 10)
  let isMatchPw = checkMathPwError(password, rePassword)
  
})