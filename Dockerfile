# Base image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy application code
COPY . .

RUN npm run build

EXPOSE 3000
# Start the application
CMD ["npm", "start"]
