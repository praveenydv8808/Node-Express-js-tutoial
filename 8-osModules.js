const os = require('os')

// return the user info
const user = os.userInfo()

console.log(user)

//all in object

const currentOS ={
    user :os.userInfo(),
    freeMemory : os.freemem(),
    type : os.type(),
    uptime : os.uptime()
}
console.log(currentOS)