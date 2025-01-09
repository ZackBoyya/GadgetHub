document.addEventListener("DOMContentLoaded", function () {
  // Function to toggle profile details visibility
  function toggleProfileDetails() {
    var profileDetails = document.querySelector(".profile-details");
    profileDetails.style.display =
      profileDetails.style.display === "none" ||
      profileDetails.style.display === ""
        ? "block"
        : "none";
  }

  document
    .getElementById("searchInput")
    .addEventListener("input", function (event) {
      const inputValue = event.target.value;
      console.log("Search query:", inputValue);
      // Removed alert for better user experience
    });

  // Event listener to toggle profile details on profile icon hover
  var profileIcon = document.querySelector(".profile-icon-container");
  profileIcon.addEventListener("mouseenter", toggleProfileDetails);
  profileIcon.addEventListener("mouseleave", toggleProfileDetails);
});

function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("mySidebar").style.transition = "width 0.3s";
  document.getElementById("main").style.marginLeft = "250px";
  document.getElementById("main").style.transition = "margin-left 0.3s";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("mySidebar").style.transition = "width 0.3s";
  document.getElementById("main").style.marginLeft = "0";
  document.getElementById("main").style.transition = "margin-left 0.3s";
}

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
      content.style.transition = "display 0.3s";
    } else {
      content.style.display = "block";
      content.style.transition = "display 0.3s";
    }
  });
}

document.querySelector("#sidebar_menu");

document.querySelector("#sidebar_menu > button > i");
