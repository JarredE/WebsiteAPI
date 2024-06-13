const express = require('express')
const app = express()
const port = 3000;

app.get('/', (req, res) => {
console.log('root')
res.status(200).json({ message : "error"})
//res.sendStatus(500).send("server error")
//res.send('You are at the root')  ***** very generic not common practice ****
//res.download('server.js') downloads files
})


const userRouter = require('./routes/user')

app.use('/user', userRouter)

console.log("Listening on port " + port)
app.listen(port)