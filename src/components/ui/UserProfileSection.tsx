import { FaCog, FaChevronDown, FaEllipsisV, FaBars } from "react-icons/fa";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Profile {
  avatar: string;
  name: string;
}

interface HeaderProps {
  profile: Profile | null;
}

const UserProfileSection = ({ profile }: HeaderProps) => {
  const [isSmallScreenMenuOpen, setIsSmallScreenMenuOpen] = useState(false);
  const [isNavMenuOpen, setIsNavMenuOpen] = useState(false);

  const toggleSmallScreenMenu = () => {
    setIsSmallScreenMenuOpen(!isSmallScreenMenuOpen);
  };

  const toggleNavMenu = () => {
    setIsNavMenuOpen(!isNavMenuOpen);
  };

  const pathname = usePathname();

  const links = [
    { name: "Personal", href: "#" },
    { name: "Job", href: "#" },
    { name: "Time Off", href: "/my-info/time-off" },
    { name: "Emergency", href: "#" },
    { name: "Documents", href: "#" },
    { name: "Benefits", href: "#" },
    { name: "Training", href: "#" },
    { name: "Assets", href: "#" },
  ];

  return (
    <section className="w-full bg-[#DAE6F2]">
      <div className="mx-auto max-w-7xl px-4 lg:px-6 pt-3">
        <div className="flex items-start">
          {/* Profile Picture */}
          <div className="lg:w-64 flex items-center justify-center">
            <div className="relative flex shrink-0 overflow-hidden rounded-full h-16 w-16 md:h-24 md:w-24 lg:w-32 lg:h-32">
              <Image
                src={profile?.avatar || "/placeholder.png"}
                alt="User Avatar"
                className="aspect-square h-full w-full"
                fill={true}
              />
            </div>
          </div>

          {/* Name, Action Buttons, and Navigation Links */}
          <div className="flex flex-col justify-center lg:justify-end h-16 md:h-24 lg:h-32 gap-4 w-full ml-6">
            {/* Name and Action Buttons */}
            <div className="flex justify-between items-center">
              <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 px-2">
                {profile?.name || "User"}
              </h1>
              <div className="hidden lg:flex gap-5">
                <button className="flex items-center rounded-md text-sm border hover:bg-white shadow-sm p-2 text-black border-gray-400">
                  Request a Change
                  <FaChevronDown className="ml-2" />
                </button>
                <button
                  className="flex items-center rounded-md text-sm border hover:bg-white shadow-sm p-2 text-black border-gray-400"
                  title="settings"
                >
                  <FaCog className="mr-2" />
                  <FaChevronDown className="ml-2" />
                </button>
              </div>

              {/* Small screen icons */}
              <div className="lg:hidden flex items-center space-x-2 relative">
                <button
                  onClick={toggleSmallScreenMenu}
                  className="flex items-center rounded-md text-sm p-2 text-black"
                  aria-label="Open menu"
                >
                  <FaEllipsisV className="text-sm md:text-lg" />
                </button>

                <button
                  onClick={toggleNavMenu}
                  className="flex items-center rounded-md text-sm p-2 text-black"
                  aria-label="Toggle navigation"
                >
                  <FaBars className="text-sm md:text-lg" />
                </button>
              </div>
            </div>

            {/* Navigation Links (Below Name) */}
            <nav className="hidden lg:flex lg:space-x-6 xl:space-x-8 mt-2">
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`border-transparent hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-2 rounded-sm text-[12px] sm:text-[14px] font-medium whitespace-nowrap ${
                    pathname.startsWith(link.href) ? "bg-white" : ""
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="relative">
                <button className="flex items-center rounded-md border bg-transparent p-2 text-sm shadow-sm text-gray-700">
                  <span>More</span>
                  <FaChevronDown className="ml-2" />
                </button>
              </div>
            </nav>
          </div>
        </div>

        {/* Small Screen Dropdown Navigation */}
        {isSmallScreenMenuOpen && (
          <div className="mt-2 w-48 bg-white shadow-lg rounded-md py-2 z-10 absolute right-0 lg:hidden">
            <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
              Request a Change
            </button>
            <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
              Settings
            </button>
          </div>
        )}

        {/* Small Screen Navigation Links */}
        {isNavMenuOpen && (
          <nav className="lg:hidden bg-white shadow-lg rounded-lg p-4 w-1/2 absolute right-0 mt-2">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`block text-gray-700 p-2 text-sm hover:bg-gray-100 rounded ${
                  pathname.startsWith(link.href) ? "bg-gray-200" : ""
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="relative">
              <button className="w-full text-left text-gray-700 p-2 text-sm hover:bg-gray-100 rounded">
                More <FaChevronDown className="inline-block ml-2" />
              </button>
            </div>
          </nav>
        )}
      </div>
    </section>
  );
};

export default UserProfileSection;
