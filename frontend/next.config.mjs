/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env: {
    server_domain: "http://127.0.0.1:5000", //domain used for backend;
    communication_domain: "http://127.0.0.1:8080", //domain used for socket io;
  }
};
export default nextConfig;
