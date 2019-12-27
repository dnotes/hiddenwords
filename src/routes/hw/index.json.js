import hiddenWords from './_hw.js';

const contents = JSON.stringify({
	Introduction: hiddenWords[0],
	Arabic: hiddenWords.slice(1, 72),
	Persian: hiddenWords.slice(72, (72+82)),
	Postscript: hiddenWords[-1],
})

export function get(req, res) {
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(contents);
}