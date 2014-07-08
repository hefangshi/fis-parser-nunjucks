/*
 * fis
 * http://fis.baidu.com/
 */

'use strict';

var nunjucks = require('nunjucks');
var parser = nunjucks.parser;
var Environment = nunjucks.Environment;

function normalize(file, src, env){
    var added = {};
    var path = fis.util.pathinfo(file.toString());
    var tokens = parser.parse(src, env.extensions);

    function addDep(token){
        token.children && token.children.forEach(function(child){
            if (child.template && !added[child.template.value]){
                added[child.template.value] = true;
                var childPath =
                    child.template.value.indexOf("/") === 0 ?
                    child.template.value :
                    path.dirname + "/" + child.template.value;
                if (file.isFile){
                    var id = fis.file(childPath).getId();
                    file.addRequire(id);
                    //TODO 用更靠谱的办法替换相对路径与ID
                    src = src.replace(child.template.value, id);
                }
            }
            addDep(child);
        });
        token.body && addDep(token.body);
    }

    src = fis.compile.extHtml(src);
    addDep(tokens);
    return src;
}

module.exports = function(content, file, opt){
    opt.name = typeof opt.name === 'function' && opt.name(file) || file.getId();
    opt.env = new Environment([], opt.env);
    content = normalize(file, content, opt.env);
    content = nunjucks.precompileString(content, opt);
    return content;
};

module.exports.defaultOptions = {
    asFunction: true
};