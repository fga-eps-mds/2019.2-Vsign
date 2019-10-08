FROM ruby:2.6.3
RUN apt-get update -qq && apt-get install -y nodejs postgresql-client
RUN apt-get install -y nano

RUN mkdir /vsign
ADD  . /vsign
WORKDIR /vsign

RUN gem install bundler
RUN bundle package --all
