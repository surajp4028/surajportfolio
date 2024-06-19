/** @type {import('next').NextConfig} */
const nextConfig = {

    eslint : {
        
        ignoreDuringBuilds: true,
    },
    images :{
        domains:['aceternity.com']
    },
};

export default nextConfig;