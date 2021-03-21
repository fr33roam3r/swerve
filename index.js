'use strict';

// Initialize
const adapter = require('webrtc-adapter');
console.log(adapter.browserDetails.browser);
console.log(adapter.browserDetails.version);
const rtc = new RTCPeerConnection();



// FUNCTIONS

function localDescription (item) {

	// Local Description
	rtc.setLocalDescription(item);
	var sdp = rtc.currentLocalDescription;
	console.log('localDescription: ' + sdp);

	return sdp;
}

function remoteDescription (item) {

	let remoteDescription = rtc.setRemoteDescription(item);
	console.log('remoteDescription: ' + rtc.currentRemoteDescription);

	return remoteDescription;
}



// MODES

function senderSend () {

	// Prepare Data
	let token = rtc.createOffer();
	console.log('Offer: ' + token);
	console.log(localDescription(token));

}

function client () {

	// Recieve Data
	let session = new RTCSessionDescription());
	let remoteSession = remoteDescription(session);
	console.log('remoteSession: ' + remoteSession);
	console.log(localDescription(token));

	// Prepare Data
	let token = rtc.createAnswer();
	console.log('Answer: ' + token);
	console.log(localDescription(token));

}

function senderRecieve() {

	// Recieve Data
	let session = new RTCSessionDescription();
	console.log('remoteSession: ' + remoteDescription(session));

}
