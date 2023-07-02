
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyDjYzSWjAod1GBtnQ46q-bKL2BGFhKjWVg",
      authDomain: "instant-d9fac.firebaseapp.com",
      databaseURL: "https://instant-d9fac-default-rtdb.firebaseio.com",
      projectId: "instant-d9fac",
      storageBucket: "instant-d9fac.appspot.com",
      messagingSenderId: "213146486818",
      appId: "1:213146486818:web:0bc1cb79b35e7efc78227b",
      measurementId: "G-L67FGQSXVX"
    };
    
   firebase.initializeApp(firebaseConfig)

   var talk=localStorage.getItem("name of guest user")
   document.getElementById("valu").innerHTML=" welcome "+talk+" lets chat"

   function add_room(){
   room_name=document.getElementById("room_name").value
   localStorage.setItem("room_name",room_name)
   firebase.database().ref("/").child(room_name).update({purpose:"hi"})
   window.location="instant.html"
   }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log(Room_names)
      });});}
getData();
