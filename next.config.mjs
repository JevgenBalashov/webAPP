/** @type {import('next').NextConfig} */
import withExportImages from 'next-export-optimize-images';

const nextConfig = withExportImages({
  compiler: {
    emotion: true,
  },
  experimental: {
    optimizePackageImports: ['@mui/icons-material', '@mui/material', 'formik-mui', 'swiper'],
  },
  output: 'export',
});

export default nextConfig;
