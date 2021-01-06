#!/usr/bin/env node

var whatisit = require('./App');
(async () => {
console.log(await whatisit('wikis'))
})();
