
const Http = require('http')

const server= Http.createServer((req,res)=>{
    if(req.url==='/'){
    res.end("hello we are on the homepage.")}
    if(req.url==='/about'){
        res.end(`this is the about page.`)
    }
    res.end(`<h1>Oops!<h1>
    <p>we can't found page</p>
    <a href='/'>back homepage</a>
    `)
})
server.listen(5000)
console.log('server running......')