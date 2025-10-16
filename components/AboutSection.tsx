import Image from "next/image";
import { Roboto, Noto_Serif_Display } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});
const italiana = Noto_Serif_Display({ subsets: ["latin"], weight: ["400"] });

export default function AboutSection() {
  return (
    <section
      id="about"
      className={`${roboto.className} w-full py-20 px-6 md:px-12 bg-[#f5f3e6]/50 text-gray-900`}
    >
      <div className="max-w-6xl px-2 mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start md:min-h-[640px]">
        {/* Left column */}
        <div className="flex flex-col justify-between self-end h-full">
          <div className="self-start">
            <h2 className="text-4xl md:text-6xl lg:text-6xl mb-6 font-bold">
              ABOUT <br />{" "}
              <span
                className={`${italiana.className} text-6xl md:text-5xl lg:text-7xl`}
              >
                Salt & Light
              </span>
            </h2>
          </div>
          <hr className="border-t border-black my-12 w-1/2" />

          <p className="leading-relaxed text-gray-800 mb-4">
            For more than eight years, Salt & Light has been part of countless
            moments that matter — from heartfelt private gatherings to inspiring
            corporate events and brand activations. We believe every occasion
            holds the power to move people, to connect hearts, and to leave a
            positive mark that lasts. That belief is what drives us to work with
            sincerity, creativity, and purpose in every event we design.
          </p>
          <p className="leading-relaxed text-gray-800">
            True to our name, Salt & Light exists to bring flavor and
            illumination wherever we go — like salt that brings taste even in
            small amounts, and light that shines through the darkest space. We
            see every project as an opportunity to create meaning, to spark
            inspiration, and to make something beautiful that carries impact
            beyond the day of the event itself.
          </p>
        </div>

        {/* Right column */}
        <div className="self-end">
          <Image
            src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470"
            alt="Event planning"
            width={600}
            height={400}
            className="mb-6 object-cover w-full"
          />
          <p className="leading-relaxed text-gray-800">
            With a team of passionate creators, planners, and dreamers, we don’t
            just organize and decorate events — we craft experiences that touch
            hearts. From design and execution to every fine detail, we work
            wholeheartedly to turn ideas into moments that inspire, uplift, and
            leave a trail of light for everyone who experiences them.
          </p>
        </div>
      </div>
    </section>
  );
}
