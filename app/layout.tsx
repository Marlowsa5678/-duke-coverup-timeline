export const metadata = {
  title: "Jane Duke Coverup Timeline",
  description: "Evidence Timeline"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
