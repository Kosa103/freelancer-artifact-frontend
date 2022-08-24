FROM node:16.17.0

WORKDIR /app

COPY package.json .

RUN npm install -g npm-check
RUN npm install react-scripts --force

COPY . .

EXPOSE 7301

CMD ["npm", "start"]