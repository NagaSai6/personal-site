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
    images : {
        remotePatterns :[
            {
                protocol:'https',
                hostname:"www.transparentpng.com"
            }
        ]
    }
}

module.exports = nextConfig
