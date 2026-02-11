// Sidebar Toggle
function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("overlay");

  sidebar.classList.toggle("active");
  overlay.classList.toggle("active");
}

// Close sidebar if clicked outside
document.addEventListener("DOMContentLoaded", function () {

  const overlay = document.getElementById("overlay");

  overlay.addEventListener("click", function () {
    toggleSidebar();
  });

});
