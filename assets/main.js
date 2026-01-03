fetch('/layouts/partials/footer.html')
  .then(response => response.text())
  .then(htmlString => {
    const target = document.getElementById('footer-import');
    target.innerHTML = htmlString;
    
    target.querySelectorAll('script').forEach(oldScript => {
      const newScript = document.createElement('script');

      newScript.textContent = oldScript.textContent;
      Array.from(oldScript.attributes).forEach(attr => 
        newScript.setAttribute(attr.name, attr.value)
      );
      oldScript.replaceWith(newScript);
    });
  })
  .catch(error => console.error('Error loading footer:', error));
