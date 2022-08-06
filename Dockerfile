FROM node:alpine
ENV NODE_ENV=production
WORKDIR /app
COPY package.json app.js /app
RUN npm install --omit=optional --no-audit --no-fund
ENTRYPOINT ["/usr/local/bin/npm", "start"]