/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  modularizeImports: {
    antd: {
      transform: "antd/lib/{{ kebabCase member }}",
    },
  },
  transpilePackages: ["ahooks"],
};

module.exports = nextConfig;
