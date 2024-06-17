FROM node:21-alpine3.18
WORKDIR /app;
COPY package.json /app;
COPY package-lock.json /app;
RUN npm ci;
COPY . /app;
RUN npm run build;
CMD ["npm", "start"];

