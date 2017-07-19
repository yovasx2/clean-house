FROM ruby:2.4.1
MAINTAINER Giovanni Alberto <delirable@gmail.com>

RUN apt-get -qq update \
    && apt-get -qqy install build-essential libpq-dev nodejs \
    && apt-get -qq clean

RUN rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

RUN echo "gem: --no-rdoc --no-ri" > /etc/gemrc

RUN mkdir /app
WORKDIR /app
COPY . /app
RUN bundle install --jobs 20 --retry 5 --quiet

EXPOSE 3000

CMD bundle exec rails s -b '0.0.0.0'
