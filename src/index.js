import restify from 'restify';
import mongoose from 'mongoose';

import seed from './seed';
import User from './models/User';

// seed();

mongoose.connect('mongodb://localhost/rxsupp', { useMongoClient: true });
mongoose.Promise = global.Promise;

const server = restify.createServer({
    name: 'rxsupp.admin',
    version: '1.0.0'
});

server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());

server.get('/users', (req, res, next) => {
    User.find((err, users) => {
        if (err) res.send(500, 'Error.');
        res.send(users);
    });
    return next();
});

server.get('/users/:login', (req, res, next) => {
    res.send(req.params);
    return next();
});

server.post('/users', (req, res, next) => {
    res.send(req.params);
    return next();
});

server.put('/users', (req, res, next) => {
    res.send(req.params);
    return next();
});

server.del('/users', (req, res, next) => {
    return next();
});

server.listen(8080, () => {
    console.log('%s listening at %s', server.name, server.url);
});
