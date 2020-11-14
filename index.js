require('dotenv').config()
const Joi = require('joi')
const mongoose = require('mongoose')
const express = require('express')
const app = express()
app.use(express.json())

const DB = process.env.DB
mongoose.connect( DB,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log('connected to db')
)
// const courses = [
//     { id: 1, name: 'course1' },
//     { id: 2, name: 'course2' },
//     { id: 3, name: 'course3' },
// ]

// app.get('/', (req, res) => {
//     res.send('Hello world...')
// })

// app.get('/api/courses', (req, res) => {
//     res.send(courses)
// })

// app.post('/api/courses', (req, res) => {
//     const schema = Joi.object({
//         name: Joi.string().min(3).required()
//     })
//     try {
//         const result = schema.validate(req.body)
//         if (result.error) {
//             return res.status(422).send(result.error.details[0].message)
//         }
//     } catch (e) {
//         return res.status(422).send(e)
//     }
//
//     const course = {
//         id: courses.length + 1,
//         name: req.body.name
//     }
//     courses.push(course)
//     res.status(201).send(course)
// })

// app.get('/api/courses/:id', (req, res) => {
//     const course = courses.find( course => course.id === parseInt(req.params.id))
//     if (!course) res.status(404 ).send('The course with the given ID was not found.')
//     res.send(course)
// })

//MIDDLEWARES
// app.use('/posts', () => {
//     console.log('this is middleware running')
// })

// IMPORT ROUTES
const postsRoute = require('./routes/posts')
app.use('/posts', postsRoute)

const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`Listen on port ${port}...`)
})
