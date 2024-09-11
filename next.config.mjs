/** @type {import('next').NextConfig} */
const nextConfig = {
    ...(process.env.NODE_ENV === 'production' ? {
        output: 'export',
        basePath: '/sab-id.github.io',
    } : {}),
    images: {
        unoptimized: true,
    },
    async headers() {
        return [
            {
                source: '/(.*)',
                headers: [
                    {
                        key: 'Permissions-Policy',
                        value: 'interest-cohort=(), private-state-token-redemption=(), private-state-token-issuance=(), browsing-topics=()'
                    },
                ],
            },
        ]
    },
};

export default nextConfig;
