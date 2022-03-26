FROM node:bullseye
RUN apt-get update && apt-get upgrade -y

USER node
WORKDIR /home/node/app
