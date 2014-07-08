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

## KNOWN BUG

you need use single quote `'` to wrap the resource path, otherwise fis won't get right resource path.

e.g.

```html
<header>
<img src="a.png"> <!-- wrong -->
<img src='a.png'> <!-- right -->
<h1>This is header</h1>
</header>
```



## DEMO

https://github.com/hefangshi/fis-parser-nunjucks-demo
