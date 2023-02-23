// users
function loadUsers() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json()) //res is used as short form of response
    .then((data) => console.log(data));
}
