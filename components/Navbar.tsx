import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-white shadow-sm py-4 flex justify-center items-center">
      <div className="relative w-20 h-20 md:w-32 md:h-32">
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
