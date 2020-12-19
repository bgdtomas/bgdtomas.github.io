function myFunction(button) {
    var x = document.getElementById("myTopnav");
    button.classList.toggle("change")
    if (x.className === "topnav") {
      x.className += " responsive";
      document.body.style.overflow = "hidden";
      document.getElementById("MySections").style.display = "none";
    } else {
      x.className = "topnav";
      document.body.style.overflow = "scroll";
      document.getElementById("MySections").style.display = "block";
    }
  }
  