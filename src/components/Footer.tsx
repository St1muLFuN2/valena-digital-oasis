
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = ({ variant = "default" }: { variant?: "default" | "festival" }) => {
  const bgClass = variant === "festival" ? "bg-gradient-to-r from-yellow-100 to-blue-300" : "bg-black border-t border-gray-800";
  const textClass = variant === "festival" ? "text-black" : "text-white";

  return (
    <footer className={`${bgClass} py-12`}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link to="/" className={`text-3xl font-bold ${variant === "festival" ? "text-black" : "text-valena"}`}>
              VALENA
            </Link>
            <p className={`mt-4 ${textClass} max-w-md`}>
              Premier entertainment organization in RoCitizens, delivering unforgettable experiences through innovation and creativity.
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="#" className={`${textClass} hover:text-valena transition-colors`}>
                <Facebook size={20} />
              </a>
              <a href="#" className={`${textClass} hover:text-valena transition-colors`}>
                <Instagram size={20} />
              </a>
              <a href="#" className={`${textClass} hover:text-valena transition-colors`}>
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className={`text-lg font-semibold mb-4 ${textClass}`}>Navigation</h3>
            <ul className={`${textClass} space-y-2`}>
              <li><Link to="/" className="hover:text-valena transition-colors">Home</Link></li>
              <li><Link to="/festival" className="hover:text-valena transition-colors">Festival</Link></li>
              <li><a href="#" className="hover:text-valena transition-colors">Events</a></li>
              <li><a href="#" className="hover:text-valena transition-colors">About</a></li>
            </ul>
          </div>

          <div>
            <h3 className={`text-lg font-semibold mb-4 ${textClass}`}>Contact</h3>
            <ul className={`${textClass} space-y-2`}>
              <li>RoCitizens</li>
              <li>Email: info@valena.ro</li>
              <li>Phone: +123-456-7890</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <p className={`text-center ${textClass} text-sm`}>
            © {new Date().getFullYear()} Valena Entertainment. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
