document.addEventListener("DOMContentLoaded", () => {
  // Load the navbar dynamically
  fetch('components/nav.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('navbar').innerHTML = data;
    });

  // Load the footer dynamically
  fetch('components/footer.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('footer').innerHTML = data;
    });
});
