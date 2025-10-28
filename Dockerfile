# Use an official Node.js runtime as a base image
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /usr/src

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Compile TypeScript code
RUN npm run build

# Expose the port your app runs on
EXPOSE 9091

# Command to run your application 
CMD ["npm", "run", "start"] 
