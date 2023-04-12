const form = document.getElementById("form")
const submitButton = document.getElementById("submit")
const scriptURL = 'https://httpbin.org/post'

form.addEventListener('submit', e => {
  submitButton.disabled = true
  e.preventDefault()
  console.log("hello world")
  let requestBody = new FormData(form)
  fetch(scriptURL, { method: 'POST', body: requestBody})
    .then(response => {
       alert('Success!', response)
       submitButton.disabled = false
      })
    .catch(error => {
    alert('Error!', error.message)
      submitButton.disabled = false

    }
    )
})
