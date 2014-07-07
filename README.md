# fis-parser-nunjucks


## Feature

precompile nunjucks template, support extend and include tags.

## Usage

    $ npm install -g fis-postpackager-nunjucks
    $ vi path/to/project/fis-conf.js

```javascript
//file : path/to/project/fis-conf.js

fis.config.set('modules.parser.tmpl', 'nunjucks');

// http://mozilla.github.io/nunjucks/api.html
fis.config.set('settings.parser.nunjucks', {
     env : {
         tags : {
             blockStart: '{%',
             blockEnd: '%}'
         }
     }
});
```

## DEMO

https://github.com/hefangshi/fis-parser-nunjucks-demo
