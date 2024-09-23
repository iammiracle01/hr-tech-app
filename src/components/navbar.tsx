import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FaSearch,
  FaBars,
  FaTimes,
  FaSignOutAlt,
  FaRegBell,
} from "react-icons/fa";
import { TiCogOutline } from "react-icons/ti";
import { MdHelpOutline } from "react-icons/md";
import NavLinks from "./navLinks";

interface Profile {
  avatar: string;
  name: string;
}

interface HeaderProps {
  profile: Profile | null;
  onLogout: () => void;
}

const Navbar = ({ profile, onLogout }: HeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleSearchModal = () => {
    setIsSearchModalOpen(!isSearchModalOpen);
  };

  return (
    <nav className="sticky top-0 z-50 bg-gray-100 text-black px-2 lg:px-5">
      <div className="w-full flex items-center justify-between py-2 lg:py-0 lg:pt-3">
        {/* Logo (Always on the left) */}
        <Link href="/">
          <h1 className="text-lg lg:text-xl font-semibold">HarmonyHR</h1>
        </Link>

        {/* Desktop Nav (Hidden on small screens) */}
        <div className="hidden xl:flex items-center gap-2">
          <NavLinks />
        </div>

        {/* Mobile Layout (Search, Hamburger, Profile, Logout) */}
        <div className="flex items-center gap-4 xl:hidden">
          {/* Search Icon (Only for small screens) */}
          <button
            onClick={toggleSearchModal}
            className="p-2 border text-sm border-gray-700 rounded-lg hover:bg-gray-200"
            title="Search">
            <FaSearch />
          </button>

          {/* Hamburger Icon (Only for small screens) */}
          <button className="p-2 text-sm" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>

          {/* Profile Image (Only for small screens) */}
          <Image
            src={profile?.avatar || "/placeholder.png"}
            alt="Profile"
            width={30}
            height={30}
            className="rounded-full"
          />

          {/* Logout Icon (Only for small screens) */}
          <button
            onClick={onLogout}
            className="p-2 rounded-md hover:scale-105 bg-red-600 hover:text-gray-100 text-white transition-colors duration-300 ease-in-out text-sm"
            title="Logout">
            <FaSignOutAlt size={14} />
          </button>
        </div>

        {/* Desktop Icons and Profile (Hidden on small screens) */}
        <div className="hidden xl:flex items-center gap-4">
          {/* Desktop Search Bar */}
          <div className="relative mx-4">
            <FaSearch className="text-sm absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500" />
            <input
              type="text"
              placeholder="Search"
              className="text-sm border border-gray-700 rounded-lg pl-8 pr-2 py-1"
            />
          </div>

          {/* Other Icons (Settings, Help, Notifications) */}
          <button className="p-2 rounded hover:bg-gray-200" title="Settings">
          <TiCogOutline size={20} />
          </button>
          <button className="p-2 rounded hover:bg-gray-200" title="Help">
          <MdHelpOutline size={20}/>
          </button>
          <button
            className="p-2 rounded hover:bg-gray-200"
            title="Notifications">
            <FaRegBell size={20}/>
          </button>

          {/* Profile Image */}
          <Image
            src={profile?.avatar || "/placeholder.png"}
            alt="Profile"
            width={30}
            height={30}
            className="rounded-full ml-4"
          />

          {/* Logout Button Icon */}
          <button
            onClick={onLogout}
            className="flex items-center gap-2 px-2 py-1 rounded-lg ml-4 hover:scale-105 bg-red-600 hover:text-gray-100 text-white transition-colors duration-300 ease-in-out"
            title="Logout">
            <FaSignOutAlt size={18} />
            <span className="hidden lg:inline font-medium">Logout</span>
          </button>
        </div>
      </div>

      {/* Search Modal for Mobile */}
      <div
        className={`fixed top-0 left-0 right-0 z-50 bg-gray-100 p-3 flex items-center ${
          isSearchModalOpen ? "block" : "hidden"
        } lg:hidden`}
      >
        <div className="relative w-3/4 mx-auto">
          <input
            type="text"
            placeholder="Search"
            className="w-full text-sm border border-gray-700 rounded-lg px-4 py-1"
          />
          <FaSearch className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer" />
        </div>
        <button
          onClick={toggleSearchModal}
          className="ml-2 p-2 text-gray-500"
          title="Close Search">
          <FaTimes />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 bg-gray-100 p-6 w-1/2 h-full transform ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out lg:hidden z-50 shadow-lg flex flex-col items-center justify-between`}>
        {/* Close Icon */}
        <div className="flex justify-end w-full">
          <button className="p-2" onClick={toggleMobileMenu}>
            <FaTimes size={24} />
          </button>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col items-center w-full">
          <NavLinks />
        </div>

        {/* Icons in the Mobile Menu */}
        <div className="flex flex-col items-center space-y-4 mb-6">
          <button
            className="flex items-center space-x-2 p-2 rounded hover:bg-gray-200"
            title="Settings">
            <TiCogOutline />
            <span>Settings</span>
          </button>
          <button
            className="flex items-center space-x-2 p-2 rounded hover:bg-gray-200"
            title="Help">
            <MdHelpOutline />
            <span>Help</span>
          </button>
          <button
            className="flex items-center space-x-2 p-2 rounded hover:bg-gray-200"
            title="Notifications">
            <FaRegBell />
            <span>Notifications</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
