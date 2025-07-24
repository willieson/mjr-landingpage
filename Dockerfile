# Gunakan image Node.js
FROM node:18-alpine

# Buat folder kerja
WORKDIR /app

# Salin file dependensi
COPY package*.json ./
RUN npm install --production

# Salin semua file aplikasi
COPY . .

# Bangun aplikasi
RUN npm run build

# Expose port 3000
EXPOSE 3000

# Jalankan aplikasi
CMD ["npm", "start"]