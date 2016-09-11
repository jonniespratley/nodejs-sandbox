'use strict';
const path = require('path');
const assert = require('assert');
const Model = require('./model').default;
const Service = require('./service').default;
const Logger = require('../logger').default;
const log = new Logger('passes-plugin').getLogger('controller');
let service;

/**
 *
 * @class           PassesController
 * @description     This controller handles the routes from the router.
 * @module        plugins/passes
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
        log.info('Constructor');
        service = new Service();
    }

    /**
     *
     * @param req
     * @param res
     * @param next
     */
    use(req, res, next) {
        log.info('use', req.method, req.url, req.params);
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
            log.info('Got id', req.id);
        }
        log.info('all', req.method, req.url);
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
        if (req.params.id) {
            service.get(req.params.id).then((resp) => {
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
        log.info('creating', m);

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
        log.info('updating', req.params.id);

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
        log.info('removing', req.params.id);

        service.remove(req.params.id).then((resp) => {
            res.status(200).send(resp);
        }).catch((err) => {
            res.status(404).send(err);
        });
    }
}
