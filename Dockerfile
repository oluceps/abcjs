FROM node:16.10.0

RUN npm install -g npm@8.1.2
RUN npm i -g jest-cli

RUN mkdir /srv/app && chown node:node /srv/app

USER node

WORKDIR /srv/app
