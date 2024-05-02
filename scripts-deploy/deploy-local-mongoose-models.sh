#!/bin/bash
# git stash
# git checkout dev
git pull
npm run build
cp -r ./* ../../backend-chatzz/node_modules/mongoose-models
cp -r ./* ../../chatbot/node_modules/mongoose-models
cp -r ./* ../../chatzz-webhook/node_modules/mongoose-models