// DEPENDENCIES ======================================
const usernameInput = document.querySelector('#username');
const titleInput = document.querySelector('#title');
const contentInput = document.querySelector('#content');
const blogForm = document.querySelector('.blog-form');
const formInputs = document.querySelector('.form-inputs');
const submitBtn = document.querySelector('#submit');

// DATA ==============================================
// retrieve array in JSON form
let blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];

// FUNCTIONS =========================================

// USER INTERACTIONS =================================
// submit button will validate form and
submitBtn.addEventListener('click', function (event) {
  event.preventDefault();
  if (!usernameInput.value || !titleInput.value || !contentInput.value) {
    alert('Please ensure all fields are filled before submitting a post.');
  } else {
    // DATA ============================================
    const newBlogPost = {
      username: usernameInput.value,
      title: titleInput.value,
      content: contentInput.value,
    };

    blogPosts.push(newBlogPost);

    // console log object
    console.log(newBlogPost);

    // set object in JSON form
    localStorage.setItem('blogPosts', JSON.stringify(blogPosts));

    // reset for inputs
    formInputs.reset();

    // after submit go to blog.html
    window.location.href = 'blog.html';
  }
});

// INITIALIZATION ====================================
