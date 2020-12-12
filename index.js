'use strict';

const adapter = require('webrtc-adapter');
console.log(adapter.browserDetails.browser);
console.log(adapter.browserDetails.version);

// const fs = require('fs');
// Keeping 'fs' Node library to show where and what to write concerning uploading/downloading



// MAIN
function main (args) {

	// Initialize Connection
	const rtc = new RTCPeerConnection();

	// Determine Mode
	console.log('Begin.');
	if (args[0] === ('-c' || '--client')) {
		console.log('Mode: Client');
		client();
	} else if (args[0] === ('-s' || '--server')) {
		console.log('Mode: Server');
		if (args[1] === 'recieve') {
			serverRecieve();
		} else if (args[1] === 'send') {
			serverSend();
		} else {
			console.log('Undefined Server Argument');
		}
	}  else {
		console.log('Mode Undefined');
	}

	// END OF MAIN
	console.log('Finished.');

	return;
}



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
	// fs.writeFile('serverSendICE.txt', localDescription(token));

	return;
}

function client () {

	// Recieve Data
	let session = new RTCSessionDescription(fs.readFile('serverSendICE.txt'));
	let remoteSession = remoteDescription(session);
	console.log('remoteSession: ' + remoteSession);
	// fs.writeFile('clientKeepICE.txt', localDescription(token));

	// Prepare Data
	let token = rtc.createAnswer();
	console.log('Answer: ' + token);
	// fs.writeFile('clientSendICE.txt', localDescription(token));

	return;
}

function serverRecieve() {

	// Recieve Data
	let session = new RTCSessionDescription(fs.readFile('clientSendICE.txt'));
	// fs.writeFile('serverKeepICE.txt', remoteDescription(session));

	return;
} 
