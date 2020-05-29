#!/bin/bash

# Abort on errors
set -e

# Build the page
vuepress build

# Change to directory
cd .vuepress/dist

# Create CNAME for automatic DNS redirection
echo "www.chinux.tech" > CNAME

# Forced push to different remote
git add -A
git commit -m "Actualización $(date '+%d-%m-%Y %I:%M%p')"
git push -f https://github.com/chinuxparibus/chinuxparibus.github.io.git master

cd -
rm -rf .vuepress/dist
