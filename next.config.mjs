/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Static export — the site is fully static and can be hosted anywhere
  // (upload the generated `out/` folder to any web space).
  output: "export",
  // Emit /demnaechst/index.html so clean URLs work on static hosts (Hostinger/Apache)
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
