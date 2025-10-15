"use client";

export default function OurClients() {
  const logos = [
    "/biore.png",
    "/ponds.png",
    "/skintific.png",
    "/revlon.png",
    "/guardian.png",
    "/lumeo.svg",
    "/femaledaily.jpg",
    "/saltandlight.png",
  ];

  // duplicate for seamless scroll
  const repeated = [...logos, ...logos];

  return (
    <section className="bg-white mb-20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-gray-900">
          OUR CLIENTS
        </h2>

        <div className="space-y-8">
          {/* Row 1 */}
          <div className="relative w-full overflow-hidden">
            <div className="flex animate-scroll">
              {repeated.map((logo, index) => (
                <div
                  key={`row1-${index}`}
                  className="flex-shrink-0 w-40 h-24 mx-6 flex items-center justify-center"
                >
                  <img
                    src={logo}
                    alt={`Client ${index + 1}`}
                    className="max-h-16 object-contain opacity-80 hover:opacity-100 transition"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Row 2 (reverse direction) */}
          <div className="relative w-full overflow-hidden">
            <div className="flex animate-scroll-reverse">
              {repeated.map((logo, index) => (
                <div
                  key={`row2-${index}`}
                  className="flex-shrink-0 w-40 h-24 mx-6 flex items-center justify-center"
                >
                  <img
                    src={logo}
                    alt={`Client ${index + 1}`}
                    className="max-h-16 object-contain opacity-80 hover:opacity-100 transition"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
