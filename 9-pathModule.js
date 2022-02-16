const path = require('path')

// platform file specific separator
console.log(path.sep);

// join filepaths into a string
const filePath = path.join('./content', 'subfolder', 'test.txt');
console.log(filePath);

console.log(path.basename(filePath));
console.log(path.resolve(__dirname, 'content', 'subfolder', 'text.txt'));
