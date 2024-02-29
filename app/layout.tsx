import type { Metadata } from "next";




export const metadata: Metadata = {
  title: "Teste frontend",
  description: "Criado por Gabriel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >{children}</body>
    </html>
  );
}
