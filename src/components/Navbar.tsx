
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';

const Navbar = ({ variant = "default" }: { variant?: "default" | "festival" }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const bgClass = variant === "festival" 
    ? (scrolled ? "bg-black/80 backdrop-blur-md" : "bg-transparent") 
    : (scrolled ? "bg-black/80 backdrop-blur-md" : "bg-black");

  const textClass = variant === "festival" ? "text-black" : "text-white";
  const logoClass = variant === "festival" ? "text-black" : "text-valena";

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${bgClass}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between py-4">
          <Link to="/" className={`text-2xl md:text-3xl font-orbitron font-bold ${logoClass}`}>
            VALENA
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link 
              to="/" 
              className={`${variant === "default" ? "text-white" : "text-black"} hover:text-valena transition-colors duration-300`}
            >
              Home
            </Link>
            <Link 
              to="/festival" 
              className={`${variant === "festival" ? "text-white" : "text-white"} hover:text-valena transition-colors duration-300`}
            >
              Festival
            </Link>
            <Button 
              className={`${variant === "festival" ? "bg-black text-white hover:bg-gray-800" : "bg-valena hover:bg-valena-dark text-white"}`}
            >
              Connect
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white" onClick={toggleMenu}>
            <Menu size={24} />
          </button>
        </div>

        {/* Mobile Navigation */}
        {menuOpen && (
          <div className="md:hidden py-4 border-t border-gray-800">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="text-white hover:text-valena transition-colors duration-300"
                onClick={() => setMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/festival" 
                className="text-white hover:text-valena transition-colors duration-300"
                onClick={() => setMenuOpen(false)}
              >
                Festival
              </Link>
              <Button 
                className={`${variant === "festival" ? "bg-black text-white w-full" : "bg-valena hover:bg-valena-dark text-white w-full"}`}
                onClick={() => setMenuOpen(false)}
              >
                Connect
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
