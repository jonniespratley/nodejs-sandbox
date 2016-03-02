
/**
 * Created by 212400520 on 2/18/16.
 */
'use strict';
const _ = require('lodash');
export default function UserModel(obj:any) {
    for (let prop in obj) {
        this[prop] = obj[prop];
        console.log('UserModel', prop, '=', obj[prop]);
    }
    this.id = obj.id || _.uniqueId('user-');
}