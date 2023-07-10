#!/bin/bash

source .env

mkdir -p deploy

# rsync -rav --delete src/static deploy

for HTMLFILE in cube.html
do
    html-minifier \
        --collapse-whitespace \
        --remove-comments \
        --remove-optional-tags \
        --remove-redundant-attributes \
        --remove-script-type-attributes \
        --remove-tag-whitespace \
        --minify-css true \
        --minify-js true \
        <src/$HTMLFILE >deploy/$HTMLFILE
done

for JSFILE in cube.js
do
    # uglifyjs --compress --mangle < src/$JSFILE > deploy/$JSFILE
    javascript-obfuscator src/$JSFILE \
        --debug-protection true \
        --output deploy/$JSFILE
done

rsync -rav --delete deploy/* $REMOTE
