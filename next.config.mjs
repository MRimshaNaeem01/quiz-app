/** @type {import('next').NextConfig} */
const nextConfig = {
    onDemandEntries: {
        maxInactiveAge: 1000 * 60 * 60,
    },
};

export default nextConfig;
