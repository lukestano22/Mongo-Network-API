const Router = require('express').Router()
const ThoughtRoute = require('./ThoughtRoute');
const UserRoute = require('./UserRoute');

Router.use('/thoughts', ThoughtRoute)
Router.use('/users', UserRoute)

module.exports = Router;