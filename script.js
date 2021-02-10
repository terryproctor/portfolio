// Get the modal
var modal1 = document.getElementById("myModal1");
var modal2 = document.getElementById("myModal2");
var modal3 = document.getElementById("myModal3");

// Get the button that opens the modal
var btn1 = document.getElementsByClassName("open-window")[0];
var btn2 = document.getElementsByClassName("open-window")[1];
var btn3 = document.getElementsByClassName("open-window")[2];

// Get the <span> element that closes the modal
var span1 = document.getElementsByClassName("close")[0];
var span2 = document.getElementsByClassName("close")[1];
var span3 = document.getElementsByClassName("close")[2];

// When the user clicks on the button, open the modal
btn1.onclick = function() {
  modal1.style.display = "block";
}
btn2.onclick = function() {
  modal2.style.display = "block";
}
btn3.onclick = function() {
  modal3.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span1.onclick = function() {
  modal1.style.display = "none";
}
span2.onclick = function() {
  modal2.style.display = "none";
}
span3.onclick = function() {
  modal3.style.display = "none";
}



// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal1) {
    modal1.style.display = "none";
  }
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
  if (event.target == modal3) {
    modal3.style.display = "none";
  }
}


//////////////////////////////////////////
//burger menu code//
var navLinks = document.getElementsByClassName("nav_link");
var navBar = document.getElementsByClassName("navBar")[0];
var burgerButton = document.getElementById("burgerWrap");
var aboutHeader = document.getElementById('aboutMeHeader');

burgerButton.addEventListener('click', openDownMenu);

function openDownMenu() {
aboutHeader.style.display ="none";

navBar.style.display = "contents";

for (var i=0; i<navLinks.length; i++) {
navLinks[i].style.display= "block";
}

}
