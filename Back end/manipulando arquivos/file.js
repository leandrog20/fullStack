const { error } = require('console')
const fs = require('fs')

fs.unlink('teste2.txt', error => console.log(error))