"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function GoogleReviews() {
  const reviews = [
    {
      name: "Jonathan P.",
      date: "October 2025",
      review:
        "Professional team and fast service. They helped us handle events efficiently.",
      video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      name: "Ayu R.",
      date: "September 2025",
      review:
        "Very responsive and reliable event partner. Highly recommended for events organizing!",
      video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      name: "Michael L.",
      date: "August 2025",
      review:
        "Excellent support from start to finish. Communication is clear and pricing is fair.",
      video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      name: "Rina K.",
      date: "July 2025",
      review:
        "Great experience! The staff was friendly and took care of our events properly.",
      video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
  ];

  return (
    <section className="min-h-[640px] flex flex-col justify-center items-center bg-green-600/30 text-gray-900 px-4 py-20 ">
      <h2 className="text-4xl font-bold mb-8 text-gray-800">Google Reviews</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 max-w-6xl w-full">
        {reviews.map((r, i) => (
          <Card
            key={i}
            className={`hover:shadow-md transition rounded-none overflow-hidden bg-transparent border-none shadow-none flex flex-col justify-between h-full ${
              i > 1 ? "hidden md:flex" : ""
            }`}
          >
            {/* Video section */}
            <div className="aspect-video w-full bg-black -mt-6">
              <iframe
                className="w-full h-full"
                src={`${r.video}?autoplay=0&mute=0`}
                title={`${r.name} review video`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            {/* Header always at top */}
            <CardHeader className="flex-none">
              <CardTitle className="text-lg">{r.name}</CardTitle>
              <p className="text-sm text-gray-500">{r.date}</p>
            </CardHeader>

            {/* Content stays at bottom */}
            <CardContent className="flex-1 flex items-end">
              <p className="text-gray-700 leading-relaxed">{r.review}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
