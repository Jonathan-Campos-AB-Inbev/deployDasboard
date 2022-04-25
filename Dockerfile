FROM node:14

RUN npm install

WORKDIR /app

COPY . /app

CMD ["node","dist/index.js"]


