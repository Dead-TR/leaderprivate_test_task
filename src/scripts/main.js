"use strict";
var sqrArr = [1, 2, 3, 4, 5, 6];
var sqrNum = function (array) {
    return array.reduce(function (a, b, i, src) {
        // tslint:disable-next-line: no-unused-expression
        console.log((a, b, i, src));
        return a;
    });
};
