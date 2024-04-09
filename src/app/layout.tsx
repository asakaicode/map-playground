export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <head>
        <title>Top</title>
      </head>
      <body>{children}</body>
    </html>
  )
}
