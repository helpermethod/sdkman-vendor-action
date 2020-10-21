const core = require('@actions/core')
const { request } = require('https')
const { Readable } = require('stream')

const data = JSON.stringify({
  candidate: core.getInput('candidate'),
  version: core.getInput('version'),
  url: core.getInput('url')
})

const options = {
  method: 'POST', 
  headers: {
    'Consumer-Key': core.getInput('consumer-key'),
    'Consumer-Token': core.getInput('consumer-token'),
    'Content-Type': 'application/json'
    'Content-Length': data.length
  },
  agent: false
}

request('https://vendors.sdkman.io/release', options, response => response.pipe(process.stdout))
  .on('error', error => core.setFailed(error.message))

Readable.from(data).pipe(request)
