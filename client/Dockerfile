#FROM node:18-alpine
FROM node:alpine
WORKDIR /src
RUN yarn install --production
COPY . .
CMD ["node", "./src/index.js"]