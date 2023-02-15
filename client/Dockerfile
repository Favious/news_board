FROM node:12.2.0-alpine as build

WORKDIR /client

COPY . ./

RUN npm install &&\
  npm run build

FROM nginx:1.16.0-alpine

COPY --from=build /client/dist/client /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
