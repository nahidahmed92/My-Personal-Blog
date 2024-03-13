// DEPENDENCIES ======================================
const usernameInput = document.querySelector('#username');
const titleInput = document.querySelector('#title');
const contentInput = document.querySelector('#content');
const submitBtn = document.querySelector('#submit');

// DATA ==============================================
let blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
console.log(blogPosts);

// FUNCTIONS =========================================

// const collectBlogPost = function () {};

// USER INTERACTIONS =================================
submitBtn.addEventListener('click', function (event) {
  event.preventDefault();

  // if (usernameInput.value === null) {
  //   alert('all fields are required');
  // }

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
  window.location.href = 'blog.html';
});

// INITIALIZATION ====================================
