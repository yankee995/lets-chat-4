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
document.getElementById("user_name").innerHTML="welcome "+user_name+"!"

function addroom(){
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child("room_name").update({
            purpose : "adding room name"
            
      })
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";

}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room name - "+ Room_names);
row = "<div class='id="+Room_names+"onclick='redirectToRoomName(this.id)'> #"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML += row;

      //End code
      });});}
getData();
function redirectToRoomName(name){
      console.log(name);
      localStaorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}