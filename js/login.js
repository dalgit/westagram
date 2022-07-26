const id = document.getElementById('id')
const password = document.getElementById('password')
const loginButton = document.getElementById('loginButton')

window.addEventListener("keyup",()=>{
    if(id.value.length>0 && password.value.length>0){
        loginButton.style.backgroundColor = '#0095F6';
    } else if(id.value.length===0 || password.value.length===0){
        loginButton.style.backgroundColor = '#C4E1FB';
    }
})