FROM node:lts-alpine

WORKDIR /app

COPY package.json .

RUN npm i -g @angular/cli

RUN npm install

COPY . .

# EXPOSE 8100

EXPOSE 4200

CMD [ "ng", "serve", "--host", "0.0.0.0", "--disable-host-check" ]