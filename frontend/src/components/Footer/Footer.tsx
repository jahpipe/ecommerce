import { Button } from "@/components/ui/button";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10 border-b border-gray-700 pb-12">
        {/* Newsletter */}
        <div>
          <h3 className="text-white text-2xl font-semibold mb-6">Subscribe</h3>
          <p className="mb-6 text-gray-400">
            Join our newsletter to get the latest updates and offers.
          </p>
          <div className="flex max-w-xs">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-grow rounded-l-md px-4 py-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
            <Button className="rounded-r-md px-4 bg-pink-600 hover:bg-pink-700 transition">
              Subscribe
            </Button>
          </div>
        </div>

        {/* Company */}
        <div>
          <h4 className="text-white font-semibold text-xl mb-6">Company</h4>
          <ul className="space-y-3">
            <li>
              <a
                href="#"
                className="hover:text-pink-600 transition-colors"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-pink-600 transition-colors"
              >
                Careers
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-pink-600 transition-colors"
              >
                Press
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-pink-600 transition-colors"
              >
                Blog
              </a>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="text-white font-semibold text-xl mb-6">Support</h4>
          <ul className="space-y-3">
            <li>
              <a
                href="#"
                className="hover:text-pink-600 transition-colors"
              >
                Help Center
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-pink-600 transition-colors"
              >
                FAQ
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-pink-600 transition-colors"
              >
                Contact Us
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-pink-600 transition-colors"
              >
                Terms of Service
              </a>
            </li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h4 className="text-white font-semibold text-xl mb-6">Follow Us</h4>
          <div className="flex space-x-6 mb-6">
            <a href="#" aria-label="Facebook" className="hover:text-pink-600 transition-colors">
              <Facebook size={24} />
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-pink-600 transition-colors">
              <Twitter size={24} />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-pink-600 transition-colors">
              <Instagram size={24} />
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-pink-600 transition-colors">
              <Linkedin size={24} />
            </a>
          </div>
          <p className="text-gray-400 text-sm max-w-xs">
            &quot;Delivering quality products with excellent customer service.&quot;
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm px-6">
        <p>© 2025 MORENO SHOP. All rights reserved.</p>
        <div className="space-x-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-pink-600 transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-pink-600 transition-colors">
            Cookie Policy 
          </a>
          <a href="#" className="hover:text-pink-600 transition-colors">
            Accessibility
          </a>
        </div>
      </div>
    </footer>
  );
}
