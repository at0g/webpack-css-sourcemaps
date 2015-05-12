'use strict';

var sassCSS = require('./styles.scss');
var lessCSS = require('./styles.less');
var stylusCSS = require('./styles.styl');

var css = document.createElement('link');
css.setAttribute('rel', 'stylesheet');
css.setAttribute('type', 'text/css');
css.setAttribute('href', './styles.css');

document.head.appendChild(css);

var bodyText = document.createTextNode('less sourcemaps work - scss and stylus do not');
document.body.appendChild(bodyText);

module.exports = 'main';