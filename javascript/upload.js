const Netstorage = require('netstorageapi')

// Defaults: SSL: false
// By default no proxy is set
const config = {
  hostname: 'austin-nsu.akamaihd.net',
  keyName: 'austinapi',
  key: 'xxxxxxxxxx', // Don't expose NS_KEY on public repository.
  cpCode: '350949',
  ssl: false,
  // proxy: 'https://yourproxyurl.com:port' // Optional
}
// Don't expose KEY on your public repository.

const ns = new Netstorage(config)
const local_source = 'hello2.txt'

// or `/${config.cpCode}/` will asume the destination filename is the same as the source
const netstorage_destination = `/${config.cpCode}/hello2.txt`

ns.upload(local_source, netstorage_destination, (error, response, body) => {
  if (error) { // errors other than http response codes
    console.log(`Got error: ${error.message}`)
  }
  if (response.statusCode == 200) {
    console.log(body)
  }
}); 

// { message: 'Request Processed.' }
