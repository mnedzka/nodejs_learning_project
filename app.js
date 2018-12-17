const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");

const app = express(bodyParser.urlencoded());

app.use("/add-product", (req, res, next) => {
  console.log("in the middleware");
  res.send(
    '<form action="/product" method="POST"><input type="text" name="title" /><button type="submit">Add product</button></form>'
  );
});

app.use("/product", (req, res, next) => {
  console.log("in the middleware");
  res.redirect("/");
});

app.use("/", (req, res, next) => {
  console.log("in the middleware");
  res.send("<h1>Hello from express</h1>");
});

app.listen(3000);
