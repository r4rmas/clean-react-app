#!/bin/sh

npx create-react-app $1
rm -rf $(pwd)/$1/public
rm -rf $(pwd)/$1/src
rm -f $(pwd)/$1/README.md
cp -r ~/.Scripts/clean-react-app/public $(pwd)/$1/
cp -r ~/.Scripts/clean-react-app/src $(pwd)/$1/
