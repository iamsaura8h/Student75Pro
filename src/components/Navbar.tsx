import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'Roadmaps', href: 'roadmaps' },
    { label: 'DSA', href: 'dsa' },
    { label: 'Development', href: 'development' },
    { label: 'About', id: 'about_view' }
  ];

  const handleScroll = (id: string) => {
    const targetView = document.getElementById(id.toLowerCase());
    if (targetView) {
      targetView.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className="fixed top-0 w-full bg-white shadow-md py-2 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <a href="/" className="flex items-center">
              <span className="font-bold font-montserrat text-2xl sm:text-3xl text-green-600">
                Student75
              </span>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => {
                    if (item.id) {
                      e.preventDefault(); // Prevent navigation
                      handleScroll(item.id); // Trigger scroll
                    }
                  }}
                  className="text-gray-700 cursor-pointer hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-gray-700 hover:text-green-600"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden absolute left-0 right-0 top-full bg-white shadow-lg border-t">
              <nav className="flex flex-col max-w-7xl mx-auto">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="text-gray-700 hover:text-green-600 hover:bg-gray-50 px-4 py-3 text-base font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>
          )}
        </div>
      </header>
      {/* Spacer to prevent content from hiding under the fixed navbar */}
      <div className="h-16"></div>
    </>
  );
};

export default Navbar;
