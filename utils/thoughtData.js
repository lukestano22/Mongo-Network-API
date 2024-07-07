const Thought = require('../models/thought')

const id1 = '6689eb07d16ed611ab7898ca'
const id2 = '6689eb07d16ed611ab7898cb'

const thoughtData = [
    {
        thoughtText: 'MongoDb & Mongoose are confusing me very much',
        user: id1
    },
    {
        thoughtText: 'Pokemon Heartgold & Soulsilver is easily the best game 🥱',
        user: id2
    }
]

async function dbData(){
    try{
        await Thought.deleteMany({})
        await Thought.create(thoughtData)
        console.log('thought created succesfully')
    }catch(err){
        console.error(err)
    }
}

dbData()

module.exports = thoughtData