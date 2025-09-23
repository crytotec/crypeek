import { useEffect, useRef, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router"; 

function Navbar() {
  const [navbar, setNavbar] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);


  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setNavbar(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleNavbar = () => setNavbar(!navbar);
  const handleLinkClick = () => setNavbar(false);

  return (
    <div className="flex p-2 md:p-3 lg:p-4 w-full mx-auto relative">
      <div onClick={toggleNavbar} className="md:hidden text-white p-4 z-50">
        {navbar ? <FaTimes /> : <FaBars />}
      </div>
      <div className="hidden sm:flex bg-[#191d20] flex-row justify-between p-4 items-center w-full">
        <h1 className="flex items-center relative">
          <span className="bg-yellow-600 rounded-lg">Cry</span>peek
        </h1>
        <div className="flex flex-row items-center gap-5">
          <Link to="/" onClick={handleLinkClick}>
            <p className="hover:bg-yellow-600 hover:rounded-lg hover:text-2xl cursor-pointer hover:p-4">
              Home
            </p>
          </Link>
          <Link to="/about" onClick={handleLinkClick}>
            <p className="hover:bg-yellow-600 hover:rounded-lg hover:text-2xl cursor-pointer hover:p-4">
              About
            </p>
          </Link>
          <Link to="/contact" onClick={handleLinkClick}>
            <p className="hover:bg-yellow-600 hover:rounded-lg hover:text-2xl cursor-pointer hover:p-4">
              Contact
            </p>
          </Link>
        </div>
        <div className="flex flex-row items-center gap-4">
          <h3 className="hover:bg-yellow-600 hover:rounded-lg hover:text-2xl cursor-pointer hover:p-4">
            Login
          </h3>
          <h3 className="bg-yellow-600 rounded-lg hover:text-2xl p-4 my-5 cursor-pointer">
            Try Demo
          </h3>
        </div>
      </div>

      {/* Mobile Menu */}
      {navbar && (
        <div
          ref={menuRef}
          className="flex flex-col fixed z-50 bg-[#191d20] gap-8 mt-10 w-4/5 p-6 md:hidden rounded-r-lg"
        >
          <h1 className="flex items-center relative">
            <span className="bg-yellow-600 rounded-lg">Cry</span>peek
          </h1>
          <Link to="/" onClick={handleLinkClick}>
            <p className="hover:bg-yellow-600 hover:rounded-lg hover:text-2xl cursor-pointer hover:p-4">
              Home
            </p>
          </Link>
          <Link to="/about" onClick={handleLinkClick}>
            <p className="hover:bg-yellow-600 hover:rounded-lg hover:text-2xl cursor-pointer hover:p-4">
              About
            </p>
          </Link>
          <Link to="/contact" onClick={handleLinkClick}>
            <p className="hover:bg-yellow-600 hover:rounded-lg hover:text-2xl cursor-pointer hover:p-4">
              Contact
            </p>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Navbar;
