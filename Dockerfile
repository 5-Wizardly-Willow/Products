FROM node:14.16.0-alpine3.10

WORKDIR /apps/products

COPY package.json ./
COPY . .

RUN npm install
EXPOSE 4000

CMD ["node", "src/server.js"]
