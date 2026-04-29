import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SAPHIX SERVICE | Tourisme et événements au Cameroun",
  description:
    "Découvrez le Cameroun autrement avec SAPHIX SERVICE. Votre guide de confiance pour le tourisme, les événements et les expériences authentiques à Douala et partout au Cameroun.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/images/logo.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
