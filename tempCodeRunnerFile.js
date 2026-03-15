const express = require('express');
const app = express();
const path = require('path');

const dotenv = require('dotenv');
dotenv.config();

const chatRouter = require('./indexRouter');

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const stylePath = path.join(__dirname, "public");
app.use(express.static(stylePath));

app.use(express.urlencoded({ extended: true }));
app.use('/', chatRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server Listening on Port ", PORT);
});