"use client";

import {
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
  FaFacebookF,
  FaTwitter,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white text-gray-900 py-16 px-6">
      <div className="max-w-6xl px-6 mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Left: Social links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">FOLLOW US</h3>
          <div className="flex space-x-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-700 transition"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-700 transition"
            >
              <FaYoutube size={24} />
            </a>
            <a
              href="https://wa.me/6281234567890?text=Hey%20I%20came%20from%20your%20website%20and%20would%20like%20to%20organize%20an%20event!"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-700 transition"
            >
              <FaWhatsapp size={24} />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-700 transition"
            >
              <FaFacebookF size={24} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-700 transition"
            >
              <FaTwitter size={24} />
            </a>
          </div>
        </div>

        {/* Center: Address and phone */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <p className="text-gray-800 leading-relaxed">
            Salt & Light Event Organizer
            <br />
            Jl. Mawar No. 123, Jakarta, Indonesia
            <br />
            Email: info@saltandlight.co.id
            <br />
          </p>
          <p className="mt-3 text-gray-900">
            Phone:{" "}
            <a href="tel:+622112345678" className="hover:text-white">
              +62 21 1234 5678
            </a>
            <br />
            WhatsApp:{" "}
            <a
              href="https://wa.me/6281234567890"
              className="hover:text-white"
              target="_blank"
            >
              +62 812 3456 7890
            </a>
          </p>
        </div>

        {/* Right: Google Map */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Find Us</h3>
          <div className="w-full h-56 rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.6955238570475!2d106.82664357499173!3d-6.175394293816933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e4bcd5fadb%3A0xf6f1efb8f0ce6f2b!2sJakarta!5e0!3m2!1sen!2sid!4v1700000000000!5m2!1sen!2sid"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Bottom line */}
      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Salt & Light Event Organizer. All rights
        reserved.
      </div>
    </footer>
  );
}
