
# Use official node image as the base image
FROM node:16 as build

# Set the working directory
WORKDIR /usr/local/app

# Add the source code to app
COPY ./ /usr/local/app/

# Install all the dependencies
RUN yarn global add truffle ganache-cli flow-type

# Install all the dependencies
RUN yarn install --network-concurrency 1

# Generate the build of the application
RUN yarn build-mainnet

# Use official nginx image as the base image
FROM nginx:latest

# Copy the build output to replace the default nginx contents.
COPY --from=build /usr/local/app/build /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf

COPY ./deployment/nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80