import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from 'sonner'
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sagar sangwan || Home",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >

          {children}
          <Toaster richColors position="top-right" />
        </ThemeProvider></body>
    </html>
  );
}
