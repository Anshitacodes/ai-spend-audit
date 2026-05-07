export default function Home() {
  return (
    <main className="min-h-screen bg-white p-8">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-5xl font-bold tracking-tight">
          AI Spend Audit
        </h1>

        <p className="mt-4 text-lg text-gray-600">
          Discover hidden savings across ChatGPT, Claude, Cursor, Copilot, and more.
        </p>

        <button className="mt-8 rounded-xl bg-black px-6 py-3 text-white hover:opacity-90">
          Start Free Audit
        </button>
      </div>
    </main>
  );
}