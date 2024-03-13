// DEPENDENCIES (DOM Elements) =======================
const section = document.querySelector('section');
const clearEl = document.querySelector('.clearBtn');

// DATA ==============================================
// retrieve array in JSON form
const blogPosts = JSON.parse(localStorage.getItem('blogPosts'));

// FUNCTIONS =========================================
// this will go back one page in the history
function goBack() {
  window.history.go(-1);
}

// clear all blogs and reload the page
function clear(event) {
  event.preventDefault();
  localStorage.clear();
  location.reload();
}

for (let i = 0; i < blogPosts.length; i++) {
  // CREATE
  const divEl = document.createElement('div');
  const h2El = document.createElement('h2');
  const pEl = document.createElement('p');
  const p2El = document.createElement('p');

  divEl.classList.add('posts-container');
  h2El.classList.add('post-title');
  pEl.classList.add('post-content');
  p2El.classList.add('post-user');

  // BUILD
  h2El.textContent = blogPosts[i].title;
  pEl.textContent = blogPosts[i].content;
  p2El.textContent = `Posted by: ${blogPosts[i].username}`;

  // PLACE
  section.appendChild(divEl);
  divEl.appendChild(h2El);
  divEl.appendChild(pEl);
  divEl.appendChild(p2El);
}

// USER INTERACTIONS =================================
clearEl.addEventListener('click', clear);

// INITIALIZATION ====================================
