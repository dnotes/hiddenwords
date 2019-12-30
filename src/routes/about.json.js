import fs from 'fs';
import path from 'path';
import MarkdownIt from 'markdown-it';
const md = new MarkdownIt({linkify: true, typograhper: true})

let html

export function get(req, res) {
	if (!html || process.env.NODE_ENV !== 'production') {
		html = md.render(fs.readFileSync(path.resolve('README.md')).toString()).replace(/<a /gm, '<a target="_blank" ')
	}
  res.writeHead(200, {
    'Content-Type': 'application/json'
  })
  res.end(JSON.stringify({html: html}))
}