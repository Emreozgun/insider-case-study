FROM node:18.20-bookworm-slim

WORKDIR /app
COPY src ./src
COPY package*.json ./
COPY .sequelizerc .

RUN yarn install

ENV NODE_ENV=production
ENV PORT=3000

EXPOSE 3000
CMD ["node", "./src/index.js"]



