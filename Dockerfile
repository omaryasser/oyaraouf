# Use an official Node runtime as a parent image
FROM node:19-alpine

# Set the working directory to /app
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install dependencies
RUN npm install

COPY src ./src
COPY public ./public

# Set the PORT environment variable
ENV PORT 8080

# Build the app
RUN npm run build

# Start the app when the container launches
CMD ["npx", "serve", "-s", "build"]

