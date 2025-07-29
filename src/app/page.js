"use client";

import { useState } from "react";
import Image from "next/image";
import { PhoneCall } from "lucide-react";

export default function Home() {
  const [date, setDate] = useState(new Date());

  return (
    <main className="min-h-screen bg-gradient-to-br from-green-100 via-orange-50 to-white text-gray-800 p-4">
      <header className="text-center py-8">
        <h1 className="text-4xl font-bold text-green-700">Gravesend Pet Care</h1>
        <p className="mt-2 text-lg">Friendly & reliable dog walking and pet sitting in your area.</p>
      </header>

      <section className="flex justify-center mb-8">
        <Image
          src="/my-dog-walk.jpg"
          alt="Walking my dog"
          width={400}
          height={300}
          className="rounded-2xl shadow-md"
        />
      </section>

      <section className="grid md:grid-cols-2 gap-6 mb-12">
        {/* Dog Walking Card */}
        <div className="rounded-2xl shadow border border-green-300 p-6">
          <h2 className="text-2xl font-semibold text-green-800 mb-2">Dog Walking</h2>
          <p className="mb-4">Daily walks tailored to your dog’s needs and energy levels.</p>
          <button className="w-full bg-green-600 hover:bg-green-700 text-white rounded-xl px-4 py-2">
            Request Walk
          </button>
        </div>

        {/* Pet Sitting Card */}
        <div className="rounded-2xl shadow border border-orange-300 p-6">
          <h2 className="text-2xl font-semibold text-orange-800 mb-2">Pet Sitting</h2>
          <p className="mb-4">In‑home care while you’re away — stress‑free for you and your pet.</p>
          <button className="w-full bg-orange-500 hover:bg-orange-600 text-white rounded-xl px-4 py-2">
            Request Sitting
          </button>
        </div>
      </section>

      <section className="max-w-md mx-auto mb-12">
        <h3 className="text-xl font-semibold mb-2">Pick a date:</h3>
        <input
          type="date"
          value={date.toISOString().split("T")[0]}
          onChange={(e) => setDate(new Date(e.target.value))}
          className="block w-full border border-gray-300 rounded-md p-2"
        />
      </section>

      <footer className="text-center">
        <a
          href="https://wa.me/905335093314"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white rounded-full px-4 py-2"
        >
          <PhoneCall size={20} />
          <span>WhatsApp Us</span>
        </a>
      </footer>
    </main>
  );
}
