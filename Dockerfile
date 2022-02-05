FROM node:12-alpine
RUN apk add --no-cache python2 g++ make
WORKDIR /app
# For caching porpuses, copy all of the dependencies first
COPY package.json yarn.lock ./
# For caching porpuses, copy all of the dependencies first
RUN yarn install --production
COPY . .
CMD ["node", "src/index.js"]