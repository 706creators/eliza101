FROM ghcr.io/706creators/eliza:v0.1.9
ADD . /app
WORKDIR /app
RUN cp -f vite.config.ts client/vite.config.ts
CMD ["/bin/bash", "/app/start.sh"]
# CMD ["sh", "-c", "pnpm start --character=/app/app.json"]
