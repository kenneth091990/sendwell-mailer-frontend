FROM node:20


WORKDIR /app

COPY package.json package.json

RUN npm install

COPY sample.env .env

COPY . .

EXPOSE 5173
# start nginx
CMD ["npm", "run", "dev"]