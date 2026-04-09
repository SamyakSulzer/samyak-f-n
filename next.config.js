/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,

    // 👇 Tell Turbopack the correct workspace root
    experimental: {
        // For Next.js 13+ the key is `turbo` (alias for Turbopack)
        turbo: {
            // `__dirname` resolves to the folder where this file lives,
            // i.e. the repo root that also contains package.json
            root: __dirname,
        },
    },
};

module.exports = nextConfig;
