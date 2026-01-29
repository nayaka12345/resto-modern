export const metadata = {
  title: "RestoLux",
  description: "Website RestoLux Ramadhan",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
