const blogOutput = document.querySelector('ul')

// takes the stored object and add it to a const
const blogposts = JSON.parse(localStorage.getItem('blog')) || []

//inserts the user inputed posts
function outputBlogPosts() {
    if (blogposts.length) {
        blogOutput.innerHTML = '';
    }

    for (let obj of blogposts) {
        blogOutput.insertAdjacentHTML('beforeend', `
            <ul class="post">
            <p class="title">${obj.title}</p>
            <br>
            <p class="content">${obj.content}</p>
            <br>
            <p class="username">Post Written By ${obj.username}</p>
            </ul>
        `);
    };
}

outputBlogPosts();