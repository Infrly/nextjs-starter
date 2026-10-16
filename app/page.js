// Rendered on the server for every request, so this time changes on reload.
export const dynamic = 'force-dynamic';

export default function Home() {
  return (
    <main>
      <h1>Your Next.js app is live 🎉</h1>
      <p>
        Edit <code>app/page.js</code>, push to GitHub, and Infrly deploys the new version.
      </p>
      <p>Rendered on the server at {new Date().toISOString()}.</p>
      <p>
        Health check: <a href="/api/health">/api/health</a>
      </p>
    </main>
  );
}
