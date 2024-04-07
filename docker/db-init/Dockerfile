FROM node:18.20-bookworm-slim

WORKDIR /app
COPY src ./src
COPY package*.json ./
COPY .sequelizerc ./

RUN yarn install --production=false

COPY ./docker/db-init/entrypoint.sh /app
COPY ./docker/db-init/bulk.json /app
COPY ./docker/db-init/insert.sh /app

RUN apt-get -y update \
    && apt-get -y install curl

RUN chmod +x /app/entrypoint.sh
ENTRYPOINT ["/app/entrypoint.sh"]









