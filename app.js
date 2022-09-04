const express = require('express');
const app = express();
const port = 3000

app.use(express.static(__dirname + '/public'))

app.get('/welcome', (req, res) => {
	console.log(__dirname)
	res.sendFile(__dirname + '/views/welcome.html')
})

app.get('/information', (req, res) => {
	res.sendFile(__dirname + '/views/information.html')
})

app.get('/work', (req, res) => {
	res.sendFile(__dirname + '/views/work.html')
})

app.listen(port, () => {
	console.log(`localhost${port}`)
})
