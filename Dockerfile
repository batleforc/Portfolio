FROM node

MAINTAINER maxime.lerichepro@gmail.com

ENV PORT 8080

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE ${PORT}

RUN npm run prod

CMD ["node","API/index.js"]