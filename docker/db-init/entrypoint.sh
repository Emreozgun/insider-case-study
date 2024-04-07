#!/bin/sh
set -e

sleep 2
yarn db:migrate
yarn db:seed
