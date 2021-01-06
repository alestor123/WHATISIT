#!/usr/bin/env node

var whatisit = require('./App'),
chalk = require('chalk'),
options = require('minimist')(process.argv.slice(2)),
name = options.n || options.name || 'whatisit';
(async () => {
console.log(chalk.green(name)+ ' : ' + await whatisit(name))
})();
