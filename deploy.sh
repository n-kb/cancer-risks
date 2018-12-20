#!/usr/bin/env sh

# abort on errors
set -e

# download csv
wget  -O src/assets/cancer.csv "https://docs.google.com/spreadsheets/d/e/2PACX-1vSIEsmlLoR5YoMBeCjHP7Sf_fLn6S8cM2K-UtpwLL0WdjukJbBcyBxynDZjEE1-EwOjKRA0s4AZ4oqP/pub?gid=0&single=true&output=csv"
wget  -O src/assets/baserate.csv "https://docs.google.com/spreadsheets/d/e/2PACX-1vSIEsmlLoR5YoMBeCjHP7Sf_fLn6S8cM2K-UtpwLL0WdjukJbBcyBxynDZjEE1-EwOjKRA0s4AZ4oqP/pub?gid=1374610629&single=true&output=csv"

# build
npm run build

# rename dist dir
rm -r docs
mv dist docs

# Sends to Github
git ac -m "Updates"

git push origin master