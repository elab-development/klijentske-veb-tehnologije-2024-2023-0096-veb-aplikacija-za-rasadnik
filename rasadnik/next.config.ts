import type { NextConfig } from "next";

const nextConfig = {
  images: {
    domains: [
      "bs.floristic.org", // primer iz Trefle
      "trefle.io",         // ako API direktno hostuje slike
      "cdn.pixabay.com",   // ako koristiš rezervne slike
      // dodaj ovde sve domene koje koristiš za slike
    ],
  },
};

export default nextConfig;
