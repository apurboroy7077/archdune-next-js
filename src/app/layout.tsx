import type { Metadata } from "next";
import "./globals.css";
import "./../css/fontawesome-free-6.5.2-web/css/all.min.css";
import StartupFunctions1 from "@/functions/startup/StartupFunctions1";
import "/src/css/archdune/css-files/archdune-1.css";
export const metadata: Metadata = {
  title: "Archdune",
  description: "Archdune",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <StartupFunctions1 />
        {children}
      </body>
    </html>
  );
}
