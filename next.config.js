/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  env: {
    SERVICEID: process.env.SERVICEID,
    TEMPLATEID: process.env.TEMPLATEID,
    USERID: process.env.USERID,
  },
};

module.exports = nextConfig;
