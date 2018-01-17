#!/bin/sh

echo '### Fetching content ###'
jekyll contentful --rebuild
echo '### Building site ###'
echo '### DONE ###'
