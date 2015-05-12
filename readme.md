# Broken sourcemaps with webpack?

## Abstract

`extract-text-webpack-plugin` is used to create an external css file so that source maps *should* work.

src/main.js injects a simple link element to reference the external css file and creates a simple text node in the body.
 
src/main.js requires styles.less, styles.scss and styles.styl.

Each of the styles.* files effect different properties on the body element and they each have an identical loader config. 

When using developer tools, it appears (at a glance) that the sourcemaps are generated correctly, but only the mapping 
from styles.less works correctly.

- Stylus has the correct line number in chrome dev tools, but clicking on styles.styl:1 is an empty file.
- Sass also has the correct line number, but clicking on styles.scss:3 is also an empty file
- Less gets it right, clicking on styles.less:3 shows the sourcecode of styles.less

## To run the example

`webpack-dev-server`

I've experienced some weird behaviour with node-sass when compiling, sometimes it errors, sometimes it doesn't.
Retries might work.

Anyway, once node-sass works, visit this url in a browser with sourcemap support and inspect the body element with the
 developer tools.

`http://localhost:8080/bundle`