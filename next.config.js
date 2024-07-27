/** @type {import('next').NextConfig} */
const nextConfig = {
  // async rewrites ()  {
  //     return [
  //       {
  //         source: "/blog",
  //         destination: "https://blog.nagasai.in/blog/",
  //       },
  //       {
  //         source: "/blog/",
  //         destination: "https://blog.nagasai.in/blog/",
  //       },
  //     ];
  //   }
  // ok
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.transparentpng.com",
      },
      {
        protocol: "https",
        hostname: "picsum.photos",
      },
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
  experimental: {
    taint: true,
  },
};

module.exports = nextConfig;
