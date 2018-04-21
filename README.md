# node-handbrake
node controlled handbrake


https://www.npmjs.com/package/handbrake-js

sudo add-apt-repository --yes ppa:stebbins/handbrake-releases
sudo apt-get update -qq
sudo apt-get install -qq handbrake-cli

npm install handbrake-js --save

const hbjs = require('handbrake-js')
 
hbjs.spawn({ input: 'something.avi', output: 'something.m4v' })
  .on('error', err => {
    // invalid user input, no video found etc
  })
  .on('progress', progress => {
    console.log(
      'Percent complete: %s, ETA: %s',
      progress.percentComplete,
      progress.eta
    )
  })