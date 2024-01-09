FROM node:20


WORKDIR /app

COPY package.json package.json

RUN npm install

COPY sample.env .env

COPY . .

EXPOSE 8080
# start nginx
CMD ["npm", "run", "dev"]