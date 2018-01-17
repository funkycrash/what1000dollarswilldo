#!/bin/sh

echo '### Fetching content ###'
jekyll contentful
echo '### Building site ###'
jekyll build
echo '### DONE ###'
