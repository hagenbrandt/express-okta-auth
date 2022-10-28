FROM node:12

WORKDIR /app

COPY . .

RUN npm i
RUN npm run build:server
RUN npm run build:client

COPY . .

EXPOSE 8080

CMD ["npm", "start"]