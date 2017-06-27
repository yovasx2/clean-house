FROM ruby:2.4.1
MAINTAINER Giovanni Alberto <delirable@gmail.com>

RUN apt-get -qq update && apt-get -qq install -y build-essential libpq-dev nodejs

RUN apt-get -qq clean
RUN rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

RUN echo "gem: --no-rdoc --no-ri" > /etc/gemrc

RUN mkdir /app
WORKDIR /app
COPY Gemfile Gemfile
COPY Gemfile.lock Gemfile.lock
RUN bundle install --jobs 20 --retry 5 --quiet
COPY . /app

EXPOSE 3000

CMD bundle exec rails s -b '0.0.0.0'
