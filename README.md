# SDKMAN! Vendor Release Action

A GitHub Action to release new Candidate versions via SDKMAN!'s Vendor API.

## Inputs

### `consumer-key`

**Required** The unique identifier of the Consumer

### `consumer-token`

**Required** The API token of the Consumer

### `candidate` 

**Required** The name of the Candidate to release

### `version`

**Required** The version of the Candidate to release

### `url`

**Required** The URL pointing to the binary

## Example usage

```yml
uses: helpermethod/sdkman-vendor-release-action@v1
with:
  consumer-key: 5f202e7ab75f00af194c61cc07ae6b0c
  consumer-token: ${{secrets.CONSUMER_TOKEN}}
  candidate: groovy
  version: 3.0.6
  url: https://dl.bintray.com/groovy/maven/apache-groovy-binary-3.0.6.zip
```
