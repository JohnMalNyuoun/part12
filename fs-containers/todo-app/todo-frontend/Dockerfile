FROM node:20-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci

COPY . .

# Run component tests as part of the image build.
RUN npm test

# Declare build-time argument for backend URL
ARG VITE_BACKEND_URL
ENV VITE_BACKEND_URL=$VITE_BACKEND_URL

# Build the static application assets
RUN npm run build

# Install a simple static server (like serve) to serve the production build
RUN npm install -g serve

EXPOSE 5173

# Run the app using serve on port 5173
CMD ["serve", "-s", "dist", "-l", "5173"]