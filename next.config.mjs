/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
        return [
            {
                source: '/(.*)',
                headers: [
                    {
                        key: 'Access-Control-Allow-Credentials',
                        value: 'true',
                    },
                    {
                        key: 'Access-Control-Allow-Origin',
                        value: 'https://notes-management-app-backend-eta.vercel.app/',
                    },
                    {
                        key: 'Access-Control-Allow-Methods',
                        value: 'GET,OPTIONS,PATCH,DELETE,POST,PUT',
                    },
                    {
                        key: 'Access-Control-Allow-Headers',
                        value: 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization',
                    },
                ],
            },
        ];
    },
};

export default nextConfig;
