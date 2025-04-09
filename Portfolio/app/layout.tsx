import Header from "@/app/components/header"; // update to the correct path
import Footer from "@/app/components/footer";
import Link from "next/link";
import "./globals.css";
export const metadata = {
  title: "My Portfolio",
  description: "A portfolio built with Next.js and Tailwind",
  openGraph: {
    title: "My Portfolio",
    description: "Check out my projects!",
    url: "https://example.com",
    images: [
      {
        url: "https://example.com/my-og-image.jpg",
        width: 800,
        height: 600,
      },
    ],
  },
  // additional metadata options...
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className='flex flex-col min-h-screen text-lg opacity-85 text-stone-900 bg-gradient-to-b from-stone-300 to-stone-950'>
        <Header/>
        <main className='flex-grow'>{children}</main>
        <Footer/>
      </body>
    </html>
  );
}
