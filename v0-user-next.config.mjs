/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Make sure this matches your GitHub repository name
  basePath: process.env.NODE_ENV === 'production' ? '/mu_dataset' : '',
  images: {
    unoptimized: true,
  },
  // This ensures CSS is properly included
  trailingSlash: true,
  // This helps with GitHub Pages
  assetPrefix: process.env.NODE_ENV === 'production' ? '/mu_dataset' : '',
}

export default nextConfig

