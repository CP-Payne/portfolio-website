# Stage 1: Build the React application
FROM node:20 as builder

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your app's source code
COPY . .

# Build your React app
RUN npm run build

# Stage 2: Serve the app using a lightweight server
FROM nginx:alpine

# Copy the build output to replace the default nginx contents
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose port 80 to the outer world
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]