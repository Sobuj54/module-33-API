const user = { id: 1, name: "sobuj", job: "student" };
// JavaScript Object Notation (JSON)
console.log(user);
// stringify
const stringified = JSON.stringify(user);
console.log(stringified);

/*
{ id: 1, name: 'sobuj', job: 'student' } -->normal object of js
{"id":1,"name":"sobuj","job":"student"} -->stringified using JSON.stringify
*/

const shop = {
  owner: "sobuj",
  address: {
    street: "dhanmondi 15",
    house: "hotel goli",
  },
  products: ["shirt", "pant", "track suit"],
  revenue: 4500,
};
console.log(shop);
// making json
const shopJSON = JSON.stringify(shop);
// now we can the object turned into string
console.log(shopJSON);
// turing json into an string again
const shopObj = JSON.parse(shopJSON);
console.log(shopObj);
