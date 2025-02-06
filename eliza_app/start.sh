#!/bin/bash

pnpm start --character=/app/app.json &
pnpm --dir client dev --host
