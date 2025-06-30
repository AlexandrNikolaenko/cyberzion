FROM node:alpine as build_front

WORKDIR '/usr/app'
COPY package.json package.json
RUN npm install
COPY . .
ENV CLOUDFLARE_API_TOKEN=<твой_токен>
RUN npm run deploy

EXPOSE 80