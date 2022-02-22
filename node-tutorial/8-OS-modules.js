const os = require('os')

// info about current user
console.log(os.userInfo())

// method returns the system uptime in seconds
console.log(os.uptime())

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}

console.log(currentOS);