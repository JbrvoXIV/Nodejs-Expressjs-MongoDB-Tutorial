// Unless sending back a response, must use next (i.e res.send('Completed inside middleware'))
// Contain middleware in a seperate file from main server file
const logger = (req, res, next) => {
    const method = req.method
    const url = req.url
    const time = `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`
    console.log(method, url, time)
    next()
}

module.exports = logger;