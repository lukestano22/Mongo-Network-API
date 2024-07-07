const Router = require('express').Router()
const User = require('../models/user')
const path = require('path')

Router.get('/', async(req, res) => {
    try{
        let allUsers = await User.find({})
        res.status(200).json(allUsers)
    }catch(err){
        res.status(500).json('internal server error', err)
    }
})

Router.get('/:userId', async(req, res) => {
    try{
        let userId = await User.findOne({ _id: req.params.userId})
        if(!userId){
            res.status(400).json('user not found')
        }
        res.status(200).json(userId)
    } catch(err){
        res.status(500).json({ message: 'internal server error', error: err })
    }
})
Router.post('/', async(req, res) => {
    try{
        let createUser = await User.create(req.body)
        req.body(201).json('User created successfully!')
    } catch(err){
        res.status(500).json({ message: 'internal server error', error: err })
    }
})
// update a user by its id
Router.put('/users', async (req, res) => {
    try{

    }catch(err){
        res.status(500).json({ message: 'internal server error', error: err })
    }
})
// remove user by its id
Router.delete('/users', async (req, res) => {
    try {

    }catch(err){
        res.status(500).json({ message: 'internal server error', error: err })
    }
})
// adds a new friend to a user's friend list
Router.post('', async (req, res) => {
    try{

    }catch(err){
        res.status(500).json({ message: 'internal server error', error: err })
    }
})
// removes a friend from a user's friend list
Router.delete('', async (req, res) => {
    try{

    }catch(err){
        res.status(500).json({ message: 'internal server error', error: err })
    }
})


module.exports = Router