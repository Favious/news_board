FROM node:12.2.0-alpine

WORKDIR /server

COPY . ./

RUN npm install 

EXPOSE 3000

CMD ["npm", "start"]