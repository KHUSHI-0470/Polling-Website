

document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#logIn");
    const createAccountForm = document.querySelector("#createAccount");

    document.querySelector("#linkcreateAccount").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.add("form-hidden");
        createAccountForm.classList.remove("form-hidden");
    });

    document.querySelector("#linklogIn").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.remove("form-hidden");
        createAccountForm.classList.add("form-hidden");
    });

    loginForm.addEventListener("submit", e => {
        e.preventDefault();
    });

    createAccountForm.addEventListener("submit", e => {
        e.preventDefault();
    });

});




document.getElementById("logIn").addEventListener("submit",(event)=>{
    event.preventDefault();
})



document.getElementById("createAccount").addEventListener("submit",(event)=>{
    event.preventDefault()
})




function login(){
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    firebase.auth().signInWithEmailAndPassword(email, password)
}


firebase.auth().onAuthStateChanged((user)=>{
    if(user){
        location.replace("index.html")
    }
})



function login(){
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    firebase.auth().signInWithEmailAndPassword(email, password)
}
















