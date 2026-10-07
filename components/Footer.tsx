export default function Footer() {
  return (
    <footer className="bg-navy text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-4">Tails & Trails</h3>
            <p className="text-gray-300 mb-4">
              Professional pet care services across Essex. Treat every pet like family.
            </p>
            <div className="space-y-2 text-gray-300">
              <p>📧 hello@essex-tailsandtrails.com</p>
              <p>📱 +44 (0) 123 456 7890</p>
              <p>📍 Essex, UK</p>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#home" className="hover:text-white transition">Home</a></li>
              <li><a href="#services" className="hover:text-white transition">Services</a></li>
              <li><a href="#pricing" className="hover:text-white transition">Pricing</a></li>
              <li><a href="#booking" className="hover:text-white transition">Booking</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-4">Follow Us</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white transition">Instagram</a></li>
              <li><a href="#" className="hover:text-white transition">Facebook</a></li>
              <li><a href="#" className="hover:text-white transition">TikTok</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>&copy; 2026 Tails & Trails. All rights reserved. | Essex-based pet care specialists</p>
        </div>
      </div>
    </footer>
  );
}
