FROM node:18.20-bookworm-slim

WORKDIR /app
COPY src ./src
COPY package*.json ./
COPY .sequelizerc ./

RUN yarn install --production=false

COPY ./docker/db-init/entrypoint.sh /app
COPY ./docker/db-init/bulk.json /app
#COPY ./docker/db-init/insert-data.js /app

#RUN chmod +x /app/entrypoint.sh
#ENTRYPOINT ["/app/entrypoint.sh"]

RUN chmod +x /app/insert-data.js
CMD ["node", "/app/insert-data.js"]










