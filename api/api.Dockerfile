FROM ubuntu:16.04

RUN apt-get update

# Install Node.js
RUN apt-get install --yes curl
RUN curl --silent --location https://deb.nodesource.com/setup_8.x | bash -
RUN apt-get install --yes nodejs

RUN mkdir -p /app
WORKDIR /app

RUN npm install -g pm2

COPY package.json /app

RUN npm install

COPY . /app

EXPOSE 3000

CMD ["npm", "start"]
