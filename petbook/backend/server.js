const express = require('express')

const app = express()

app.get('/', (req, res) => {
	res.send('Welcome to the server...')
})

app.get('/example', (req, res) => {
	res.send('Example...')
})

app.listen(8000, () => {
	console.log('Server is listening')
})
