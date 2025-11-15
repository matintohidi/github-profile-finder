import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Container } from "@chakra-ui/react";
import Header from "@/components/header";
import { Provider } from "@/components/ui/provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Github Profile Finder",
  description: "Search and view Github user profiles",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable}`} style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Provider>
          <Container maxW="container.lg" flex="1" display="flex" flexDirection="column" px={{ base: 4, md: 6, lg: 8 }}>
            <Header />
            {children}
          </Container>
        </Provider>
      </body>
    </html>
  );
}
