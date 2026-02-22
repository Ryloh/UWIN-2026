import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'uwinesport.fr',
          },
        ],
        destination: 'https://uwinlab.fr/:path*',
        statusCode: 301, // Force 301 instead of default 308 for strict Google validation
      },
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.uwinesport.fr',
          },
        ],
        destination: 'https://uwinlab.fr/:path*',
        statusCode: 301, // Force 301
      },
    ];
  },
};

export default nextConfig;
