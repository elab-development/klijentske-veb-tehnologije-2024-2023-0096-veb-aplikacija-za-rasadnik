-- Kreiraj korisnika koji će se koristiti u Prisma DATABASE_URL
CREATE USER app_user WITH PASSWORD 'securepass';

-- Kreiraj bazu za tvoju aplikaciju
CREATE DATABASE rasadnikdb;

-- Daj sve privilegije korisniku nad tom bazom
GRANT ALL PRIVILEGES ON DATABASE rasadnikdb TO app_user;