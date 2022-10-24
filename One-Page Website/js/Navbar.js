window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  var navChildren = document.getElementById("navIconMenu").children;
  var matIcon = document.getElementById("mat-icon");
  var navIconMenu = document.getElementById("navIconMenu");
  var navIcon = document.getElementById("navIcon");
  var menuContainer = document.getElementById("menucontainer");

  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    menuContainer.style.display = "none";
    navIcon.style.display = "block";
    matIcon.style.display = "block";

    for (var i = 0; i < navChildren.length; i++) {
      var thisChild = navChildren[i];
      thisChild.style.display = "block";
    }
  } else {
    menuContainer.style.display = "block";
    navIcon.style.display = "none";
    matIcon.style.display = "none";
    navIconMenu.style.display = "none";
    matIcon.innerHTML = "menu";

    for (var i = 0; i < navChildren.length; i++) {
      var thisChild = navChildren[i];
      thisChild.style.display = "none";
    }
  }
}

function displayNav() {
  var menu = document.getElementById("navIconMenu");
  var icons = document.getElementById("mat-icon");
  if (menu.style.display === "block") {
    menu.style.display = "none";
    icons.innerHTML = "menu";
  } else {
    menu.style.display = "block";
    icons.innerHTML = "close";
  }
}
