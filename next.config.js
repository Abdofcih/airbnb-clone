/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // which domains you accept images from
    domains: ["links.papareact.com"]
  },
  env: {
    mapbox_key:
      "pk.eyJ1IjoiYWJkbzk4IiwiYSI6ImNrMXF5aG1uZjAyMTUzZm1vN3ZlbHM5aDgifQ.3rmXUwMws4ZwpRfRnzdrcw"
  },
  reactStrictMode: true
};

module.exports = nextConfig;
