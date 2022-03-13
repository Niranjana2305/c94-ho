var firebaseConfig = {
      apiKey: "AIzaSyDAMpodEqmc2TI2aV8sSiCqAmvAZcm7jdY",
      authDomain: "project-93-54aec.firebaseapp.com",
      databaseURL: "https://project-93-54aec-default-rtdb.firebaseio.com",
      projectId: "project-93-54aec",
      storageBucket: "project-93-54aec.appspot.com",
      messagingSenderId: "30825652654",
      appId: "1:30825652654:web:10d7bb0f5e3ddf96a5683f",
      measurementId: "G-WFDWG8BNVR"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
