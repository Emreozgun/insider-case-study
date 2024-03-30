FROM node:18.20-bookworm-slim

WORKDIR /app
COPY src ./src
COPY package*.json ./
COPY .sequelizerc ./

RUN yarn install --production=false

COPY ./docker/db-init/entrypoint.sh /app
RUN chmod +x /app/entrypoint.sh
ENTRYPOINT ["/app/entrypoint.sh"]







