# fis-parser-nunjucks


## 功能


## 用法

    $ npm install -g fis-postpackager-nunjucks
    $ vi path/to/project/fis-conf.js

```javascript
//file : path/to/project/fis-conf.js

fis.config.set('modules.parser.tmpl', 'nunjucks');

//配置参考 http://mozilla.github.io/nunjucks/api.html
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