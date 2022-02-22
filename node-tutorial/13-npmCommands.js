// npm (global command, comes with node)
// npm --version (version of npm)

// local dependency (use it in this project only)
// npm i <packageName>

// global dependency (use it in any project)
// npm i -g <packageName>

// package.json (manifest file that stores important info about project/package)

const _ = require('lodash')

const items = [ 1, [ 2, [ 3, [ 4 ] ] ] ]
const newItems = _.flattenDeep(items)
console.log(newItems);
console.log(_.capitalize('hEllo'));
console.log(_.endsWith('Hi, my name is Jordan', 'Jordan'));