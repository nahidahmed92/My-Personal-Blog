document.getElementById('myForm').addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent the default form submission

  // Get form data
  const username = document.querySelector('input[name="username"]').value;
  const password = document.querySelector('input[name="password"]').value;

  // Redirect to a new page
  window.location.href = 'newpage.html'; // Replace 'newpage.html' with the desired page URL
});
