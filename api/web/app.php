<?php

use Symfony\Component\HttpFoundation\Request;

/** @var \Composer\Autoload\ClassLoader $loader */
$loader = require __DIR__.'/../vendor/autoload.php';

if ('varnish' !== $proxyIp = gethostbyname('varnish')) {
    Request::setTrustedProxies([$proxyIp], Request::HEADER_FORWARDED);
}

$environment = (getenv('SYMFONY_ENV') !== false) ? getenv('SYMFONY_ENV') : 'dev';
$debug = (getenv('APP_DEBUG') !== false) ? (bool) getenv('APP_DEBUG') : true;

$kernel = new AppKernel($environment, $debug);
//$kernel = new AppCache($kernel);

// When using the HttpCache, you need to call the method in your front controller instead of relying on the configuration parameter
//Request::enableHttpMethodParameterOverride();
$request = Request::createFromGlobals();
$response = $kernel->handle($request);
$response->send();
$kernel->terminate($request, $response);
