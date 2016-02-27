/**
 * Created by 212400520 on 2/18/16.
 */
'use strict';
function UserModel(obj) {
    for (var prop in obj) {
        this[prop] = obj[prop];
        console.log('adding', prop);
    }
}
exports.UserModel = UserModel;
//# sourceMappingURL=user-model.js.map