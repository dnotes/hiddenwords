#!/usr/bin/env node

const fs = require('fs')
const reg = /^.+(icon|apple).+\n/gm

let iconsHtml = fs.readFileSync('./src/icons.html', {encoding:'utf-8'}).match(reg).join('')
if (!iconsHtml) throw new Error(`something went wrong: icons.html was not loaded!`)
let appHtml = fs.readFileSync('./src/app.html', {encoding:'utf-8'})
  .replace(reg, '')
  .split(/\s*<\/head>\s*\n?/)
  .join('\n\n' + iconsHtml + '\n</head>\n')

fs.writeFileSync('./src/app.html', appHtml)
