FROM node:6.11.0
MAINTAINER Giovanni Alberto <delirable@gmail.com>

RUN npm set progress=false # Speed npm
RUN npm install --quiet -g @angular/cli

RUN mkdir /app
WORKDIR /app
COPY package.json /app
RUN npm install --quiet
RUN npm cache clean
COPY . /app

EXPOSE 4200

CMD ng serve --host 0.0.0.0
