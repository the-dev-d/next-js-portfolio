import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NameContextProvider } from "./ _components/NameContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "DHAIVATH LAL | THE DEV D",
    description: "Dhaivath Lal's portfolio website"
};

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <link rel="icon" href="/assets/logo.png" />
            <head>
                <link
                    rel="stylesheet"
                    type="text/css"
                    href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
                />
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
                    integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
                    crossOrigin="anonymous"
                    referrerPolicy="no-referrer"
                />
                <link
                    href="//cdn.jsdelivr.net/npm/font-logos@1/assets/font-logos.css"
                    rel="stylesheet"
                />
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
                />
            </head>
            <body className="dark:bg-background bg-slate-50 dark:text-slate-50 text-slate-900">
                <NameContextProvider>{children}</NameContextProvider>
            </body>
        </html>
    );
}
