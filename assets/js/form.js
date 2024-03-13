// DEPENDENCIES ======================================
const usernameInput = document.querySelector('#username');
const titleInput = document.querySelector('#title');
const contentInput = document.querySelector('#content');
const blogForm = document.querySelector('.blog-form');
const formInputs = document.querySelector('.form-inputs');
const submitBtn = document.querySelector('#submit');

// DATA ==============================================
let blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
console.log(blogPosts);

// FUNCTIONS =========================================

// const collectBlogPost = function () {};

// USER INTERACTIONS =================================
submitBtn.addEventListener('click', function (event) {
  event.preventDefault();
  console.log('username input: ', usernameInput.value);
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
    console.log(newBlogPost);
    localStorage.setItem('blogPosts', JSON.stringify(blogPosts));
    // localStorage.setItem('blogForm', JSON.stringify(blogForm));
    // blogPosts.push(blogForm);
    formInputs.reset();
    window.location.href = 'blog.html';
  }
});

// INITIALIZATION ====================================
