/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@salamanda/database', '@salamanda/shared-types'],
  reactStrictMode: true,
};

export default nextConfig;
