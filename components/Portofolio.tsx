import Image from "next/image";
import { Roboto, Noto_Serif_Display } from "next/font/google";

const noto = Noto_Serif_Display({ subsets: ["latin"], weight: ["400"] });
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

export default function PortofolioPage() {
  return (
    <section
      className={`${roboto.className} min-h-screen bg-[#f5f3e6]/50 py-20 px-6 md:px-12 scroll-mt-24`}
      id="portofolio"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Title */}
        <div className="mb-16 md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            OUR PORTOFOLIO
          </h1>
          <p
            className={`${roboto.className} italic text-gray-700 max-w-2xl mx-auto md:mx-0`}
          >
            From grand celebrations to intimate gatherings — explore the
            artistry, creativity, and passion behind every Salt & Light event.
          </p>
        </div>

        {/* 2x2 Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Grid 1: One big image */}
          <div className="relative w-full aspect-square overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1558008258-3256797b43f3?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1631"
              alt="Main Event"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Grid 2: 2x2 nested grid (2 images + 2 videos) */}
          <div className="grid grid-cols-2 grid-rows-2 gap-4">
            <div className="relative aspect-square overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&q=80&w=600"
                alt="Sub Image 1"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="relative aspect-square overflow-hidden">
              <video
                src="https://www.pexels.com/download/video/3122106/"
                controls
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative aspect-square overflow-hidden">
              <video
                src="https://www.pexels.com/download/video/3066450/"
                controls
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative aspect-square overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?auto=format&fit=crop&q=80&w=600"
                alt="Sub Image 2"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Grid 3: Same as Grid 2 */}
          <div className="grid grid-cols-2 grid-rows-2 gap-4">
            <div className="relative aspect-square overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1511988617509-a57c8a288659?auto=format&fit=crop&q=80&w=600"
                alt="Sub Image 3"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="relative aspect-square overflow-hidden">
              <video
                src="https://www.pexels.com/download/video/3975494/"
                controls
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative aspect-square overflow-hidden">
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="YouTube video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full object-cover"
              ></iframe>
            </div>
            <div className="relative aspect-square overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&q=80&w=600"
                alt="Sub Image 4"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Grid 4: One big video */}
          <div className="relative w-full aspect-square overflow-hidden">
            <video
              src="https://www.pexels.com/download/video/2317031/"
              controls
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
