/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.externals.push({
        bufferutil: 'bufferutil',
        lokijs: 'lokijs',
        encoding: 'encoding',
        'utf-8-validate': 'utf-8-validate',
      });
    }

    return config;
  },
};

module.exports = nextConfig;
