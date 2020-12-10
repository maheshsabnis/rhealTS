"use strict";
exports.__esModule = true;
exports.StringUtilities = void 0;
// export the class as module
var StringUtilities = /** @class */ (function () {
    function StringUtilities() {
    }
    StringUtilities.prototype.getLength = function (str) {
        return str.length;
    };
    StringUtilities.prototype.changeCase = function (c, str) {
        switch (c) {
            case 'U':
                str = str.toUpperCase();
                return str;
                break;
            case 'L':
                str = str.toLowerCase();
                return str;
                break;
        }
    };
    return StringUtilities;
}());
exports.StringUtilities = StringUtilities;
