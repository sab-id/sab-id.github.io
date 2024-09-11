/** @type {import('next').NextConfig} */
const nextConfig = {
    ...(process.env.NODE_ENV === 'production' ? {
        output: 'export',
        basePath: '/sab-id.github.io',
    } : {}),
    images: {
        unoptimized: true,
    },
};

export default nextConfig;
