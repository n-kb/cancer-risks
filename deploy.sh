#!/usr/bin/env sh

# abort on errors
set -e

# download csv
wget  -O src/assets/cancer.csv "https://docs.google.com/spreadsheets/d/e/2PACX-1vSIEsmlLoR5YoMBeCjHP7Sf_fLn6S8cM2K-UtpwLL0WdjukJbBcyBxynDZjEE1-EwOjKRA0s4AZ4oqP/pub?gid=0&single=true&output=csv"
wget  -O src/assets/baserate.csv "https://docs.google.com/spreadsheets/d/e/2PACX-1vSIEsmlLoR5YoMBeCjHP7Sf_fLn6S8cM2K-UtpwLL0WdjukJbBcyBxynDZjEE1-EwOjKRA0s4AZ4oqP/pub?gid=1374610629&single=true&output=csv"

# build
npm run build -- --mode=prerender

# saves the lang dirs safely
mkdir lang
mv dist/en lang/en
mv dist/fr lang/fr
mv dist/de lang/de

# builds again
npm run build

# moves the lang files back
mv lang/en dist/en
mv lang/fr dist/fr
mv lang/de dist/de

rm -r lang

# Finds the name of app.js
FILEAPPNAME=$(ls dist/js | grep 'app\..*\.js$')

# Replaces app.js in the files
sed -i "s/\/app\.js/\/cancer-risks\/js\/$FILEAPPNAME/g" dist/de/index.html

# rename dist dir
rm -r docs
mv dist docs

# Sends to Github
git ac -m "Updates"

git push origin master