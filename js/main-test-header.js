fetch('../components/header.html')
      .then(r => r.text())
      .then(html => {
        document.getElementById('header').innerHTML = html;
      })
      .catch(err => console.error(err));