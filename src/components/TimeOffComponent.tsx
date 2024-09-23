import { FiCalendar, FiClock, FiChevronDown, FiFlag } from "react-icons/fi";
import { CiMedicalCross } from "react-icons/ci";
import { PiMountains } from "react-icons/pi";
import { AiOutlineFieldTime } from "react-icons/ai";

const TimeOffComponent = () => {
  return (
    <div className="bg-white rounded-b-lg shadow p-1 md:p-6">
      <div className="mt-6">
        <div className="flex items-center max-[425px]:flex-col flex-row justify-between mb-6 pb-3 border-b-2 border-gray-300">
          <div className="flex items-center">
            <div className="flex items-center max-sm:hidden">
              <FiCalendar className="mr-2 h-5 w-5 text-gray-400" />
              <h2 className="text-xl font-semibold text-gray-900">Time Off</h2>
            </div>
          </div>
          <div className="flex items-end gap-2 mx-2 flex-col md:flex-row md:gap-4">
            <div className="gap-2 flex">
              <span className="text-sm">Accrual Level Start Date</span>
              <span className="text-sm text-blue-200">03/09/2020</span>
            </div>
            <div>
              <button className="rounded-md border border-black text-sm p-2 hover:bg-gray-100">
                Add Time Off Policy
              </button>
            </div>
          </div>
        </div>

        <div className="flex justify-center flex-col mb-6 space-y-6 md:space-y-0 md:flex-row md:justify-center">
          {/* Sick Time */}
          <div className="text-center  w-[80%] md:w-56 mx-auto">
            <div className="bg-gray-100 p-4 rounded-lg text-black mb-2">
              <h3 className="text-lg font-semibold">Sick</h3>
              <div className="text-3xl font-bold flex gap-1 items-center justify-center">
                <CiMedicalCross />
                <h2> 3</h2>
              </div>
              <p className="text-sm text-gray-500">Days Available</p>
              <p className="text-xs text-gray-400 mt-2">1 day scheduled</p>
            </div>
            <p className="text-xs text-gray-400">Sick Full-Time</p>
          </div>

          {/* Annual Leave */}
          <div className="text-center w-[80%] md:w-56 mx-auto">
            <div className="bg-gray-100 p-6 rounded-lg text-black mb-2">
              <h3 className="text-lg font-semibold">Annual Leave</h3>
              <div className="text-3xl font-bold flex  gap-1 items-center justify-center">
                <PiMountains />
                <h2> 10.3</h2>
              </div>
              <p className="text-sm text-gray-500">Days Available</p>
              <p className="text-xs text-gray-400 mt-2"></p>
            </div>
            <p className="text-xs text-gray-400">Holiday Full-Time</p>
          </div>

          {/* Comp/In Lieu Time */}
          <div className="text-center w-[80%] md:w-56 mx-auto">
            <div className="bg-gray-100 p-6 rounded-lg text-black mb-2">
              <h3 className="text-lg font-semibold">Comp/In Lieu Time</h3>
              <div className="text-3xl font-bold flex  gap-1 items-center justify-center">
                <AiOutlineFieldTime />
                <h2> 0</h2>
              </div>
              <p className="text-sm text-gray-500">Human (used/YTD)</p>
              <p className="text-xs text-gray-400 mt-2"></p>
            </div>
            <p className="text-xs text-gray-400">
              Comp/In Lieu Time Flexible Policy
            </p>
          </div>
        </div>

        {/* Upcoming Time Off */}
        <div className="mb-6">
          <div className="flex items-center text-gray-400 border-b-2 border-gray-400 py-2">
            <FiClock className="mr-2 h-5 w-5 text-gray-400" />
            <span className="text-sm font-semibold">Upcoming Time Off</span>
          </div>
          <div className="flex items-start py-5 border-b-2 border-gray-400">
            <CiMedicalCross className="mr-2" size={40} />
            <div className="flex flex-col ml-2">
              <span className="text-sm">Jan 27</span>
              <div className="flex items-center">
                <span className="h-2 w-2 bg-black rounded-full mr-1"></span>
                <span className="text-xs text-gray-500">1 day of stock</span>
              </div>
            </div>
          </div>
          <div className="flex items-start py-5 border-b-2 border-gray-400">
            <FiFlag className="mr-2" size={40} />
            <div className="flex flex-col ml-2">
              <span className="text-sm">July 4</span>
              <div className="flex items-center">
                <span className="text-xs text-gray-500">Independence Day</span>
              </div>
            </div>
          </div>
        </div>

        {/* History Section */}
        <div className="mb-4">
          <div className="flex items-center mb-2">
            <FiClock className="mr-2 h-5 w-5 text-gray-400" />
            <span className="text-lg font-semibold">History</span>
          </div>
          <div className="flex justify-between items-center space-y-2 md:space-y-0">
            <div className="flex gap-5">
              <button className="flex h-9 items-center justify-between w-full md:w-[180px] px-3 py-2 border border-input text-sm text-black shadow-sm rounded-md bg-transparent focus:ring-1 focus:ring-ring">
                <span>Sick</span>
                <FiChevronDown className="h-4 w-4" />
              </button>
              <button className="flex h-9 items-center justify-between w-full md:w-[180px] px-3 py-2 border border-input text-sm text-black shadow-sm rounded-md bg-transparent focus:ring-1 focus:ring-ring">
                <span>All</span>
                <FiChevronDown className="h-4 w-4" />
              </button>
            </div>
            <button className="flex h-9 items-center justify-between w-full md:w-[180px] px-3 py-2 border border-input text-sm text-black shadow-sm rounded-md bg-transparent focus:ring-1 focus:ring-ring">
              <span>Balance History</span>
              <FiChevronDown className="h-4 w-4" />
            </button>
          </div>
        </div>

       {/* Table */}
<div className="overflow-x-auto">
  <table className="min-w-full text-sm text-black">
    <thead className="bg-[#DAE6F2]">
      <tr className="border-b transition-colors hover:bg-gray-200">
        <th className="px-2 py-2 text-left">
          Date <span className="inline-block align-middle">&#x2193;</span>
        </th>
        <th className="px-2 py-2 text-left">Description</th>
        <th className="px-2 py-2 text-left">Used Days (-)</th>
        <th className="px-2 py-2 text-left">Earned Days (+)</th>
        <th className="px-2 py-2 text-left">Balance</th>
      </tr>
    </thead>
    <tbody>
      {[...Array(6)].map((_, index) => {
        const usedDays = (index === 1 || index === 4) ? -6 : '';
        return (
          <tr key={index} className="border-b-2 border-gray-400">
            <td className="px-2 py-2">23/05/2024</td>
            <td className="px-2 py-2">
              Accrual for 23/05/2024 to 20/11/2024
            </td>
            <td className="px-2 py-2">{usedDays}</td>
            <td className="px-2 py-2">3.00</td>
            <td className="px-2 py-2">3.00</td>
          </tr>
        );
      })}
    </tbody>
  </table>
</div>

      </div>
    </div>
  );
};

export default TimeOffComponent;
