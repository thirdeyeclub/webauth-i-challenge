const session = require('express-session');
const KnexSessionStore = require('connect-session-knex')(session);
const configuredKnex = require('../database/config00');

module.exports = {
name: 'monster', 
secret: 'secret//+',
cookie: {
    maxAge: 1000 * 60 * 10, // milliseconds
    secure: false, 
    httpOnly: true, 
},
resave: false, 
saveUninitialized: false, 
store: new KnexSessionStore({
    knex: configuredKnex,
    tablename: 'sessions',
    sidfieldname: 'sid',
    createtable: true,
    clearInterval: 1000 * 60 * 30, 
}),
};
