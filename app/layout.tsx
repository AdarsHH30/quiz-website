import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import ThemeProvider from "@/components/theme-provider";
import MobileNavbar from "@/components/mobile-nav";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Those MCQ Subjects",
  description: "Developed by Amrith R Naik",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-[family-name:var(--font-geist-sans)] relative antialiased flex h-screen w-screen overflow-x-hidden overflow-y-scroll`}
      >
        <div
          className="w-screen h-screen fixed z-50 bg-grain-image opacity-5 mix-blend-lighten pointer-events-none top-0 left-0"
          style={{ backgroundSize: "110px" }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <MobileNavbar />
          <div className="mt-14 w-full">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
