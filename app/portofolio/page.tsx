export default function PortofolioPage() {
  return (
    <main className="min-h-screen flex flex-col items-center px-4 py-16">
      <h1 className="text-5xl font-bold mb-4">Our Portfolio</h1>
      <p className="text-gray-600 max-w-2xl text-center mb-12">
        A showcase of our favorite events and creative projects — crafted with
        passion, precision, and purpose.
      </p>

      {/* Portfolio grid will go here later */}
      <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Placeholder boxes for now */}
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="h-64 bg-gray-200 rounded-xl flex items-center justify-center text-gray-500"
          >
            Project {i + 1}
          </div>
        ))}
      </div>
    </main>
  );
}
