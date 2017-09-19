FROM mhart/alpine-node
LABEL maintainer="rahim@r2integration.com"

RUN mkdir -p /usr/src/app
COPY . /usr/src/app

WORKDIR /usr/src/app