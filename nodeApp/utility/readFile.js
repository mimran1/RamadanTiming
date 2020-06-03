var fs = require("fs");

//Reads a file at location 'path' and returns the conent as string
module.exports = {
    readFileFunc: function (path) {
    var content = fs.readFileSync(path, 'utf8');
    return content;
}
}