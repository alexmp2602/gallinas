type Metadata = {
  title: string;
  description: string;
  keywords: string;
  viewport: string;
};

export const metadata: Metadata = {
  title: 'Gallinas Ponedoras',
  description: 'Criamos las mejores gallinas ponedoras para su hogar o negocio.',
  keywords: 'gallinas, ponedoras, huevos, aves de corral',
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        <meta name="keywords" content={metadata.keywords || ''} />
        <meta name="viewport" content={metadata.viewport || ''} />
      </head>
      <body className="font-inter">{children}</body>
    </html>
  )
}