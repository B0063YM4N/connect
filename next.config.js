/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images:{
        unoptimized:true,
    },
    env: {
        ADMIN_EMAIL: process.env.ADMIN_EMAIL,
      }

}

module.exports = nextConfig


//     output: 'export',