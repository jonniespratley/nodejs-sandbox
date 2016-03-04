'use strict';
const path = require('path');
const assert = require('assert');
const Model = require('./model').default;
const PostsService = require('./service').default;
const Logger = require('../logger').default;
const log = new Logger('Posts').getLogger('controller');
let service;

/**
 * TODO - Describe what your controller does.
 *
 * @class
 * @module        Posts
 * @constructor
 */
export default class PostsController {

    service:PostsService;
    model:Model;
    collection:any;

    /**
     *
     * @param options
     */
    constructor(options:any) {
        log('Constructor');
        service = new PostsService();
    }

    /**
     *
     * @param req
     * @param res
     * @param next
     */
    use(req, res, next) {
        log('use', req.method, req.url, req.params);
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
        log('all', req.method, req.url);
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
        log('creating', m);

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
      if(req.params.id){
        req.body.id = req.params.id;
      }
      let model = new Model(req.body);
      log('updating', req.params.id);
      service.get(model.id).then((resp) => {
        service.save(model).then((resp) => {
            res.status(200).send(resp);
        }).catch((err) => {
            res.status(404).send(err);
        });
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
        log('removing', req.params.id);

        service.remove(req.params.id).then((resp) => {
            res.status(200).send(resp);
        }).catch((err) => {
            res.status(404).send(err);
        });
    }
}
