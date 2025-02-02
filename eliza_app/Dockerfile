FROM ghcr.io/706creators/eliza:v0.1.9patch.1
ADD . /app
WORKDIR /app
CMD ["sh", "-c", "pnpm start --character=/app/app.json & pnpm start:client"]
# CMD ["sh", "-c", "pnpm start --character=/app/app.json"]
