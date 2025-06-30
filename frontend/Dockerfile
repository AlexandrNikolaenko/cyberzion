FROM node:alpine as build_front

WORKDIR '/usr/app'
COPY package.json package.json
RUN npm install
COPY . .
RUN npm run deploy

EXPOSE 80