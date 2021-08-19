const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const path = require("path");
const index = require("./index");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(morgan("common"));
app.use(helmet());

app.set("view engine", "pug");

app.use("/", index);

const port = process.env.PORT || "8000";
app.listen(port, () => console.log(`Listening at http://localhost:${port}`));
