FROM node:21-alpine
WORKDIR dist/
COPY package*.json ./ 
RUN yarn install
COPY . .
EXPOSE 8000
CMD ["yarn","run","build"]
CMD ["node","dist/server.js"]

