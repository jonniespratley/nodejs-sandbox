'use strict';
const path = require('path');
const Model = require('./model').default;
const Service = require('./service').default;

/**
 * TODO - Describe what your controller does.
 *
 * @class         {{pascalCase name}}
 * @module        {{pascalCase name}}
 * @constructor
 */
 let service;
export default class {{pascalCase name}}Controller {

    //service:Service;
    model:Model;
    collection:any;

    constructor(options:any) {
        console.log('{{pascalCase name}}Controller Constructor');
        service = new Service();
    }

    use(req, res, next) {
        console.log('{{pascalCase name}}Controller Time: ', Date.now());
        console.log('{{pascalCase name}}.use', req.method, req.url);
        if (req.params.id) {
            req.id = req.params.id;
            console.log('Got id', req.id);
        }
        next();
    }

    all(req, res, next) {
        console.log('{{pascalCase name}}Controller-controller.all', req.method, req.url);
        next();
    }

    index(req, res, next) {
        next();
    }

    get_route(req, res, next) {
        if (req.id) {
            service.get(req.id).then((resp)=> {
                res.status(200).send(resp);
            }).catch((err)=> {
                res.status(404).send(err);
            });
        } else {
            service.find(req.params).then((resp)=> {
                res.status(200).send(resp);
            }).catch((err)=> {
                res.status(404).send(err);
            });
        }
    }

    post_route(req, res, next) {
        let m = new Model(req.body);
        console.log('creating', m);

        service.save(m).then((resp)=> {
            res.status(201).send(resp);
        }).catch((err)=> {
            res.status(404).send(err);
        })
    }

    put_route(req, res, next) {
        var model = new Model(req.body);
        model.id = req.id;
        console.log('updating', model);
        service.save(model, (err, resp)=> {
            res.status(200).send(resp);
        }).catch((err)=> {
            res.status(404).send(err);
        });
    }

    delete_route(req, res, next) {
        console.log('removing', req.id);
        service.remove(req.id, (err, resp)=> {
            res.status(200).send(resp);
        }).catch((err)=> {
            res.status(404).send(err);
        });
    }
}
