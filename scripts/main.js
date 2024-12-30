document.addEventListener("DOMContentLoaded", () => {
    // Load the header
    fetch('components/header.html')
      .then(response => response.text())
      .then(data => {
        document.getElementById('header').innerHTML = data;
      });
  
    // Load the navbar
    fetch('components/nav.html')
      .then(response => response.text())
      .then(data => {
        document.getElementById('navbar').innerHTML = data;
      });
  
    // Load the footer
    fetch('components/footer.html')
      .then(response => response.text())
      .then(data => {
        document.getElementById('footer').innerHTML = data;
      });
  });
  