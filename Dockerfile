ARG NODE_VERSION

FROM node:${NODE_VERSION}-alpine3.17 as compiler

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm ci
COPY . .
RUN npm run compile

FROM node:${NODE_VERSION}-alpine3.17

RUN adduser --disabled-password --gecos '' appuser

WORKDIR /home/appuser

COPY --from=compiler --chown=appuser:appuser /app/package.json /app/package-lock.json ./
COPY --from=compiler --chown=appuser:appuser /app/dist ./dist

RUN chown -R appuser:appuser /home/appuser && npm ci --production

USER appuser


ENTRYPOINT ["node", "./dist/main.js"]
