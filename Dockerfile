# # # Layer 1 NODE
# FROM node:18 as builder

# # Set build-time arguments
# ARG VITE_BACKEND_DOMAIN

# # Working directory for subsequent commands
# WORKDIR /app

# #Copy appliaction files into the docker image
# COPY . .

# # Write environment variables to a .env file
# RUN echo "VITE_BACKEND_DOMAIN=${VITE_BACKEND_DOMAIN}" > .env

# # Install exact dependency versions
# RUN npm ci

# # Building app
# RUN npm run build

FROM nginx:1.21.0-alpine

WORKDIR /app

# Set the environment to production
ENV NODE_ENV production

# Copying build assets from 'builder' image
# COPY --from=builder /app/dist /usr/share/nginx/html
COPY dist /usr/share/nginx/html

# Add the ngnix.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]