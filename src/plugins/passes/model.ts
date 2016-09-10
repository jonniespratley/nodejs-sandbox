'use strict';
const _ = require('lodash');
/**
 * @class         Pass
 * @module        plugins/passes
 * @constructor
 */
export default class Model {
    id:string;
    constructor(obj:any) {
      _.assign(this, obj);
      this.id = obj.id || _.uniqueId('model-');
    }
}
