/**
 * Created by 212400520 on 2/18/16.
 */
'use strict';
export function UserModel(obj:any) {
    for (let prop in obj) {
        this[prop] = obj[prop];
        console.log('adding', prop);
    }
}