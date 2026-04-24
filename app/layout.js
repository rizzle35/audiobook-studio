export const metadata = {
  title: "Audiobook Studio",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
