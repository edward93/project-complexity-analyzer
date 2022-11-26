// Set options as a parameter, environment variable, or rc file.
// eslint-disable-next-line no-global-assign
require = require("esm")(module /* , options */);

const app = require("./main.js");
module.exports = app;
