function displayMessage(){
    let msg = document.getElementById("message").value;
    (msg.length == "") ? msg = "Enter Something... Anything!!" : null;
  //  alert(msg);
    Swal.fire(msg);
}