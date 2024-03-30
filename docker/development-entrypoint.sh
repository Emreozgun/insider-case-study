#!/bin/sh

echo "Starting get ready!!!"
sleep 3
yarn db:migrate
echo "Migration done!!!"
sleep 3
yarn db:seed
echo "Seed done!!!"
sleep 3
yarn serve:development
