<?php

/**
 * @file
 * Run this router to get 100 on audit adds http2 headers.
 *
 * `php -S localhost:8000 router.php`
 *
 */

header("HTTP/2.0");

/**
 * Variables.
 *
 * @var mixed $uri
 */
$uri = $_SERVER["REQUEST_URI"];
$file = $_SERVER["SCRIPT_FILENAME"];


if (preg_match('/\.(?:js\b)/', $uri)) {
  header("Content-Type: application/javascript");
}

if (preg_match('/\.(?:json)$/', $uri)) {
  header("Content-Type: application/json");
}
if (preg_match('/\.(?:ico)$/', $uri)) {
  header("Content-Type: image/x-icon");
}
if (preg_match('/\.(?:png)$/', $uri)) {
  header("Content-Type: image/png");
}
if (preg_match('/\.(?:html)$/', $file)) {
  header("Content-Type: text/html; charset=UTF-8");
}

preg_match('/\.(?:js\b|json|png|ico)/', $uri) ? readfile($file) : require_once 'index.html';
