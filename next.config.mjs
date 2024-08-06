/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers() {
        return [
            {
                source: '/user/login',
                headers: [
                    { key: 'Access-Control-Allow-Credentials', value: 'true' },
                    { key: 'Access-Control-Allow-Origin', value: 'https://notes-management-app-three.vercel.app/' },
                    {
                        key: 'Access-Control-Allow-Methods',
                        value: 'POST',
                    },
                    {
                        key: 'Access-Control-Allow-Headers',
                        value:
                            'Content-Type, Authorization',
                    },
                ],
            },
            {
                source: '/notes/:path*',
                headers: [
                    { key: 'Access-Control-Allow-Credentials', value: 'true' },
                    { key: 'Access-Control-Allow-Origin', value: '*' },
                    {
                        key: 'Access-Control-Allow-Methods',
                        value: 'GET,DELETE,PATCH,POST,PUT',
                    },
                    {
                        key: 'Access-Control-Allow-Headers',
                        value:
                            'Content-Type, Authorization',
                    },
                ],
            },
            {
                source: '/categories/:path*',
                headers: [
                    { key: 'Access-Control-Allow-Credentials', value: 'true' },
                    { key: 'Access-Control-Allow-Origin', value: '*' },
                    {
                        key: 'Access-Control-Allow-Methods',
                        value: 'GET,DELETE,PATCH,POST,PUT',
                    },
                    {
                        key: 'Access-Control-Allow-Headers',
                        value:
                            'Content-Type, Authorization',
                    },
                ],
            },
        ];
    },
};

export default nextConfig;
