#!/bin/sh
set -e

sleep 1
yarn db:migrate
yarn db:seed
