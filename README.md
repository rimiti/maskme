# maskme

[![Build Status](https://travis-ci.org/rimiti/maskme.svg?branch=master)](https://travis-ci.org/rimiti/maskme.svg?branch=master)
[![Coverage Status](https://coveralls.io/repos/github/rimiti/maskme/badge.svg?branch=master)](https://coveralls.io/github/rimiti/maskme?branch=master)
[![MIT license](http://img.shields.io/badge/license-MIT-brightgreen.svg)](http://opensource.org/licenses/MIT) [![Greenkeeper badge](https://badges.greenkeeper.io/rimiti/maskme.svg)](https://greenkeeper.io/)

## Description 

This module provide a powerful function to hide you sensible data with "lookbehind" regex. 

## Using this module in other modules

```ts
import Maskme from '@rimiti/maskme';
```

```js
const Maskme = require('@rimiti/maskme').default;
```

## How to use it?

Keep 2 first and 2 last chars (default configuration: offsetLeft: 2, offsetRight: 2):
```
Maskme("4242424242424242");
42************42
```

Keep 4 first and 4 last chars and customize replacer:
```
Maskme("4242424242424242", {replaceBy: "x"});
42xxxxxxxxxxxx42
```

Kepp 2 last chars:
```
Maskme("4242424242424242", {offsetLeft: 0,});
**************42
```

Keep 2 first chars:
```
Maskme("4242424242424242", {offsetRight: 0});
42**************
```

Hide all chars:
```
Maskme("4242424242424242", {offsetRight: 0, offsetLeft: 0});
****************
```

Keep 6 first and 5 last chars:
```
Maskme("4242424242424242", {offsetLeft: 6, offsetRight: 5});
424242*****24242
```

Hide nothing:
```
Maskme("4242424242424242", {offsetLeft: 30, offsetRight: 40});
4242424242424242
```

## License

MIT © [Dimitri DO BAIRRO](https://github.com/rimiti/maskme/blob/master/LICENSE)
