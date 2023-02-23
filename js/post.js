function loadPosts() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => displayPosts(data));
}

function displayPosts(posts) {
  console.log(posts);
  const container = document.getElementById("post-container");
  for (const post of posts) {
    const div = document.createElement("div");
    div.classList.add("post");
    div.innerHTML = `
    <h2>userId : ${post.userId}</h2>
    <h3>id : ${post.id}</h3>
    <h4>title : ${post.title}</h4>
    <h5>body : ${post.body}</h5>
    `;
    container.appendChild(div);
  }
}

loadPosts();
