var faker = require("faker");

for (var i = 0; i < 10; i++) {
  console.log("$" + faker.commerce.price() + " " + faker.commerce.productName());
}
