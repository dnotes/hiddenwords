import hiddenWords from './_hw.js';

const lookup = new Map();
hiddenWords.forEach((hw,i) => {
	if (i > 0) hw.prev = Object.assign({}, hiddenWords[i - 1])
	if (i < hiddenWords.length - 1) hw.next = Object.assign({}, hiddenWords[i + 1])
	lookup.set(hw.id, JSON.stringify(hw));
});

export function get(req, res, next) {
	// the `slug` parameter is available because
	// this file is called [slug].json.js
	const { slug } = req.params;

	if (lookup.has(slug)) {
		res.writeHead(200, {
			'Content-Type': 'application/json'
		});

		res.end(lookup.get(slug));
	} else {
		res.writeHead(404, {
			'Content-Type': 'application/json'
		});

		res.end(JSON.stringify({
			message: `Not found`
		}));
	}
}
