import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from 'next/link';

// Importing fonts from Google Fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Metadata for the page
export const metadata: Metadata = {
  title: "Tommy's Portfolio",
  description: "Tommy's Personal Website",
};

// RootLayout component
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">

        {/* Navigation Bar */}
        <nav className="bg-black p-4 sticky top-0">
          <div className="flex justify-between w-full py-3 px-10">
            {/* Home Link */}
            <Link href="/" className="text-white hover:text-gray-300 font-semibold">
              T0MMY
            </Link>

            {/* Navigation Menu */}
            <ul className="flex space-x-10">
              <li>
                <Link href="/about" className="text-white hover:text-gray-300 font-semibold">
                  AB0UT
                </Link>
              </li>
              <li>
                <a
                  href="/Resume.docx.pdf"
                  className="text-white hover:text-gray-300 font-semibold"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  RESUME
                </a>
              </li>
            </ul>
          </div>
        </nav>

        {/* Footer Section */}
        <footer>
          <div className="mx-auto flex h-16 gap-6 items-center rounded-2xl bg-transparent mb-5 px-6 fixed bottom-0 left-1/2 transform -translate-x-1/2 z-50">

            {/* GitHub Icon */}
            <a href="https://github.com/ItsTxmmyy" target="_blank" rel="noopener noreferrer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-8 w-8 text-white hover:text-gray-300"
              >
                <path d="M12 0C5.37 0 0 5.373 0 12a12 12 0 008.207 11.385c.6.113.793-.26.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.082-.729.082-.729 1.205.085 1.84 1.238 1.84 1.238 1.07 1.834 2.807 1.304 3.492.997.108-.775.42-1.305.762-1.605-2.665-.304-5.467-1.336-5.467-5.941 0-1.312.469-2.384 1.237-3.222-.124-.303-.536-1.524.117-3.176 0 0 1.008-.322 3.3 1.23a11.51 11.51 0 013.003-.403c1.02.005 2.047.138 3.003.403 2.291-1.552 3.297-1.23 3.297-1.23.655 1.653.243 2.874.12 3.176.77.838 1.236 1.91 1.236 3.222 0 4.617-2.807 5.635-5.48 5.933.431.372.815 1.102.815 2.222v3.293c0 .319.192.694.8.576A12.005 12.005 0 0024 12c0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>


            {/* LinkedIn Icon */}
            <a href="https://www.linkedin.com/in/thinhcanhle" target="_blank" rel="noopener noreferrer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                fill="currentColor"
                className="h-8 w-8 text-white hover:text-gray-300"
              >
                <path d="M100.28 448H7.4V148.9h92.88zm-46.44-341A53.59 53.59 0 010 53.5 53.59 53.59 0 0153.84 0c29.65 0 53.72 24 53.72 53.5s-24.07 53.5-53.72 53.5zM447.9 448h-92.68V302.4c0-34.7-12.4-58.4-43.4-58.4-23.6 0-37.6 15.9-43.8 31.2-2.2 5.3-2.8 12.6-2.8 20v152.8H172.2s1.2-247.9 0-273.1h92.68v38.7c12.3-19 34.3-46 83.4-46 60.8 0 106.5 39.8 106.5 125.2V448z"/>
              </svg>
            </a>


            {/* Gmail Icon */}
            <a href="mailto:thinhcanhle22@gmail.com" target="_blank" rel="noopener noreferrer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-8 w-8 text-white hover:text-gray-300"
              >
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
            </a>



            {/* Instagram Icon */}
            <a href="https://www.instagram.com/ItsTxmmyy" target="_blank" rel="noopener noreferrer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                fill="currentColor"
                className="h-8 w-8 text-white hover:text-gray-300"
              >
                <path d="M224,202.66A53.34,53.34,0,1,0,277.34,256,53.38,53.38,0,0,0,224,202.66ZM398.8,96A48.24,48.24,0,0,0,352,49.2C317.3,48,278.5,48,224,48S130.7,48,96,49.2A48.24,48.24,0,0,0,49.2,96C48,130.7,48,169.5,48,224s0,93.3,1.2,128A48.24,48.24,0,0,0,96,398.8C130.7,400,169.5,400,224,400s93.3,0,128-1.2A48.24,48.24,0,0,0,398.8,352c1.2-34.7,1.2-73.5,1.2-128S400,130.7,398.8,96ZM224,338.67A82.67,82.67,0,1,1,306.67,256,82.76,82.76,0,0,1,224,338.67Zm85.33-148a19.2,19.2,0,1,1,19.2-19.2A19.2,19.2,0,0,1,309.33,190.67Z"/>
              </svg>
            </a>


            {/* Twitter Icon */}
            <a href="https://twitter.com/TommyRL_" target="_blank" rel="noopener noreferrer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                className="h-8 w-8 text-white hover:text-gray-300"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M23 3a10.7 10.7 0 01-3.09.84A4.99 4.99 0 0022 1a9.76 9.76 0 01-3.16 1.2A4.97 4.97 0 0016.62.47a4.97 4.97 0 00-4.92 5.3c0 .4.05.8.15 1.18a14.03 14.03 0 01-10.14-5.13 4.93 4.93 0 00-.67 2.5c0 1.73.88 3.26 2.2 4.16a5.03 5.03 0 01-2.24-.62v.06a4.94 4.94 0 003.95 4.8 5.05 5.05 0 01-2.21.08c.62 1.92 2.43 3.33 4.56 3.37a9.92 9.92 0 01-6.13 2.1c-.4 0-.8-.02-1.2-.07a13.91 13.91 0 007.52 2.2c9.03 0 14-7.5 14-14v-.64A9.95 9.95 0 0023 3z"
                />
              </svg>
            </a>
          </div>
        </footer>

        {/* Main Content */}
        <main className="p-10">{children}</main>

      </body>
    </html>
  );
}