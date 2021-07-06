FROM node:12-slim as Build

WORKDIR /usr/src/app 

COPY package.json package-lock.json ./

ENV NODE_ENV=production

RUN npm ci --production && npm cache clean --force

COPY . .

ENTRYPOINT ["node", "index.js"]

# CMD ["nodemon", "-L", "--watch", ".", "index.js"]
# CMD ["node", "index.js"]
# CMD ["npm", "start"]