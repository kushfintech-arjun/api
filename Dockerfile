FROM node:18-alpine AS base
RUN npm i -g pnpm

FROM base AS development 
ARG APP 
ARG NODE_ENV=development 
ENV NODE_ENV=${NODE_ENV} 
WORKDIR /app 
COPY package.json pnpm-lock.yaml ./ 
RUN pnpm install
COPY . . 
RUN pnpm run build ${APP} 

# Add an env to save ARG
ENV APP_MAIN_FILE=dist/apps/${APP}/main 
CMD node ${APP_MAIN_FILE}