#!/usr/bin/env node
'use strict';
 
const { ArgumentParser } = require('argparse');
const { version } = require('./package.json');
const fs = require('fs')

const parser = new ArgumentParser(
{
  description: 'Argparse example'
});
 
parser.add_argument('-v', '--version', { action: 'version', version });
parser.add_argument('-y', {action: 'store_true'});

let args = parser.parse_args();
if(args.y == true) 
{
process.chdir(process.cwd())
fs.writeFile('index.html', `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${process.cwd().split('/')[process.cwd().split('/').length - 1]}</title>
</head>
<body>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono&display=swap');
        body {
            text-align: center;
            font-family: 'JetBrains Mono';
        }
        img {
            height: 200px;
            border: 5px solid transparent;
            border-radius: 10px;
        }

img { 
    animation-name: floating;
    animation-duration: 3s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
}
 
@keyframes floating {
    0% { transform: translate(0,  0px); }
    50%  { transform: translate(0, 10px); }
    100%   { transform: translate(0, -0px); }   
}
code {
    font-family: 'JetBrains Mono';
    font-size: 100%;
    background-color: #d0d0d0;
    border: 1px solid transparent;
    border-radius: 3px;
    padding: 2px;
}
    </style>
    <div id="h-main"></div>
    <script src="./hyssop.min.js"></script>
</body>
</html>
`, (e) => {
    if (e) console.log(e);
})
fs.writeFile('main.html', `<img src="https://github.com/lillupad/hyssop.js/blob/master/docs/hyssop.png?raw=true" />
<h1>welcome to hyssop!</h1>
to get started, edit <code>main.html</code> in your <span title="vscode is the best">favourite text editor</span><br>
or...<br>
<a href="https://hyssopjs.readthedocs.org" h-ignore="true">read the docs</a>
`, (e) => {
    if (e) console.log(e);
})
fs.writeFile('hyssop.min.js', `function listener(){document.getElementById("h-main").innerHTML=this.responseText}globalThis.req=new XMLHttpRequest,globalThis.req.addEventListener("load",listener),globalThis.req.open("GET","main.html"),globalThis.req.send(),document.body.addEventListener("click",e=>{"A"===e.target.tagName&&"true"!=e.target.getAttribute("h-ignore")&&(e.preventDefault(),globalThis.req=new XMLHttpRequest,globalThis.req.addEventListener("load",listener),globalThis.req.open("GET",e.target.href),globalThis.req.send())});`, (e) => {
    if (e) console.log(e);
})
}
