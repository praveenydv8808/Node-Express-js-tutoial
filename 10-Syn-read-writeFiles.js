const file= require('fs')

//reading files

const first = file.readFileSync('./contents/first.txt','utf-8')

// writing files

const second = file.writeFileSync('./contents/third.txt',`hello writing files. ${first}`)

console.log(first,second)