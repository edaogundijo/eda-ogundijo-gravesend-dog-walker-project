// src/app/page.js

"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  PhoneCall,
  ChevronLeft,
  ChevronRight,
  Instagram,
  Facebook,
  Twitter,
} from "lucide-react";

// Carousel images (put these in your public/ folder)
const slides = [
  "/slide1.jpg",
  "/slide2.jpg",
  "/slide3.jpg",
];

function openWhatsApp(service, date) {
  const formattedDate = date.toISOString().split("T")[0];
  const text = encodeURIComponent(
    `Hello! I'd like to book a ${service.toLowerCase()} on ${formattedDate}.`
  );
  window.open(`https://wa.me/905335093314?text=${text}`, "_blank");
}

export default function Home() {
  const [date, setDate] = useState(new Date());
  const [current, setCurrent] = useState(0);

  // Auto‑advance every 5s
  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((c) => (c + 1) % slides.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <main className="font-sans text-gray-800">

      {/* Carousel Hero */}
      <section className="relative h-screen overflow-hidden">
        {slides.map((src, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              i === current ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={src}
              alt={`Slide ${i + 1}`}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
        ))}

        <div className="absolute inset-0 flex items-center justify-between px-4">
          <button
            onClick={() =>
              setCurrent((c) => (c - 1 + slides.length) % slides.length)
            }
            className="p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition"
          >
            <ChevronLeft size={32} />
          </button>
          <button
            onClick={() => setCurrent((c) => (c + 1) % slides.length)}
            className="p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition"
          >
            <ChevronRight size={32} />
          </button>
        </div>

        <div className="absolute bottom-10 w-full text-center">
          <h1 className="text-5xl font-extrabold text-white drop-shadow-lg">
            Gravesend Pet Care
          </h1>
          <p className="mt-2 text-lg text-white/90">
            Friendly & reliable dog walking & pet sitting
          </p>
        </div>
      </section>

      {/* About Me */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center space-y-6">
          <h2 className="text-4xl font-bold text-green-700">About Me</h2>
          <p className="prose prose-lg prose-green mx-auto">
            Hi, I’m <strong>Eda Ogundijo</strong>. I’ve been a professional dog walker and
            pet sitter in Gravesend for over 5 years. I treat every dog as if they were
            my own—offering safe, fun walks, lots of cuddles, and regular updates.
          </p>
        </div>
      </section>

      {/* Services */}
      {/* …you can keep the vibrant services section from before… */}

      {/* Booking CTA */}
      {/* …keep your booking section… */}

      {/* Footer w/ Socials */}
      <footer className="bg-gray-900 text-gray-300 py-8 text-center space-y-4">
        <div className="flex justify-center space-x-6">
          <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
            <Instagram size={24} className="hover:text-white transition" />
          </a>
          <a href="https://facebook.com/yourprofile" target="_blank" rel="noopener noreferrer">
            <Facebook size={24} className="hover:text-white transition" />
          </a>
          <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">
            <Twitter size={24} className="hover:text-white transition" />
          </a>
        </div>
        <div className="flex justify-center space-x-4">
          <a
            href="https://wa.me/905335093314"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white rounded-full px-4 py-2 transition"
          >
            <PhoneCall size={20} />
            <span>WhatsApp Us</span>
          </a>
        </div>
        <p className="text-sm">
          © {new Date().getFullYear()} Gravesend Pet Care. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
