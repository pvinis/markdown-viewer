import { Providers } from "@/Providers";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MD Viewer",
  description: "A great markdown viewer by pavlos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <div className="px-6 pt-32 pb-16 max-w-prose prose lg:prose-xl mx-auto dark:prose-invert prose-quoteless prose-blockquote:text-gray-400 prose-blockquote:font-normal">
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
