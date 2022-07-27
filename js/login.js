const id = document.getElementById('id')
const password = document.getElementById('password')
const loginButton = document.getElementById('loginButton')
loginButton.disabled=true;

id.addEventListener('keyup', () => buttonActive())
password.addEventListener('keyup', () => buttonActive())
loginButton.addEventListener('click', () => validation())

function buttonActive(){
    if(id.value.length>0 && password.value.length>0){
        loginButton.disabled=false;
        loginButton.style.backgroundColor = '#0095F6';
        loginButton.classList.add('loginButtonHover')
    } else{
        loginButton.disabled=true;
        loginButton.style.backgroundColor = '#C4E1FB';
        loginButton.classList.remove('loginButtonHover')
    }
}

function validation(){
    if (id.value.includes('@') && password.value.length>4){
        console.log('zzzzzz')
    }
}

