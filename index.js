/*
#!/usr/bin/env node
*/
'use strict';
console.log('Hooking Requirements...');
const adapter = require('webrtc-adapter');
console.log(adapter.browserDetails.browser);
console.log(adapter.browserDetails.version);
const fs = require('fs');



// MAIN

// Initialize Connection
const rtc = new RTCPeerConnection();
console.log('RTCPeerConnection: ' + rtc);

// Determine Mode
console.log('Begin.');
if (process.env === ('-c' || '--client')) {
	console.log('Mode: Client');
	client();
} else if (process.env[0] === ('-s' || '--server')) {
	console.log('Mode: Server');
		if (process.env[1] === 'recieve') {
			serverRecieve();
		} else if (process.env[1] === 'send') {
			serverSend();
		} else {
			console.log('Undefined Server Argument');
		}
} else if (process.env[0] === ('-h' || '--help')) {
	help();
} else {
	console.log('Mode Undefined');
}

// END OF MAIN
console.log('Finished.');



// FUNCTIONS

function localDescription (item) {

	// Local Description
	rtc.setLocalDescription(item);
	const sdp = rtc.currentLocalDescription;
	console.log('localDescription: ' + sdp);

	return sdp;
}

function remoteDescription (item) {

	let remoteDescription = rtc.setRemoteDescription(item);
	console.log('remoteDescription: ' + rtc.currentRemoteDescription);

	return remoteDescription;
}

function serverSend () {

	// Prepare Data
	let token = rtc.createOffer();
	console.log('Offer: ' + token);
	fs.writeFile('serverSendICE.txt', localDescription(token));

	return;
}

function client () {

	// Recieve Data
	let session = new RTCSessionDescription(fs.readFile('serverSendICE.txt'));
	let remoteSession = remoteDescription(session);
	console.log('remoteSession: ' + remoteSession);
	fs.writeFile('clientKeepICE.txt', localDescription(token));

	// Prepare Data
	let token = rtc.createAnswer();
	console.log('Answer: ' + token);
	fs.writeFile('clientSendICE.txt', localDescription(token));

	return;
}

function serverRecieve() {

	// Recieve Data
	let session = new RTCSessionDescription(fs.readFile('clientSendICE.txt'));
	fs.writeFile('serverKeepICE.txt', remoteDescription(session));

	return;
}

function help () {

	console.log('node index.js <ARGUMENTS>');
	console.log('');
	console.log('-s, --server (send/recieve)');
	console.log('send & recieve do not use "--"s');
	console.log('');
	console.log('-c, --client');
	console.log('');
	console.log('-h, --help');

	return;
}
