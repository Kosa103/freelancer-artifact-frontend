FROM node:16.17.0

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

# EXPOSE 7301

CMD ["npm", "start"]