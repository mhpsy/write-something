# Build Stage 1

FROM node:22.14-alpine AS build
WORKDIR /app

RUN corepack enable

# Copy root package.json and workspace files
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./

# Copy all package.json files from workspaces
COPY packages/web/package.json ./packages/web/
COPY packages/ui/package.json ./packages/ui/

# set pnpm config china mirror
RUN pnpm config set registry https://registry.npmmirror.com

# Install dependencies
RUN pnpm i

# Copy the entire project
COPY . ./

# Build UI package first
RUN pnpm run ui:build

# Debug: Show the content of uno.config.mjs
RUN cat /app/packages/web/.nuxt/uno.config.mjs

# Build the project
RUN pnpm run web:build

# Build Stage 2

FROM node:22-alpine
WORKDIR /app

# Only `.output` folder is needed from the build stage
COPY --from=build /app/packages/web/.output/ ./

# Change the port and host
ENV NITRO_PORT=7000
ENV NITRO_HOST=0.0.0.0

EXPOSE 7000

CMD ["node", "/app/packages/web/.output/server/index.mjs"]
