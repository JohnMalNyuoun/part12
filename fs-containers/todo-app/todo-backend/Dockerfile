# Use a lightweight Node.js base image
FROM node:16-alpine

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json first to leverage Docker layer caching
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of the application code into the container
COPY . .

# Expose the port the app runs on
EXPOSE 3000

# Define the command to start the application
CMD ["npm", "start"]