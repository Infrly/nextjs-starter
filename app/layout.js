export const metadata = {
  title: 'Next.js on Infrly',
  description: 'A minimal Next.js app that deploys on Infrly with no configuration.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ font: '16px/1.6 system-ui, sans-serif', maxWidth: 640, margin: '12vh auto', padding: '0 20px', color: '#1f1f1d' }}>
        {children}
      </body>
    </html>
  );
}
