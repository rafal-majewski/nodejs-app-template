ARG ALPINE_VERSION
ARG NODEJS_VERSION
FROM node:${NODEJS_VERSION}-alpine${ALPINE_VERSION} AS compiler
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN find ./src -name "*.test.ts" -type f -delete && npm run compile
FROM node:${NODEJS_VERSION}-alpine3.19 AS runner
RUN adduser --disabled-password --gecos '' appuser
WORKDIR /home/appuser
COPY --from=compiler --chown=appuser:appuser /app/package.json /app/package-lock.json ./
COPY --from=compiler --chown=appuser:appuser /app/dist ./dist
RUN chown -R appuser:appuser /home/appuser && npm ci --production
USER appuser
ENTRYPOINT ["node", "./dist/src/main.js"]
