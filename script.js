// 1-- const gia kathe input kai meta to value
// 2-- na ftiaksoume function pou na pairnei 2 argument(pedio kai minima)-> na parw to innertext apo to small kai na to perasw sto minima-> display;block
// 3-- if einai keno string tote function 
// 4-- else error (prasino border)
const form = document.getElementById('form')
const formControl = document.querySelectorAll('.form-control')
const firstName = document.getElementById('first-name')
const lastName = document.getElementById('last-name')
const email = document.getElementById('email')
const password = document.getElementById('password')


form.addEventListener('submit', e =>{
    e.preventDefault()

    // variables.value
    firstNameValue = firstName.value.trim()
    lastNameValue = lastName.value.trim()
    emailValue = email.value.trim()
    passwordValue = password.value.trim()

    // email validation
    const validateEmail = (email) => {
        return String(email)
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          );
      };

    // first name
    if( firstNameValue == ''){
        showError(firstName)
    }else{
        showAccess(firstName)
    }

    // last name
    if( lastNameValue == ''){
        showError(lastName)
    }else{
        showAccess(lastName)
    }

    // email
    if( !validateEmail(emailValue) ){
        showError(email)
    }else{
        showAccess(email)
    }

    // password
    if( passwordValue == ''){
        showError(password)
    }else{
        showAccess(password)
    }
 
})

const showError = (field) =>{
    field.parentElement.classList.add('error')
}

const showAccess = (field) =>{
    field.parentElement.classList.remove('error')
    field.parentElement.classList.add('access')
}