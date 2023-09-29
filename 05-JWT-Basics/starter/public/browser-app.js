const formDOM = document.querySelector('.form')
const usernameInputDOM = document.querySelector('.username-input')
const passwordInputDOM = document.querySelector('.password-input')
const formAlertDOM = document.querySelector('.form-alert')
const resultDOM = document.querySelector('.result')
const btnDOM = document.querySelector('#data')
const tokenDOM = document.querySelector('.token')

formDOM.addEventListener('submit', async (e) => { // listening for submit event
  formAlertDOM.classList.remove('text-success')
  tokenDOM.classList.remove('text-success')

  e.preventDefault()
  const username = usernameInputDOM.value
  const password = passwordInputDOM.value

  // try/catch
  try {
    // axios library with post request
    const { data } = await axios.post('/api/v1/login', { username, password }) // send post request to login, passing in username & password

    formAlertDOM.style.display = 'block'
    formAlertDOM.textContent = data.msg

    formAlertDOM.classList.add('text-success')
    usernameInputDOM.value = ''
    passwordInputDOM.value = ''

    // if successful
    localStorage.setItem('token', data.token) // right away save token in local storage
    resultDOM.innerHTML = ''
    tokenDOM.textContent = 'token present'
    tokenDOM.classList.add('text-success')
  } catch (error) {
    formAlertDOM.style.display = 'block'
    formAlertDOM.textContent = error.response.data.msg
    localStorage.removeItem('token')
    resultDOM.innerHTML = '' // remove token
    tokenDOM.textContent = 'no token present'
    tokenDOM.classList.remove('text-success')
  }
  setTimeout(() => {
    formAlertDOM.style.display = 'none'
  }, 2000)
})

btnDOM.addEventListener('click', async () => { // button, click event listener
  const token = localStorage.getItem('token')
  try {
    const { data } = await axios.get('/api/v1/dashboard', { // get request to dashboard
      headers: {
        Authorization: `Bearer ${token}`,
      },
      // idea is exactly the same for fetch etc.
    })
    resultDOM.innerHTML = `<h5>${data.msg}</h5><p>${data.secret}</p>`

    data.secret
  } catch (error) {
    localStorage.removeItem('token')
    resultDOM.innerHTML = `<p>${error.response.data.msg}</p>`
  }
})

const checkToken = () => {
  tokenDOM.classList.remove('text-success')

  const token = localStorage.getItem('token')
  if (token) {
    tokenDOM.textContent = 'token present'
    tokenDOM.classList.add('text-success')
  }
}
checkToken()

// A Comment On Security

// The way the instructor uses the JWT is as follows: 
// (1) The user logs in with id and password, and the JWT is returned in the body of the response 
// (2) The web front end stores the JWT in local storage
// (3) In subsequent requests, the JWT is inserted by the front end as a bearer token in the authorization header, so that it can be validated and so that the back end knows which user is making the request 

// This is a common practice — and a very bad one! 

// Never store sensitive information in local storage
// It is common to introduce a vulnerability to a security attack called cross site scripting (XSS). If the application has an XSS vulnerability anywhere, the attacker can capture the token from local storage, and can then reuse that token to impersonate the user, doing any operations the user can do
// YIKES!