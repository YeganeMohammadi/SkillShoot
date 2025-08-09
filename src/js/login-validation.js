
const email = document.getElementById('email')
const pass = document.getElementById('pass')
const passError = document.getElementById('pass-error')
const emailError = document.getElementById('email-error')
const sendBtn = document.getElementById('submit-btn')
const restoreBtn = document.getElementById('restore-btn')


let emailInp , passInp
let emailIsValid = false
let passIsValid = false



function errorHandeler(type){    
    if(type === 'email'){
        email.classList.add('text-red-500')
        email.classList.add('bg-red-100')
        emailError.innerText = 'Invalid Email Address!'
    }
    else if(type === 'pass'){
        pass.classList.add('text-red-500')
        pass.classList.add('bg-red-100')
        passError.innerText = 'Password most have at least 8 characters!'
    }
}

email.addEventListener('change',function(e){
    emailInp =  e.target.value 
    if(emailInp.includes('@') && emailInp.includes('.', -10)){
        emailIsValid = true
        email.classList.remove('text-red-500')
        email.classList.remove('bg-red-100')
        emailError.innerText = ''
    }else{
        errorHandeler('email');
        emailIsValid = false     
    }
})

pass.addEventListener('change',function(e){
    passInp = e.target.value
    if(passInp.length < 8){
        errorHandeler('pass')
    }else{
        passIsValid = true
        pass.classList.remove('text-red-500')
        pass.classList.remove('bg-red-100')
        passError.innerText = ''
    }
})

sendBtn.addEventListener('click',function(e){
    
    if(!passIsValid || passInp ===''){
        e.preventDefault()
        errorHandeler('pass');
    }
    if(!emailIsValid || emailInp ===''){
        e.preventDefault()
        errorHandeler('email')
    }
})


restoreBtn.addEventListener('click',function(e){
    if(!emailIsValid || emailInp ===''){
        e.preventDefault()
        errorHandeler('email')
    }
})


