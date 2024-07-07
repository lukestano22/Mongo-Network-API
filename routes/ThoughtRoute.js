const Thought = require('../models/thought')
const Reaction = require('../models/reaction')
const path = require('path')
const Router = require('express').Router();

// get all thoughts
Router.get('/', async (req, res) => {
    try{
        let thoughts = await Thought.find()
        res.status(200).json(thoughts)
    } catch(err){
        res.status(500).json({ message: 'internal server error', error: err })
    }
})
// get a single thought by its _id
Router.get('/:thoughtId', async(req, res) => {
    try{
        let thought = await Thought.findOne({_id: req.params.thoughtId})
        res.status(200).json(thought)
    } catch(err){
        res.status(500).json({ message: 'internal server error', error: err })
    }
})

Router.post('/:thoughtId/reactions',async(req,res)=>{
    try{
        let newThoughts = await Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $push: { reactions: req.body } },
            { new: true, useFindAndModify: false }
        )
        if(!newThoughts){
            res.status(404).json('Could not find thought.')
        }
    } catch(err){
        res.status(500).json({ message: 'internal server error', error: err})
    }
})
// update a thought by its _id
Router.put('/thoughts/:id', async (req, res) => {
    try {
        const updatedThought = await Thought.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );
        if (!updatedThought) {
            return res.status(404).json('Thought not found');
        }
        res.json(updatedThought);
    } catch (err) {
        res.status(500).json({ message: 'Internal server error', error: err.message });
    }
});

// remove a thought by its _id
Router.delete('/thoughts/:id', async (req, res) => {
    try {
        const deletedThought = await Thought.findByIdAndDelete(req.params.id);
        if (!deletedThought) {
            return res.status(404).json('Thought not found');
        }
        res.json({ message: 'Thought removed successfully' });
    } catch (err) {
        res.status(500).json({ message: 'Internal server error', error: err.message });
    }
});

// create a reaction stored in a single thought's reactions array field
Router.post('/thoughts/:thoughtId/reactions', async (req, res) => {
    try {
        const thought = await Thought.findById(req.params.thoughtId);
        if (!thought) {
            return res.status(404).json('Thought not found');
        }
        thought.reactions.push(req.body);
        await thought.save();
        res.json(thought);
    } catch (err) {
        res.status(500).json({ message: 'Internal server error', error: err.message });
    }
});

// to pull and remove a reaction by the reaction's reactionId value
Router.delete('/thoughts/:thoughtId/reactions/:reactionId', async (req, res) => {
    try {
        const thought = await Thought.findById(req.params.thoughtId);
        if (!thought) {
            return res.status(404).json('Thought not found');
        }
        thought.reactions.id(req.params.reactionId).remove();
        await thought.save();
        res.json({ message: 'Reaction removed successfully' });
    } catch (err) {
        res.status(500).json({ message: 'Internal server error', error: err.message });
    }
});

module.exports = Router;


module.exports = Router

