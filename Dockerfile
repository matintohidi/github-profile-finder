FROM node:20-alpine

ENV CI=true

RUN corepack enable && corepack prepare pnpm@latest --activate

WORKDIR /app

COPY . .

RUN pnpm install --frozen-lockfile

RUN pnpm build

EXPOSE 3000

CMD ["pnpm", "start"]