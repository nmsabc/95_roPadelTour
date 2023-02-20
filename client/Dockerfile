#FROM node:18-alpine
FROM node:alpine
WORKDIR /src
RUN yarn install --production
COPY . .
EXPOSE 3000
CMD ["node", "./src/index.js"]