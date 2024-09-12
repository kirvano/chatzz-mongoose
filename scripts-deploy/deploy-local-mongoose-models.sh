#!/bin/bash
# git stash
# git checkout dev
npm run build
cp -r ../ ../../backend-chatzz/node_modules/mongoose-models
cp -r ../ ../../chatbot/node_modules/mongoose-models
cp -r ../ ../../chatzz-webhook/node_modules/mongoose-models
cp -r ../ ../../mass-shooting/node_modules/mongoose-models
cp -r ../ ../../baileys-events-processor/node_modules/mongoose-models