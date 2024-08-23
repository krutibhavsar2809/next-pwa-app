import withPWA from 'next-pwa';

const pwaConfig = withPWA({
  dest: 'public'
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

export default pwaConfig(nextConfig);
