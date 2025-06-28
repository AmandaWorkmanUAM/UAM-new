import Link from "next/link";

export default function HomePage() {
  return (
    <main className="max-w-5xl mx-auto p-6 space-y-12">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Unclaimed Asset Management</h1>
        <p className="text-lg text-gray-600">
          Reconnecting people with what’s rightfully theirs.
        </p>
        <p className="text-md text-gray-500">
          We help individuals recover forgotten or unclaimed financial assets —
          quickly, securely, and with no upfront cost.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-4">
          <Link href="/contact">
            <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">Start Your Claim</button>
          </Link>
          <Link href="/track">
            <button className="border border-blue-600 text-blue-600 px-6 py-2 rounded hover:bg-blue-50 transition">Track My Claim</button>
          </Link>
        </div>
      </section>

      <nav className="text-center space-x-4 text-blue-600 underline">
        <Link href="/our-team">Our Team</Link>
        <Link href="/faq">FAQ</Link>
        <Link href="/contact">Contact Us</Link>
        <Link href="/privacy">Privacy & Security</Link>
        <Link href="/testimonials">Testimonials</Link>
      </nav>
    </main>
  );
}
