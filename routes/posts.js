const express = require('express')
const router = express.Router()
const Post = require('../models/Post')

router.get('/', async (req, res) => {
    try {
        const posts = await Post.find()
        res.send(posts)
    } catch (err) {
        res.send(err)
    }
})

router.get('/:id', async (req, res) => {
    try {
        console.log(req.params.id)
        const post = await Post.findById(req.params.id)
        res.status(200).send(post)
    } catch (err) {
        res.send(err)
    }
})

router.post('/', async (req, res) => {
    console.log(req.body)
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    })

    try {
        const saved = await post.save()
        res.send(saved)
    } catch (err) {
        res.send(err)
    }
})

router.patch('/:id', async (req, res) => {
    const updateData = {
        title: req.body.title,
        description: req.body.description
    }

    try {
        const updated = await Post.updateOne(
            { _id: req.params.id},
            { $set: updateData }
        )
        res.send(updated)
    } catch (err) {
        res.send(err)
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const removed = await Post.remove({ _id: req.params.id })
        res.status(200).send(removed)
    } catch (err) {
        res.status(500).send(err)
    }
})

module.exports = router
