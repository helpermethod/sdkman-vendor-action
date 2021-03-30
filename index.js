const core = require('@actions/core')
const https = require('https')
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

const request = https.request('https://vendors.sdkman.io/release', options, async response => {
  if (response.statusCode >= 200 && response.statusCode =< 299) {
    return
  }

  let data = []

  for await(const chunk of response) {
    data.push(chunk)
  }

  const body = Buffer.concat(data)

  core.setOutput('status', response.statusCode)
  core.setOutput('body', message)
  core.setFailed(body).toString())
})

Readable.from(data).pipe(request)
