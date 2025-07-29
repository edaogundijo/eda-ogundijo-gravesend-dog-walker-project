// src/app/page.js

"use client";

import { useState } from "react";
import Image from "next/image";
import { PhoneCall } from "lucide-react";

// Helper to open WhatsApp chat
function openWhatsApp(service, date) {
  const formattedDate = date.toISOString().split("T")[0];
  const text = encodeURIComponent(
    `Hello! I'd like to book a ${service.toLowerCase()} on ${formattedDate}.`
  );
  window.open(`https://wa.me/905335093314?text=${text}`, "_blank");
}

export default function Home() {
  const [date, setDate] = useState(new Date());

  return (
    <main className="font-sans text-gray-800">

      {/* Hero */}
      <section className="relative h-screen bg-gradient-to-br from-green-500 to-orange-300 flex flex-col justify-center items-center text-white text-center px-4">
        <div className="absolute inset-0 bg-black/20 backdrop-blur-sm"></div>
        <div className="relative z-10 max-w-2xl space-y-6">
          <h1 className="text-6xl font-extrabold drop-shadow-lg">
            Gravesend Pet Care
          </h1>
          <p className="text-xl md:text-2xl">
            Friendly & reliable dog walking and pet sitting in Gravesend.
          </p>
          <a
            href="#services"
            className="inline-block mt-4 bg-white text-green-600 font-semibold rounded-full px-6 py-3 shadow-lg hover:scale-105 transform transition"
          >
            View Services
          </a>
        </div>
      </section>

      {/* About Me */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center space-y-6">
          <h2 className="text-4xl font-bold text-green-700">About Me</h2>
          <p className="prose prose-lg prose-green mx-auto">
            Hi, I’m <strong>Eda Ogundijo</strong>. I’ve been a professional dog walker and
            pet sitter in Gravesend for over 5 years. I treat every dog as if they were
            my own—offering safe, fun walks, lots of cuddles, and regular updates to
            give you peace of mind while you’re away.
          </p>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 bg-green-50">
        <div className="max-w-5xl mx-auto px-4 space-y-12">
          <h2 className="text-4xl font-bold text-center text-green-800">
            Services
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Dog Walking */}
            <div className="bg-white rounded-3xl shadow-lg p-8 transform hover:-translate-y-2 transition">
              <h3 className="text-2xl font-semibold text-green-700 mb-4">
                Dog Walking
              </h3>
              <ul className="list-disc list-inside mb-6 space-y-2">
                <li>30‑minute solo or group walks</li>
                <li>60‑minute adventurous hikes</li>
                <li>Puppy socialisation sessions</li>
              </ul>
              <button
                onClick={() => openWhatsApp("Dog Walking", date)}
                className="w-full bg-green-600 hover:bg-green-700 text-white rounded-full px-6 py-3 font-medium shadow"
              >
                Book a Walk
              </button>
            </div>

            {/* Pet Sitting */}
            <div className="bg-white rounded-3xl shadow-lg p-8 transform hover:-translate-y-2 transition">
              <h3 className="text-2xl font-semibold text-orange-600 mb-4">
                Pet Sitting
              </h3>
              <ul className="list-disc list-inside mb-6 space-y-2">
                <li>Home visits (15–30 mins each)</li>
                <li>Overnight stays available</li>
                <li>Feeding, play & medication</li>
              </ul>
              <button
                onClick={() => openWhatsApp("Pet Sitting", date)}
                className="w-full bg-orange-500 hover:bg-orange-600 text-white rounded-full px-6 py-3 font-medium shadow"
              >
                Book a Sitter
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Prices */}
      <section id="prices" className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-green-700 mb-8">
            Prices
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full table-auto text-left border-collapse">
              <thead>
                <tr className="bg-green-100">
                  <th className="px-6 py-3">Service</th>
                  <th className="px-6 py-3">Duration</th>
                  <th className="px-6 py-3">Price</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Dog Walk (Group)", "30 mins", "£10"],
                  ["Dog Walk (Solo)", "30 mins", "£15"],
                  ["Puppy Walk", "20 mins", "£12"],
                  ["Pet Sitting Visit", "30 mins", "£12"],
                  ["Overnight Stay", "Up to 12 hrs", "£50"],
                ].map((row, i) => (
                  <tr
                    key={i}
                    className={i % 2 === 0 ? "bg-green-50" : ""}
                  >
                    {row.map((cell, j) => (
                      <td key={j} className="px-6 py-4">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-orange-50">
        <div className="max-w-3xl mx-auto px-4 space-y-8 text-center">
          <h2 className="text-4xl font-bold text-orange-700">
            What Clients Say
          </h2>
          <div className="space-y-6">
            <blockquote className="relative bg-white p-6 rounded-2xl shadow before:content-['“'] before:text-6xl before:absolute before:-top-4 before:-left-4 before:text-orange-200">
              <p>“Eda is amazing! Our Labrador loves his walks and the daily photo updates give us such peace of mind.”</p>
              <footer className="mt-4 font-semibold">— Sarah, Gravesend</footer>
            </blockquote>
            <blockquote className="relative bg-white p-6 rounded-2xl shadow before:content-['“'] before:text-6xl before:absolute before:-top-4 before:-left-4 before:text-green-200">
              <p>“Reliable, caring, and punctual. Highly recommend for overnight sitting.”</p>
              <footer className="mt-4 font-semibold">— Tom, Northfleet</footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section id="booking" className="py-20 bg-gradient-to-tr from-green-400 to-orange-400 text-white text-center px-4">
        <div className="max-w-md mx-auto space-y-6">
          <h2 className="text-4xl font-bold">Ready to Book?</h2>
          <p className="text-lg">Choose your date below and start your journey with us!</p>
          <input
            type="date"
            value={date.toISOString().split("T")[0]}
            onChange={(e) => setDate(new Date(e.target.value))}
            className="block w-full bg-white text-gray-800 border-0 rounded-full px-6 py-3 text-center font-medium focus:outline-none"
          />
          <button
            onClick={() => openWhatsApp("Service", date)}
            className="inline-flex items-center space-x-3 bg-white text-green-600 font-semibold rounded-full px-8 py-3 hover:scale-105 transform transition shadow-lg"
          >
            <PhoneCall size={24} />
            <span>Chat on WhatsApp</span>
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-6 text-center text-sm">
        © {new Date().getFullYear()} Gravesend Pet Care. All rights reserved.
      </footer>
    </main>
  );
}
