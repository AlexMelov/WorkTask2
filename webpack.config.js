const path = require("path");

module.exports = {
  mode: "development",
  entry: "./app.js",
  output: {
    filename: "app.js",
    path: path.resolve(__dirname, "App"),
  },
};
