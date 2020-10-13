# SDKMAN! Vendor Release Action

A GitHub Action to release new Candidate versions via SDKMAN!'s Vendor API.

## Inputs

### `candidate` 

**Required** The name of the candidate to release

### `version`

**Required** The version of the candidate to release

### `url`

**Required** The URL pointing to the binary

## Example usage

```yml
uses: helpermethod/sdkman-vendor-release-action@v1
with:
  candidate: maven
  version: 3.6.3
  url: https://archive.apache.org/dist/maven/maven-3/3.6.3/binaries/apache-maven-3.6.3-bin.zip
```
