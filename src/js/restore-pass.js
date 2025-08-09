const email = document.getElementById('email')
const emailError = document.getElementById('email-error')
const restoreBtn = document.getElementById('restore-btn')

let emailInp 
let emailIsValid = false

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


restoreBtn.addEventListener('click',function(e){
    if(!emailIsValid || emailInp ===''){
        e.preventDefault()
        errorHandeler('email')
    }
})

