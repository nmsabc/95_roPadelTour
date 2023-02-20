#FROM node:18-alpine
FROM node:alpine
WORKDIR /server
RUN yarn install --production
COPY . .
EXPOSE 3213
CMD ["node", "./server/index.js"]