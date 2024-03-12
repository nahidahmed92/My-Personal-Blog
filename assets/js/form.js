// DEPENDENCIES ======================================
// const formEl = document.querySelector('form');
// const blogForm = document.querySelector('.blog-form');
const username = document.querySelector('#username');
const title = document.querySelector('#title');
const content = document.querySelector('#content-input');
const submit = document.querySelector('#submit');

// DATA

// FUNCTIONS
function formValidation(event) {
  event.preventDefault();
  if (!username.value || !title.value || !content.value) {
    alert('All fields are required to post.');
  } else {
    window.location.href = 'blog.html';
  }
}

// USER INTERACTIONS
submit.addEventListener('click', formValidation);

// formEl.addEventListener('submit');
