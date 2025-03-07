ARG NODE_VERSION=18

FROM node:${NODE_VERSION}-alpine

WORKDIR /usr/app

COPY package.json package-lock.json ./

RUN npm install

USER node

COPY . .

EXPOSE 3030

CMD ["npm", "start"]