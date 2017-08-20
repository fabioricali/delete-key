/**
 * Deletes keys of object
 * @param targetObj {Object} target object
 * @param keys {Array} keys to be deleted
 * @param [recursive=false] {boolean} recursive
 * @returns {*}
 */

const deleteKey = (targetObj, keys = [], recursive = false) => {
    for (let i in targetObj) {
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

module.exports = deleteKey;