'use strict';
var debug = require('debug');
var Logger = (function () {
    function Logger(namespace) {
        this.namespace = namespace;
    }
    Logger.prototype.getLogger = function (category) {
        return debug(this.namespace + ":" + category);
    };
    return Logger;
})();
exports["default"] = Logger;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wbHVnaW5zL2xvZ2dlci9pbmRleC50cyJdLCJuYW1lcyI6WyJMb2dnZXIiLCJMb2dnZXIuY29uc3RydWN0b3IiLCJMb2dnZXIuZ2V0TG9nZ2VyIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7QUFDYixJQUFNLEtBQUssR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7QUFFL0I7SUFDSUEsZ0JBQVlBLFNBQWdCQTtRQUN4QkMsSUFBSUEsQ0FBQ0EsU0FBU0EsR0FBR0EsU0FBU0EsQ0FBQ0E7SUFDL0JBLENBQUNBO0lBQ0RELDBCQUFTQSxHQUFUQSxVQUFVQSxRQUFRQTtRQUNkRSxNQUFNQSxDQUFDQSxLQUFLQSxDQUFJQSxJQUFJQSxDQUFDQSxTQUFTQSxTQUFJQSxRQUFVQSxDQUFDQSxDQUFDQTtJQUNsREEsQ0FBQ0E7SUFFTEYsYUFBQ0E7QUFBREEsQ0FSQSxBQVFDQSxJQUFBO0FBUkQsMkJBUUMsQ0FBQSIsImZpbGUiOiJwbHVnaW5zL2xvZ2dlci9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbbnVsbF0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
