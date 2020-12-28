
  var firebaseConfig = {
    apiKey: "AIzaSyCAi-a0MpKAT6c8TnJgeO5aB5_NHss3wVw",
    authDomain: "bu3dmodel.firebaseapp.com",
    databaseURL: "https://bu3dmodel.firebaseio.com",
    projectId: "bu3dmodel",
    storageBucket: "bu3dmodel.appspot.com",
    messagingSenderId: "879866936711",
    appId: "1:879866936711:web:5e37cc236e87b2bdc22722",
    measurementId: "G-G5L3KPFHYX"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  const auth = firebase.auth();

  function signUp(){
  
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    
    const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
    promise.catch(e => alert(e.message));
    
    alert("Signed Up");
   }
   
   
   
   function signIn(){
    
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    
    const promise = auth.signInWithEmailAndPassword(email.value, password.value);
    promise.catch(e => alert(e.message));
    
    
    
    
   }
   
   
   function signOut(){
    
    auth.signOut();
    alert("Signed Out");
    
   }

  auth.onAuthStateChanged(function(user){
  
    if(user){
     
     var email = user.email;
     alert("Active User " + email);
     window.location.href = "home.html";
     //Take user to a different or home page
  
     //is signed in
     
    }else{
     
     alert("No Active User");
     //no user is signed in
     
    }
    
    
    
   });

  

