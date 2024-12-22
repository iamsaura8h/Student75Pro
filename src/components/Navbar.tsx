import { useState } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="flex justify-between items-center w-screen px-8 py-2 bg-white shadow-md">
        <div className="font-bold font-montserrat text-3xl text-green-600">Student75</div>

        <nav className="relative">
          {/* Hamburger Menu for mobile */}
          <button
            className="lg:hidden text-3xl"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            ☰
          </button>

          {/* Desktop Navbar */}
          <ul className={`flex gap-16 mr-16 text-md lg:flex ${isMenuOpen ? "absolute top-16 right-8 bg-white shadow-md p-4" : "block"}`}>
            <li className="hover:text-green-600 cursor-pointer">Roadmaps</li>
            <li className="hover:text-green-600 cursor-pointer">DSA</li>
            <li className="hover:text-green-600 cursor-pointer">Development</li>
            <li className="hover:text-green-600 cursor-pointer">Contact</li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
