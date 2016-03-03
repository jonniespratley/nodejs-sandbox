'use strict';
const path = require('path');
const Model = require('./model.js').default;
const Service = require('./service.js').default;

/**
 * TODO - Describe what your controller does.
 *
 * @class         Passes
 * @module        Passes
 * @constructor
 */
export default class PassesController {

    service:Service;
    model:Model;
    collection:any;

    constructor(options:any) {
        console.log('PassesController Constructor');
        this.service = new Service();

    }

    use(req, res, next) {
        console.log('Time: ', Date.now());
        console.log('Passes.use', req.method, req.url);
        if (req.params.id) {
            req.id = req.params.id;
            console.log('Got id', req.id);
        }
        next();
    }

    all(req, res, next) {

        console.log('-controller.all', req.method, req.url);
        next();
    }

    index(req, res, next) {
        next();
    }

    get_route(req, res, next) {
        if (req.id) {
            this.service.get(req.id).then((resp)=> {
                res.status(200).send(resp);
            }).catch((err)=> {
                res.status(404).send(err);
            });
        } else {
            this.service.find(req.params).then((resp)=> {
                res.status(200).send(resp);
            }).catch((err)=> {
                res.status(404).send(err);
            });
        }
    }

    post_route(req, res, next) {
        let m = new Model(req.body);
        console.log('creating', m);

        this.service.save(m).then((resp)=> {
            res.status(201).send(resp);
        }).catch((err)=> {
            res.status(404).send(err);
        })
    }

    put_route(req, res, next) {
        var model = new Model(req.body);
        model.id = req.id;
        console.log('updating', model);
        this.service.save(model, (err, resp)=> {
            res.status(200).send(resp);
        }).catch((err)=> {
            res.status(404).send(err);
        });
    }

    delete_route(req, res, next) {
        console.log('removing', req.id);
        this.service.remove(req.id, (err, resp)=> {
            res.status(200).send(resp);
        }).catch((err)=> {
            res.status(404).send(err);
        });
    }
}
