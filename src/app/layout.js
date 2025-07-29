// src/app/layout.js

// 1. Import Tailwind globals
import "./globals.css";

export const metadata = {
  title: "Gravesend Pet Care",
  description:
    "Friendly & reliable dog walking and pet sitting services in Gravesend. Book your service today via WhatsApp!",
  openGraph: {
    title: "Gravesend Pet Care",
    description:
      "Friendly & reliable dog walking and pet sitting services in Gravesend.",
    url: "https://eda-ogundijo-gravesend-dog-walker-project.vercel.app",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>{children}</body>
    </html>
  );
}
