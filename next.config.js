/** @type {import('next').NextConfig} */
const nextConfig = {
   images: {
    domains: ['cdn.lottielab.com', 'https://flagcdn.com'], // Add any external image hostnames here
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
      },
    ],
  },
  webpack(config) {
    const fileLoaderRule = config.module.rules.find(rule => rule.test?.test?.('.svg'))
    config.module.rules.push(
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/, // *.svg?url
      },
      {
        test: /\.svg$/i,
        issuer: fileLoaderRule.issuer,
        resourceQuery: {not: [...fileLoaderRule.resourceQuery.not, /url/]}, // exclude if *.svg?url
        use: ['@svgr/webpack'],
      },
    )
    fileLoaderRule.exclude = /\.svg$/i
    return config
  },
}

module.exports = nextConfig
