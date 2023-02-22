let preloader = document.querySelector('.preloader-inner')
let closeModalBtn = document.querySelector('.modal_close')
let modalLogin = document.querySelector('#modal')
let singInBtn = document.querySelector('#modal_trigger')
let loginForm = document.querySelector('.user_register')
let btnAddLoginForm = document.querySelector('#register_form')
let formSingIn = document.querySelector('.user_login')
let AddBtnsignInForm = document.querySelector('#login_form')
let backBtn = document.querySelector('#back')


//set loader for site
window.addEventListener('load', () => {
    preloader.parentElement.style.display = 'none'
})

//hide modalLogin
closeModalBtn.addEventListener('click', () => {
    modalLogin.style.display = 'none'
})

//show signInBtn
singInBtn.addEventListener('click', () => {
    formSingIn.classList.add('d-block')
    modalLogin.style.display = 'block'
})
//show loginForm
//hide signInForm
btnAddLoginForm.addEventListener('click', () => {
    formSingIn.classList.remove('d-block')
    loginForm.style.display = 'block'
})

//show signInForm
//hide loginForm
AddBtnsignInForm.addEventListener('click', () => {
    formSingIn.classList.add('d-block')
    loginForm.style.display = 'none'
})

//hide modalLogin
backBtn.addEventListener('click', () => {
    modalLogin.style.display = 'none'
})



