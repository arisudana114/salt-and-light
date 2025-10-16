import Image from "next/image";
import { Roboto, Noto_Serif_Display } from "next/font/google";
import Link from "next/link";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});
const italiana = Noto_Serif_Display({ subsets: ["latin"], weight: ["400"] });

export default function HeroSection() {
  const images = [
    "https://images.unsplash.com/photo-1651313947982-59d4049e5834?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1374",
    "https://images.unsplash.com/photo-1738069092808-3790993bb36b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
    "https://images.unsplash.com/photo-1627239760089-9b3a54d800aa?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=735",
    "https://images.unsplash.com/photo-1606050580496-f8f32a21afea?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1468",
  ];

  const hover_texts = ["EVENT ORGANIZER", "DECORATION", "CRAFT", "WORKSHOP"];

  return (
    <section className="w-full text-center px-4 py-10 flex flex-col items-center mb-4">
      {/* Title */}
      <h1 className={`${italiana.className} text-6xl md:text-8xl mb-2`}>
        Salt & Light
      </h1>
      <h2
        className={`${roboto.className} italic text-lg md:text-xl text-gray-600 mb-9 mt-2`}
      >
        From vision to celebration, <br className="md:hidden" />{" "}
        <span className="hidden md:inline"> </span>
        we help you make it happen.
      </h2>

      {/* 2x2 Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-4xl mb-12">
        {images.map((src, i) => (
          <div
            key={i}
            className="relative overflow-hidden w-full aspect-[4/3] min-h-[160px] group cursor-pointer"
          >
            <Link href="#portofolio" className="block w-full h-full">
              <Image
                src={src}
                alt={`Hero Image ${i}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="bg-black/50 text-white text-lg font-medium px-3 py-1 md:text-4xl tracking-wide lg:font-semibold lg:px-0 lg:py-0 w-full h-1/4 flex flex-col justify-center">
                  {hover_texts[i]}
                </span>
              </div>
            </Link>
          </div>
        ))}
      </div>

      {/* Buttons */}
      <div className="flex gap-12 md:gap-60 text-sm md:text-lg">
        <Link
          href="/portofolio"
          className="px-6 py-2 border rounded-full border-gray-800 text-gray-800 bg-transparent hover:bg-[#f5f3e6] hover:text-black hover:border-black transition cursor-pointer"
        >
          Our Work
        </Link>
        <Link
          href="https://wa.me/6285775943846?text=Hey%20I%20came%20from%20your%20website%2C%20I%20would%20like%20to%20organize%20an%20event!"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-2 border rounded-full border-gray-800 text-gray-800 bg-transparent hover:bg-[#f5f3e6] hover:text-black hover:border-black transition cursor-pointer"
        >
          Contact Us
        </Link>
      </div>
    </section>
  );
}
