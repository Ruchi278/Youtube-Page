var menuIcon = document.querySelector(".menu-icon");
var sidebar = document.querySelector(".sidebar");
var container = document.querySelector(".container");

menuIcon.onclick = function(){ alert("Button clicked!");
    sidebar.classList.toggle("small-slidebar");
    container.classList.toggle("large-container");
}
