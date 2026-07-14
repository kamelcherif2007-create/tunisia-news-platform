export const runtime = 'nodejs';

export async function GET() {
  return Response.json(
    {
      message: 'Tunisia News Platform API',
      version: '1.0.0',
      endpoints: {
        news: '/api/news',
        auth: '/api/auth',
        users: '/api/users',
        admin: '/api/admin',
      },
    },
    { status: 200 }
  );
}
