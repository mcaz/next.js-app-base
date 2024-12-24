FROM node:lts-bullseye-slim

WORKDIR /app

ENV TZ Asia/Tokyo
ENV PATH /app/node_modules/.bin:$PATH

RUN apt-get update -qq \
  && apt-get install -qy  \
  curl \
  procps \
  --no-install-recommends

COPY package*.json yarn.lock ./
RUN npm install -g yarn --force
RUN yarn install

COPY . .
RUN yarn build

USER node
CMD ["yarn", "dev"]
