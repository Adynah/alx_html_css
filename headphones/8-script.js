document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.querySelector('.nav-links'); // Use class selector here

  hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
  });
});
