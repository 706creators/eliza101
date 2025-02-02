FROM ghcr.io/706creators/eliza:v0.1.9
ADD . /app
WORKDIR /app
CMD ["sh", "-c", "pnpm start --character=/app/app.json & pnpm start:client"]
# CMD ["sh", "-c", "pnpm start --character=/app/app.json"]
