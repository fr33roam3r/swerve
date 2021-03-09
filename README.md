# swerve
Serverless webRTC version.

Instead of using a server/median to gather information in order to establish a connection between two peers, we use JS to retrieve everything manually and form the stream. `swerve` is a template/framework for other users to build off of and create their own interfaces.

Why?
-

This project is different from other repositories with WebRTC because our goal is to establish a connection without using a signaling server. In addition, this project focuses on just live text chats rather than video streams.

Functionality
-

This script is broken down into [three phases](https://media.prod.mdn.mozit.cloud/attachments/2016/01/27/12363/9d667775214ae0422fae606050f60c1e/WebRTC%20-%20Signaling%20Diagram.svg):

* 1. Sender Send - *Initialize a PeerConnection and prepare an SDP request.*
* 2. Client Recieve & Send - *Use the sender's information to create a channel.*
* 3. Sender Recieve - *Recieve the client's information and start connection connection.*
