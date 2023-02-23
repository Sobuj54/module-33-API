// this fetch is taken form website
//fetch("https://jsonplaceholder.typicode.com/todos/1")
//.then((response) => response.json()) //.json is not the same but similar to JSON.parse
//.then((json) => console.log(json));

// custom created fetch with url
const url = "https://jsonplaceholder.typicode.com/todos/1";
// fetch(url)
//   .then((response) => response.json())
//   .then((json) => console.log(json));

//   using a function
function loadData() {
  fetch(url)
    .then((response) => response.json())
    .then((json) => console.log(json));
}
