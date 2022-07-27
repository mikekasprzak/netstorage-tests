<?php
require_once 'vendor/autoload.php';
require_once './config.php';

$fileContents = "Hello world! I'm hardcoded!\n";

$signer = new \Akamai\NetStorage\Authentication();
$signer->setKey($key, $keyName);

$handler = new \Akamai\NetStorage\Handler\Authentication();
$handler->setSigner($signer);

$stack = \GuzzleHttp\HandlerStack::create();
$stack->push($handler, 'netstorage-handler');

$client = new \Akamai\Open\EdgeGrid\Client([
    'base_uri' => $host,
    'handler' => $stack
]);

$adapter = new \Akamai\NetStorage\ObjectStoreAdapter($client, $cpCode);
$fs = new \League\Flysystem\Filesystem($adapter);

// Upload a file:
// cpCode, action, content signature, and request signature is added transparently
// Additionally, all required sub-directories are created transparently
$fs->write('/hello3.txt', $fileContents);
