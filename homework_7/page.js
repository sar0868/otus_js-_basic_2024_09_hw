const fs = require("fs");
const { JSDOM } = require("jsdom");

const html = fs.readFileSync("./indexHW7.html");
const page = new JSDOM(html);

module.exports = page;
