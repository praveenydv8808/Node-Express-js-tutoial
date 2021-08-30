const EventEmmiter = require('events')

const emmiter = new EventEmmiter()

emmiter.on('responce',(name,id)=>{
    console.log(`message and the name of event is ${name} and id is : ${id}`)
})
emmiter.emit('responce','praveen',345)