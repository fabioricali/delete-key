/**
 * Deletes keys of object
 * @param targetObj {Object} target object
 * @param keys {Array} keys to be deleted
 * @param [recursive=false] {boolean} recursive
 * @returns {*}
 */

const deleteKey = (targetObj, keys = [], recursive = false) => {
    for (let i in targetObj) {
        /* istanbul ignore else  */
        if (targetObj.hasOwnProperty(i)) {
            if (recursive && typeof targetObj[i] === 'object') {
                deleteKey(targetObj[i], keys, true);
            } else if(keys.indexOf(i) !== -1) {
                delete targetObj[i];
            }
        }
    }
    return targetObj;
};

/**
 * Deletes keys of a copy of the target object
 * @param args[0] {Object} target object
 * @param args[1] {Array} keys to be deleted
 * @param args[2] {boolean} recursive
 * @returns {*}
 */
const copy = (...args) => {
    args[0] = Object.assign({}, args[0]);
    return deleteKey.apply(this, args);
};

module.exports = deleteKey;
module.exports.copy = copy;