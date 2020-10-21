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
    'Content-Type': 'application/json',
    'Content-Length': data.length
  },
  agent: false
}

request('https://vendors.sdkman.io/release', options, async response => {
  if (response.statusCode === 201) return

  let data = []

  for await(const chunk of response) {
    data.push(chunk)
  }

  core.setFailed(Buffer.concat(data).toString())
})

Readable.from(data).pipe(request)
