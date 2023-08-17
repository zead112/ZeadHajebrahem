var tablinks = document.getElementsByClassName("tap-links");
var tabcontents = document.getElementsByClassName("tap-contents");
var sidemenu = document.getElementById("sidemenu");

function opentap(tabname) {
  for (taplink of tablinks) {
    taplink.classList.remove("active-link");
  }
  for (tapcontent of tabcontents) {
    tapcontent.classList.remove("active-tab");
  }

  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}
function openmenu() {
  sidemenu.style.right = "0";
}
function closemenu() {
  sidemenu.style.right = "-200px";
}
