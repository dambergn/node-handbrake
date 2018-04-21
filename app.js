'use strict';
// HandBrakeCLI -f mp4 -E faac -2 -T -i SUPER\ TROOPERS\ 2\ -\ OFFICIAL\ RED\ BAND\ TRAILER-eEed-o8fVpM.mkv -o transcode.mp4

// const hbjs = require('handbrake-js');
const cmd = require('node-cmd');

let command = 'HandBrakeCLI -f mp4 -E faac -2 -T -i';
let path = '/home/nadpro/sandbox/node-handbrake/';
let input = 'super-troopers-2.mkv';
let output = 'transcode.mp4';
console.log(`${command} ${path}${input} ${path}${output}`);

cmd.get(
    `${command}${path}${input} -o ${path}${output}`,
//   'HandBrakeCLI -f mp4 -E faac -2 -T -i SUPER\ TROOPERS\ 2\ -\ OFFICIAL\ RED\ BAND\ TRAILER-eEed-o8fVpM.mkv -o transcode.mp4',
  function (err, data, stderr) {
    if (err) {
        console.log(err);
    }
    console.log(data);
  }
);


// const options = {
//     input: '/home/nadpro/sandbox/node-handbrake/SUPER TROOPERS 2 - OFFICIAL RED BAND TRAILER-eEed-o8fVpM.mkv',
//     output: '/home/nadpro/sandbox/node-handbrake/transcoded.mp4',
//     preset: 'Normal',
//     rotate: 1
//   }
 
// hbjs.spawn(options)
//   .on('error', err => {
//       console.log(err);
//     // invalid user input, no video found etc
//   })
//   .on('progress', progress => {
//     console.log(
//       'Percent complete: %s, ETA: %s',
//       progress.percentComplete,
//       progress.eta
//     )
//   })