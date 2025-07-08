import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/",            // La page d'accueil
        destination: "/signin", // Redirigée vers la page de connexion
        permanent: false,       // false = redirection temporaire
      },
    ];
  },
};

export default nextConfig;
