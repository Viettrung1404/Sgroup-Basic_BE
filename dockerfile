#Define the base stage
FROM node:22.14.0

WORKDIR /app

COPY package*.json ./
# COPY tsconfig.json ./
# COPY ./pnpm-lock.yaml ./

RUN npm install

COPY . .

# RUN npm run start

# # Define the build stage
# FROM node:22.14.0-alpine AS base

# WORKDIR /app

# COPY package*.json ./
# # COPY tsconfig.json ./
# # COPY ./pnpm-lock.yaml ./

# FROM base AS build

# RUN npm install

# COPY . .

# RUN npm run build
# RUN npm prune --production

# FROM base AS deploy
# # Define the deploy stage

# COPY --from=build /app/build /app/build
# COPY --from=build /app/node_modules /app/node_modules

# EXPOSE 3000

CMD ["npm", "start"]