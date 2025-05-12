/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  images: {
    domains: [
      "raw.githubusercontent.com",
      "tokens.solana.com",
      "static.raydium.io",
      "arweave.net",
      "bafkreihnmiuc6ik7z47g76zl4tcfpysmp57iv7rklmzl5yekk6pfgw35fq.ipfs.nftstorage.link",
      "static.jup.ag",
    ],
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        buffer: require.resolve("buffer"),
      };
    }
    return config;
  },
};

module.exports = nextConfig;
