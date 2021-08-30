const {readFile,writeFile} =require('fs')
console.log('stating')
readFile('./contents/first.txt','utf8', (err,result)=>{
    if(err){console.log(err)
    return}
    result=console.log(result)
    })
    const first= result
readFile('./contents/second.txt','utf8',(err,result)=>{
    if(err){
        console.log(err)
        return
    }result=console.log(result)
   
})
const second = result

writeFile('./contents/fouth.txt','utf8',`I'm writing files ${first} ${second}`,(err,result)=>{
    if(err){
        console.log(err)
    return}

    console.log(`i'm done with this task`)

})

console.log('new task')


