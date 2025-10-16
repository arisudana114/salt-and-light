import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-white shadow-sm py-4 flex justify-center items-center">
      <div className="relative w-16 h-16 md:w-24 md:h-24">
        <Link href="/">
          <Image
            src="/saltandlight.png"
            alt="Salt and Light Logo"
            fill
            className="object-contain"
            priority
          />
        </Link>
      </div>
    </nav>
  );
}
