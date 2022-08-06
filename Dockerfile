FROM alpine
ENV NODE_ENV=production
RUN apk add --update nodejs npm
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production --no-audit --no-fund
COPY . .
ENTRYPOINT ["npm", "start"]