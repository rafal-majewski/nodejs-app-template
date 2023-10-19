FROM node:19.8.1-alpine3.17

RUN adduser --disabled-password --gecos '' appuser # hadolint ignore=DL3000


# hadolint ignore=DL3000
WORKDIR ./home/appuser

COPY --chown=appuser:appuser package.json ./
COPY --chown=appuser:appuser package-lock.json ./
COPY --chown=appuser:appuser ./dist/ ./dist


ENTRYPOINT [ "npm", "start" ]
