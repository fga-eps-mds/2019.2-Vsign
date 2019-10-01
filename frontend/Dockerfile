FROM node:12.2.0-alpine

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json /app/package.json
RUN npm install
RUN npm install react-scripts@3.0.1 -g --silent
RUN npm install react-app-rewired --save-dev -g 



CMD ["npm", "start"]
