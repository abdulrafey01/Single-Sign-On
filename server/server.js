const express = require('express')
const jwt = require('jsonwebtoken')
const cors = require('cors')
const app = express()

const { createServer } = require('node:http')
const { Server } = require('socket.io')

app.use(express.json())
app.use(cors({
    origin: ['http://localhost:7000', 'http://localhost:8000', 'http://localhost:3000'],
    methods: 'GET,POST',
    credentials: true,
  }));

const server = createServer(app)
const io = new Server(server, {
    maxHttpBufferSize: 1e8,
    cors: {
        origin: ["http://localhost:7000", "http://localhost:8000",'http://localhost:3000'],
    }
});


const users = [
    {
        name: 'user1',
        password: 'pass1'
    }
]

const isLogin = false

io.on('connection', (socket)=>{
    console.log("Connection Made")
})

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.post('/login', (req, res) => {
    const { name, password } = req.body
    console.log(req.body)
    const user = users.find(user => user.name === name && user.password === password)

    if(!user){
        return res.status(401).send('Invalid Credentials')
    }

    const token = jwt.sign({ user }, 'secretkey', { expiresIn: '1h' })
    io.emit("userLoggedIn")
    return res.send(token)
})

app.post('/logout', (req,res)=>{
    io.emit('userLoggedOut')
})


server.listen(5000, () => {
    console.log('Server started on port 5000')
})