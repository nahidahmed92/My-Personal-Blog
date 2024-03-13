// DEPENDENCIES (DOM Elements) =======================
const section = document.querySelector('section');
const clearEl = document.querySelector('.clearBtn');
console.log('clear button: ', clearEl);

// DATA ==============================================
const blogPosts = JSON.parse(localStorage.getItem('blogPosts'));

// FUNCTIONS =========================================
function goBack() {
  window.history.go(-1); // This will go back one page in the history
}

function clear(event) {
  event.preventDefault();
  localStorage.clear();
  location.reload();
}

console.log(blogPosts.length);
for (let i = 0; i < blogPosts.length; i++) {
  const divEl = document.createElement('div');
  const h2El = document.createElement('h2');
  const pEl = document.createElement('p');
  const p2El = document.createElement('p');

  divEl.classList.add('posts-container');
  h2El.classList.add('post-title');
  pEl.classList.add('post-content');
  p2El.classList.add('post-user');

  h2El.textContent = blogPosts[i].title;
  pEl.textContent = blogPosts[i].content;
  p2El.textContent = `Posted by: ${blogPosts[i].username}`;

  section.appendChild(divEl);
  divEl.appendChild(h2El);
  divEl.appendChild(pEl);
  divEl.appendChild(p2El);
}

// USER INTERACTIONS =================================
clearEl.addEventListener('click', clear);
// INITIALIZATION ====================================

// for ()

// CREATE
// div element with class = posts-container
// const div = document.createElement('div');
// h2 element with class = post-title
// p element with class = post-content
// p element with class = post-user
// div.classList.add('posts-container');
// textContent = 'Site 3';
// setAttribute('href', 'https://twitter.com');

// BUILD

// PLACE
// section.appendChild(dsndfkjfd);

// blogPosts[i].username = post-user
// blogPosts[i].title = post-title
// blogPosts[i].content = post-content
