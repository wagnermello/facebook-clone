const express = require('express')

const app = express()

app.get('/', (req, res) => {
	res.send('Server is ok. This is the home page.')
})

app.get('/test', (req, res) => {
	res.send('This is the test page')
})

app.listen(8000, () => {
	console.log('Server is listening.')
})
