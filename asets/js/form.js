const blogForm = document.querySelector('#blog-form')


function addPost(eventObj) {
  eventObj.preventDefault()


  // - Grabs the post content from local storage
  const raw = localStorage.getItem('blog')
  const post = JSON.parse(raw) || []
    const obj = {
    username: blogForm.username.value,
    title: blogForm.title.value,
    content: blogForm.content.value
}

  // adds the post content
  post.push(obj)

  // overwrites the old post content
  localStorage.setItem('blog', JSON.stringify(post))

  // sends user to blog posted page
  window.location = 'blog.html'
}


function init() {
  blogForm.addEventListener('submit', addPost)
}

init()