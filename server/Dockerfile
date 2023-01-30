#FROM node:18-alpine
FROM node:alpine
WORKDIR /server
RUN yarn install --production
COPY . .
CMD ["node", "./server/index.js"]