# # Use an official Node.js runtime as a base image
# FROM node:20-alpine

# # Set the working directory in the container
# WORKDIR /usr/src/app

# # Copy package.json and package-lock.json to the working directory
# COPY package*.json ./

# # Install dependencies
# RUN npm install

# # Copy the rest of the application code to the working directory
# # COPY . .
# COPY src ./src

# # Compile TypeScript code
# RUN npm run build

# # Expose the port your app runs on
# EXPOSE 9091

# # Command to run your application 
# CMD ["npm", "run", "start"] 


# Stage 1: Build
FROM node:20-alpine AS builder
WORKDIR /usr/src/app

# Copy package files and install all deps (dev + prod)
COPY package*.json ./
RUN npm install

# Copy source code and tsconfig
COPY tsconfig.json ./
COPY src ./src

# Compile TypeScript
RUN npm run build

# Stage 2: Production
FROM node:20-alpine
WORKDIR /usr/src/app

# Install only production dependencies
COPY package*.json ./
RUN npm install --production

# Copy compiled files from builder
COPY --from=builder /usr/src/app/dist ./dist

# Expose port
EXPOSE 9091

# Start Node
CMD ["npm", "run", "start"] 
