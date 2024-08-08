#!/bin/bash

echo "Build script"

npm install

npn run test:e2e

npm run build
