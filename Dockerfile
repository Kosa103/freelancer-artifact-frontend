FROM node:16.17.0

WORKDIR /app

COPY package.json .

RUN yarn

COPY . .

EXPOSE 7301

CMD ["yarn", "start"]