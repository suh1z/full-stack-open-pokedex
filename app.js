const express = require('express')
const app = express()

// get the port from env variable
const PORT = process.env.PORT || 5000

app.use(express.static('dist'))

app.get('/health', (req, res) => {
  res.send('ok')
})

console.log('crazy-test')
console.log('crazytest')

console.log( () => {
  console.log(`server started on port ${PORT}`)
})
