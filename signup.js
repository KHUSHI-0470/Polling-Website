const firebaseConfig = {
    apiKey: "AIzaSyCLKot3bMALGPMeyd3fMbRbFnoLic_bhR0",
    authDomain: "poll-290f8.firebaseapp.com",
    projectId: "poll-290f8",
    storageBucket: "poll-290f8.appspot.com",
    messagingSenderId: "226225965293",
    appId: "1:226225965293:web:de8359eb589610f993a4e4",
    measurementId: "G-XQ0KWBVMY8"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  const auth = firebase.auth();



  //signup function
  function register(){
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    const promise = auth.createUserWithEmailAndPassword(email,password);
    //
    promise.catch(e=>alert(e.message));
    alert("User Account created successfully!!");
  }

  //signIN function
  function  login(){
    event.preventDefault();
    var email = document.getElementById("email").value;
    var password  = document.getElementById("password").value;
    console.log(email, password)
    const promise = auth.signInWithEmailAndPassword(email,password);
    promise.catch(e=>alert(e.message));
    promise.then(res => alert(res));
  }

//   //signOut

//   function signout(){
//     auth.signOut();
//     alert("SignOut Successfully from System!!");
//     window.location.replace("index.html");    
//   }

  //active user to homepage
  firebase.auth().onAuthStateChanged((user)=>{
    if(user){
      var email = user.email;
      console.log("user active")
      window.location.replace("form1.html");    
    }else{
      console.log("No user found")
    }
  })