const path = require('path');

module.exports.entry = "./src/app.ts";

module.exports.output = {
    path: path.resolve(__dirname, '../build'),
    filename: "app.js",
}
module.exports.resolve = {
    extensions: ['.ts', '.tsx', '.js', '.json']
}
