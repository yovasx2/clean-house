FROM node:6.11.0
MAINTAINER Giovanni Alberto <delirable@gmail.com>

RUN npm set progress=false # Speed npm
RUN npm install --quiet -g @angular/cli

RUN curl --silent https://dl-ssl.google.com/linux/linux_signing_key.pub \
  | apt-key add -
RUN echo "deb http://dl.google.com/linux/chrome/deb/ stable main" \
  >> /etc/apt/sources.list.d/google-chrome.list
RUN apt-get update -qqy
RUN apt-get -qqy install xvfb google-chrome-stable
RUN rm /etc/apt/sources.list.d/google-chrome.list
RUN rm -rf /var/lib/apt/lists/* /var/cache/apt/*
RUN sed -i 's/"$HERE\/chrome"/xvfb-run "$HERE\/chrome" --no-sandbox/g' \
  /opt/google/chrome/google-chrome

RUN mkdir /app
WORKDIR /app
COPY . /app
RUN npm install --quiet
RUN npm cache clean --quiet

EXPOSE 4200 9876

CMD ng serve --host 0.0.0.0
