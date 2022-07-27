from akamai.netstorage import Netstorage, NetstorageError

NS_HOSTNAME = 'astin-nsu.akamaihd.net'
NS_KEYNAME = 'astinapi'
NS_KEY = 'xxxxxxxxxx' # Don't expose NS_KEY on public repository.
NS_CPCODE = '360949'

ns = Netstorage(NS_HOSTNAME, NS_KEYNAME, NS_KEY, ssl=False) # ssl is optional (default: False)
local_source = 'hello.txt'
netstorage_destination = '/{0}/hello.txt'.format(NS_CPCODE) # or '/{0}/'.format(NS_CPCODE) is same.
ok, response = ns.upload(local_source, netstorage_destination)
# "ok": True means 200 OK; If False, it's not 200 OK
# "response": <Response [200]> # Response object from requests.get|post|put
print(response.text)
# '<HTML>Request Processed</HTML>'

