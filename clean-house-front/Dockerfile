FROM node:6.11.0
LABEL maintainer="Giovanni Alberto <delirable@gmail.com>"
LABEL version="1.0"

RUN npm install -g @angular/cli 
RUN npm set progress=false # Speed npm

RUN mkdir /app
WORKDIR /app
COPY . /app
RUN npm install --quiet

EXPOSE 4200 9876

CMD ng serve --host 0.0.0.0

