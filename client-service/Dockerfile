FROM node:23-alpine3.20

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install && npm install -g nodemon

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]
