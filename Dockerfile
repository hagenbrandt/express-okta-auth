FROM node:14.19.3-alpine

WORKDIR /app

COPY . .

RUN npm i
RUN npm rebuild node-sass
RUN npm run build:server
RUN npm run build:client

COPY . .

EXPOSE 8080

CMD ["npm", "start"]