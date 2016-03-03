'use strict';
const _ = require('lodash');
/**
 * TODO - Describe what your model does.
 *
 * @class         Passes
 * @module        Passes
 * @constructor
 */
export default class Model {
    id:string;
    constructor(obj:any) {
        _.assign(this, obj);
        this.id = obj.id || _.uniqueId('model-');
        console.log('Model constructor', obj, this);
    }
}
