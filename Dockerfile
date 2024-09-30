ARG ALPINE_VERSION
ARG NODEJS_VERSION
FROM node:${NODEJS_VERSION}-alpine${ALPINE_VERSION} AS runner
WORKDIR /home/runner
RUN adduser --disabled-password --gecos '' runner && chown -R runner:runner /home/runner
USER runner
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN find ./src -name "*.test.ts" -type f -delete
ENTRYPOINT ["npm", "start"]
