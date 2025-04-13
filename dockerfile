# Use the official Node.js image from the Docker Hub
FROM node:22-slim as base
RUN apt-get update && apt-get install yarn git -y

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json .

# Install dependencies
RUN yarn install 

# Copy the rest of the application code
COPY . .

# Expose the port that Next.js runs on
EXPOSE 3003
# Command to run the application
CMD ["yarn", "dev"] 