// next.config.js

const isDev = process.env.NODE_ENV === 'development';
module.exports = {
  images: {
    domains: [
      '5.imimg.com',
      '4.imimg.com',              // ✅ add this line
      'via.placeholder.com',
      'img.freepik.com' ,      // if you're using placeholder images too
      'endura-steel.com',
      'encrypted-tbn1.gstatic.com',
      'viraatindustries.com',
      'encrypted-tbn2.gstatic.com',
    ],  
  },
  typescript: {
    ignoreBuildErrors: !isDev ? true : false,
  },
  eslint: {
    ignoreDuringBuilds: !isDev ? true : false,
  },
};