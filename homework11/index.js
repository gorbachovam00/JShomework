import { name } from "./module";
import "./style.css";

var validator = require("validator");
validator.isEmail("foo@bar.com");

console.log("Your name:" + name);

// var moment = require("moment");
// console.log(moment().format("MMMM Do YYYY, h:mm:ss a"));
