
// 1) Toggle the LEFT SIDEBAR on smaller screens

// Grab the button (#toggle-sidebar-btn) and the sidebar (#sidebar) from the DOM.
const toggleBtn = document.getElementById('toggle-sidebar-btn');
const sidebar = document.getElementById('sidebar');

// Add a click event to the hamburger button to show/hide the sidebar.
toggleBtn.addEventListener('click', () => {
  // If the sidebar is currently displayed, hide it.
  if (sidebar.style.display === 'block') {
    sidebar.style.display = 'none';
  } else {
    // Otherwise, make it visible as a block-level element.
    sidebar.style.display = 'block';
  }
});


// 2) SMOOTH SCROLLING to sections when clicking right-sidebar links

// Select all anchor links in the right sidebar that start with "#"
const tocLinks = document.querySelectorAll('.right-sidebar a[href^="#"]');

// Loop through each link and attach an event listener
tocLinks.forEach(anchor => {
  anchor.addEventListener('click', function (event) {
    // Prevent the default jump behavior
    event.preventDefault();
    // Extract the target ID from the link's href (minus the "#")
    const targetId = this.getAttribute('href').substring(1);
    // Get the DOM element with that ID
    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      // Scroll smoothly to that section
      targetEl.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
// Select all buttons with the class "copy-btn"
const copyButtons = document.querySelectorAll('.copy-btn');

// For each button, attach a click handler that copies the associated code text
copyButtons.forEach(button => {
  button.addEventListener('click', () => {
    // The 'data-target' attribute references the ID of the <code> element
    const codeId = button.getAttribute('data-target');
    const codeElement = document.getElementById(codeId);

    if (codeElement) {
      // Extract the text from the code block
      const codeToCopy = codeElement.innerText;

      // Use the modern clipboard API
      navigator.clipboard.writeText(codeToCopy)
        .then(() => {
          // Optionally, show a quick "Copied!" message or change button text
          button.textContent = 'Copied!';
          setTimeout(() => {
            button.textContent = 'Copy code';
          }, 2000);
        })
        .catch(err => {
          console.error('Failed to copy code', err);
        });
    }
  });
});
fetch('components/header.html')
.then(r => r.text)
.then(html =>{
  document.getElementById('header').innerHTML = html;
})
.catch(err => console.error('Error loading header:', err));