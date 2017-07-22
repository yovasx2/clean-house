FROM node:6.11.0
MAINTAINER Giovanni Alberto <delirable@gmail.com>

RUN npm install -g @angular/cli 
RUN npm set progress=false # Speed npm

RUN mkdir /app
WORKDIR /app
COPY . /app
RUN npm install --quiet
RUN npm cache clean --quiet
COPY . /app

EXPOSE 4200 9876

CMD ng serve --host 0.0.0.0
