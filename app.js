import path from "path"
import {fileURLToPath} from "url"
import express from 'express'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()

app.use(express.static('public'))

app.get('/home', (request, response, next) => {
    response.sendFile(__dirname + '/views/home-page.html')
})

app.get('/about', (request, response, next) => {
    response.sendFile(__dirname + '/views/about-page.html')
})

app.get('/visuals', (request, response, next) => {
    response.sendFile(__dirname + '/views/photo-page.html')
})

app.listen(3000, () => console.log("It works!"))