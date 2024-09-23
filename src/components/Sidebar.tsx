import {
  FaPhone,
  FaEnvelope,
  FaLinkedin,
  FaFacebook,
  FaTwitter,
  FaUserCircle,
} from "react-icons/fa";
import { MdWork, MdLocationOn } from "react-icons/md";
import { AiOutlineClockCircle } from "react-icons/ai";
import { BsGlobe } from "react-icons/bs";

export default function Sidebar() {



  return (
    <div className="lg:flex lg:flex-col hidden">

      <div className="ml-4 flex flex-col bg-transparent">
        {/* First block with phone and email */}
        <div className="flex flex-col items-start gap-4 w-56 bg-white shadow rounded-lg p-4">
          <div className="flex gap-2">
            <FaPhone size={20} />
            <p className="text-sm">07911 654321</p>
          </div>
          <div className="flex gap-2">
            <FaEnvelope size={20} />
            <p className="text-sm">alexandra@hitecvision.net</p>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center space-x-4">
            <FaLinkedin size={20} />
            <FaFacebook size={20} />
            <FaTwitter size={20} />
          </div>
        </div>

        {/* Hire date block */}
        <div className="block w-56 bg-white shadow rounded-lg p-6 mt-2">
          <div className="flex items-center">
            <span className="ml-2 text-sm">Hire Date</span>
          </div>
          <div className="mt-3 flex items-center">
            <span className="ml-2 text-sm">Sep. 3, 2020</span>
          </div>
          <div className="mt-2 flex items-center">
            <span className="ml-2 text-sm">3y - 9m - 20d</span>
          </div>
        </div>

        {/* Work info block */}
        <div className="block w-56 bg-white shadow rounded-lg p-6 mt-2">
          <div className="flex items-center">
            <MdWork size={20} />
            <span className="ml-2 text-sm">5</span>
          </div>
          <div className="mt-2 flex items-center">
            <AiOutlineClockCircle size={20} />
            <span className="ml-2 text-sm">Full-Time</span>
          </div>
          <div className="mt-2 flex items-center">
            <MdWork size={20} />
            <span className="ml-2 text-sm">Operations</span>
          </div>
          <div className="mt-2 flex items-center">
            <BsGlobe size={20} />
            <span className="ml-2 text-sm">Europe</span>
          </div>

          <div className="mt-2 flex items-center">
            <MdLocationOn size={20} />
            <span className="ml-2 text-sm">London, UK</span>
          </div>
        </div>

        {/* Direct Reports block */}
        <div className="flex flex-col gap-2 w-56 bg-white shadow rounded-lg p-6 mt-2">
          <span className="text-sm">Direct Reports</span>
          <ul className="flex flex-col gap-2 text-sm">
            <li className="flex items-center">
              <FaUserCircle size={20} className="mr-2" />
              Shane
            </li>
            <li className="flex items-center">
              <FaUserCircle size={20} className="mr-2" />
              Nathan
            </li>
            <li className="flex items-center">
              <FaUserCircle size={20} className="mr-2" />
              Mitchell
            </li>
            <li className="flex items-center">
              <FaUserCircle size={20} className="mr-2" />
              Philip
            </li>
            <li className="flex items-center">
              <FaUserCircle size={20} className="mr-2" />4 More...
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
