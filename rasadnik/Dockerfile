# 1. Koristi Node kao bazni image
FROM node:18

# 2. Postavi radni direktorijum unutar kontejnera
WORKDIR /app

# 3. Kopiraj package fajlove i instaliraj dependency-e
COPY package*.json ./
RUN npm install

# 4. Kopiraj ostatak aplikacije
COPY . .

# 5. Exponuj port koji Vite koristi
EXPOSE 5173

# 6. Pokreni dev server
CMD ["npm", "run", "dev", "--", "--host"]