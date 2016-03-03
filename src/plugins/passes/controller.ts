'use strict';
const path = require('path');
const assert = require('assert');
const Model = require('./model').default;
const Service = require('./service').default;
let service;

/**
 * TODO - Describe what your controller does.
 *
 * @class         Passes
 * @module        Passes
 * @constructor
 */
export default class PassesController {

    //service:Service;
    model:Model;
    collection:any;

    /**
     *
     * @param options
     */
    constructor(options:any) {
        console.log('PassesController Constructor');
        service = new Service();
    }

    /**
     *
     * @param req
     * @param res
     * @param next
     */
    use(req, res, next) {
        console.log('Passes.use', req.method, req.url, req.params);
        next();
    }

    /**
     *
     * @param req
     * @param res
     * @param next
     */
    all(req, res, next) {
        if (req.params.id) {
            req.id = req.params.id;
            console.log('Got id', req.id);
        }
        console.log('PassesController-controller.all', req.method, req.url);
        next();
    }

    /**
     *
     * @param req
     * @param res
     * @param next
     */
    index(req, res, next) {
        next();
    }

    get_route(req, res, next) {
        if (req.id) {
            service.get(req.id).then((resp) => {
                res.status(200).send(resp);
            }).catch((err) => {
                res.status(404).send(err);
            });
        } else {
            service.find(req.params).then((resp) => {
                res.status(200).send(resp);
            }).catch((err) => {
                res.status(404).send(err);
            });
        }
    }

    /**
     *
     * @param req
     * @param res
     * @param next
     */
    post_route(req, res, next) {
        let m = new Model(req.body);
        console.log('creating', m);

        service.save(m).then((resp) => {
            res.status(201).send(resp);
        }).catch((err) => {
            res.status(404).send(err);
        })
    }

    /**
     *
     * @param req
     * @param res
     * @param next
     */
    put_route(req, res, next) {
        var model = new Model(req.body);
        console.log('updating', req.params.id);

        service.save(model).then((resp) => {
            res.status(200).send(resp);
        }).catch((err) => {
            res.status(404).send(err);
        });
    }

    /**
     *
     * @param req
     * @param res
     * @param next
     */
    delete_route(req, res, next) {
        assert(req.params.id, 'has id');
        console.log('removing', req.params.id);

        service.remove(req.params.id).then((resp) => {
            res.status(200).send(resp);
        }).catch((err) => {
            res.status(404).send(err);
        });
    }
}
