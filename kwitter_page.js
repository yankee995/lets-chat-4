//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyDULbEbUYmgnY9zraC1GdtvMYh6LhytUXU",
      authDomain: "kwitter-7a05a.firebaseapp.com",
      databaseURL: "https://kwitter-7a05a-default-rtdb.firebaseio.com",
      projectId: "kwitter-7a05a",
      storageBucket: "kwitter-7a05a.appspot.com",
      messagingSenderId: "367151451750",
      appId: "1:367151451750:web:558e02e674a13fcdd8e7a7"
    };
    
    // Initialize Firebase
    firebase. initializeApp(firebaseConfig);



user_name=localStorage.getItem("user_name")
room_name=localStorage.getItem("room_name")

function Send(){
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      })
      document.getElementById("msg").value = "";
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

