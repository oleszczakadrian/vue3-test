# Pobierz oficjalny obraz PHP
FROM node:lts-alpine

# # install simple http server for serving static content
# RUN npm install -g http-server

# RUN mkdir /app

# WORKDIR /app

COPY project/package.json .

# RUN npm install
RUN npm install -g @vue/cli

COPY project/ .

# # RUN npm run serve
# # # Uruchom serwer PHP w kontenerze
# EXPOSE 8080
# # CMD ["npm", "run", "serve"] \
# CMD ["http-server", "dist"]
