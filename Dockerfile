FROM node:18

WORKDIR /src

COPY package.json package-lock.json* ./

RUN npm install

COPY . .

EXPOSE 8080

CMD ["node", "index.js"]
