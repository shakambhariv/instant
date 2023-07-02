function adduser(){
    var userName=document.getElementById("chat_name").value 
    localStorage.setItem("name of guest user",userName)
    window.location="kwitter_room.html"


}