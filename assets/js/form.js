// DEPENDENCIES ======================================
const usernameInput = document.querySelector('#username');
const titleInput = document.querySelector('#title');
const contentInput = document.querySelector('#content');
const submitBtn = document.querySelector('#submit');

// DATA ==============================================
const blogPosts = [];

// FUNCTIONS =========================================

// const collectBlogPost = function () {};

// USER INTERACTIONS =================================
submitBtn.addEventListener('click', function (event) {
  event.preventDefault();

  const blogForms = JSON.parse(localStorage.getItem('blogForm'));
  if (blogForms === null) {
    alert('all fields are required');
  }

  // DATA ============================================
  const blogForm = {
    username: usernameInput.value,
    title: titleInput.value,
    content: contentInput.value,
  };

  blogPosts.push(blogForm);
  localStorage.setItem('blogForm', JSON.stringify(blogPosts));
  // localStorage.setItem('blogForm', JSON.stringify(blogForm));
  // blogPosts.push(blogForm);
  window.location.href = 'blog.html';
});

// INITIALIZATION ====================================
