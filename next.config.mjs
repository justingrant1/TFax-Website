/** @type {import('next').NextConfig} */
const nextConfig = {
  // NOTE: ignoreBuildErrors removed — fix TypeScript errors before deploying
  // images.unoptimized removed — Next.js Image Optimization is now active
  // This enables automatic WebP/AVIF conversion, responsive srcset, and lazy loading
  // which significantly improves Core Web Vitals (LCP, CLS)
}

export default nextConfig
