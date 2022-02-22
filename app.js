const express = require("express");
const path = require("path");
const app = express();

// Parser request
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// coonection database
require("./src/database/connection");
require("./src/bootstrap")();
//port
const port = 5000;
app.listen(port, () => console.log(`server started on port ${port}`));
