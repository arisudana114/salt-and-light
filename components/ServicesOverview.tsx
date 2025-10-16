"use client";

import Image from "next/image";

const services = [
  {
    number: "01",
    title: "Event Planning & Organization",
    description:
      "From corporate gatherings to private celebrations, we handle concept creation, logistics, scheduling, and vendor coordination to ensure your event runs smoothly from start to finish.",
    image:
      "https://images.unsplash.com/photo-1580795478844-5ed694336c90?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470",
  },
  {
    number: "02",
    title: "Event Decoration",
    description:
      "We bring spaces to life through thematic, elegant, or bold decoration concepts — designed to reflect your brand identity or personal style perfectly.",
    video: "https://www.pexels.com/download/video/13038199/",
  },
  {
    number: "03",
    title: "Craft & Product Display",
    description:
      "We specialize in handcrafted display pieces that elevate your product presentation — perfect for exhibitions, brand activations, and promotional events.",
    image:
      "https://images.unsplash.com/photo-1549049950-48d5887197a0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=764",
  },
  {
    number: "04",
    title: "Workshops & Creative Sessions",
    description:
      "We host engaging creative workshops that inspire and connect — from team-building craft sessions to hands-on learning experiences.",
    video: "https://www.pexels.com/download/video/7804282/",
  },
];

export default function ServicesOverview() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-6xl font-semibold mb-12">
          WHAT WE OFFER
        </h2>

        <div className="space-y-16">
          {services.map((s, i) => (
            <div
              key={i}
              className={`flex flex-col md:flex-row items-center gap-10 ${
                i % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="flex-1 space-y-4">
                <p className="text-6xl font-bold text-gray-200">{s.number}</p>
                <h3 className="text-2xl font-semibold text-gray-800">
                  {s.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{s.description}</p>
              </div>

              <div className="flex-1">
                {s.image && (
                  // add a small min-height on mobile so the `fill` image has a visible height
                  // (covers cases where aspect-ratio utilities are missing or not applied)
                  <div className="relative w-full aspect-video overflow-hidden rounded-2xl shadow-md min-h-[180px] md:min-h-0">
                    <Image
                      src={s.image}
                      alt={s.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority={i === 0}
                    />
                  </div>
                )}
                {s.video && (
                  <div className="aspect-video rounded-2xl overflow-hidden shadow-md min-h-[180px] md:min-h-0">
                    <video
                      src={s.video}
                      controls
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
