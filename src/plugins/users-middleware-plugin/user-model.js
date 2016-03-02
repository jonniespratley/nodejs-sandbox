'use strict';
function UserModel(obj) {
    for (let prop in obj) {
        this[prop] = obj[prop];
        console.log('adding', prop);
    }
}
exports.UserModel = UserModel;
//# sourceMappingURL=user-model.js.map