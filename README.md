<div align="center">
<h1>delete-key</h1>
Deletes keys of an object.
<br/><br/>
<a href="https://travis-ci.org/fabioricali/delete-key" target="_blank"><img src="https://travis-ci.org/fabioricali/delete-key.svg?branch=master" title="Build Status"/></a>
<a href="https://coveralls.io/github/fabioricali/delete-key?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/fabioricali/delete-key/badge.svg?branch=master" title="Coverage Status"/></a>
<a href="https://opensource.org/licenses/MIT" target="_blank"><img src="https://img.shields.io/badge/License-MIT-yellow.svg" title="License: MIT"/></a>
<img src="https://img.shields.io/badge/team-terrons-orange.svg" title="Team Terrons"/>
</div>

## Installation

### Node.js
```
npm install delete-key --save
```

## Example

```javascript
const deleteKey = require('delete-key');

const targetObj = {a: 4, b: 5, d: {a: 1}};

const result = deleteKey(targetObj, ['b, d']);

console.log(result); //=> {a: 4};
```

### Deletes recursively
```javascript
const targetObj = {a: 4, b: 5, d: {a: 1}};

const result = deleteKey(targetObj, ['b, a'], true);

console.log(result); //=> {a: 4, d: {}};
```

## Changelog
You can view the changelog <a target="_blank" href="https://github.com/fabioricali/delete-key/blob/master/CHANGELOG.md">here</a>

## License
delete-key is open-sourced software licensed under the <a target="_blank" href="http://opensource.org/licenses/MIT">MIT license</a>

## Author
<a target="_blank" href="http://rica.li">Fabio Ricali</a>