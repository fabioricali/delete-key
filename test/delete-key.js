const deleteKey = require('../src/delete-key');
const be = require('bejs');

describe('delete-key', function () {

    describe('delete', function () {
        it('should be return true', () => {
            let result = deleteKey({a: 4, b: 5}, ['b']);
            console.log(result);
            be.err.equal(result, {a: 4});
        });

        it('undefined key, should be return true', () => {
            let result = deleteKey({a: 4, b: 5}, ['z']);
            console.log(result);
            be.err.equal(result, {a: 4, b: 5});
        });
    });

    describe('delete deep', function () {
        it('should be return true', () => {
            let result = deleteKey({a: 4, b: 5, d: {a: 1}}, ['a'], true);
            console.log(result);
            be.err.equal(result, {b: 5, d: {}});
        });
    });

});