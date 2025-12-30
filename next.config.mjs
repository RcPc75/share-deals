const nextConfig = {
    images: {
        unoptimized: true,
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'optimadeals.com',
            },
            {
                protocol: 'https',
                hostname: 'images.optima-crm.com',
            },
        ],
    },
};

export default nextConfig;
