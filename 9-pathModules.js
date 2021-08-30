const path = require('path') 
console.log(path.sep)

const joiningPath=path.join(__dirname,'/contents','table','new.txt')
console.log(joiningPath)

const baseName = path.basename(joiningPath)
console.log(baseName)