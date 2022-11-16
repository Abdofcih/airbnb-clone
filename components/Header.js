import { useState } from "react";
import Image from "next/image";
import {
  GlobeAltIcon,
  UserCircleIcon,
  UsersIcon
} from "@heroicons/react/24/solid";
import SearchIcon from "./icons/Search";
import MenuIcon from "./icons/MenuIcon";

import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import { useRouter } from "next/router";

const Header = ({ placeholder }) => {
  const [searchInput, setSearchInput] = useState("");
  const [dateRange, setDateRange] = useState({
    startDate: new Date(),
    endDate: new Date()
  });
  const [numOfGuests, setNumOfGuests] = useState(1);
  const router = useRouter();
  const selectionRange = {
    ...dateRange,
    key: "selection"
  };
  const handleSelect = ranges => {
    const { startDate, endDate } = ranges.selection;
    setDateRange({ startDate, endDate });
    console.log(ranges.selection); // native Date object
  };
  const resetInput = () => {
    setSearchInput("");
  };
  const search = () => {
    router.push({
      pathname: "/search",
      query: {
        location: searchInput,
        numOfGuests,
        startDate: dateRange.startDate.toISOString(),
        endDate: dateRange.endDate.toISOString()
      }
    });
  };
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
      {/* left section */}
      <div
        onClick={() => router.push("/")}
        className="relative flex items-center h-10 cursor-pointer my-auto"
      >
        <Image
          src="http://links.papareact.com/qd3"
          alt="airbnb logo"
          layout="fill" // instead of width - full container width
          objectFit="contain" // don't stretch - keep the aspect ratio
          objectPosition="left"
        />
      </div>
      {/* middle section */}
      <div className="flex justify-between p-2 items-center md:border-2 rounded-full md:shadow-sm">
        <input
          value={searchInput}
          onChange={e => setSearchInput(e.target.value)}
          type="text"
          className="bg-transparent outline-none flex-grow text-gray-600 placeholder-gray-400"
          placeholder={placeholder || "Start your search"}
        />
        <SearchIcon className="hidden  md:inline-flex md:ml-2 h-8 w-8 bg-red-400 text-white rounded-full p-2 cursor-pointer" />
      </div>
      {/* right section */}
      <div className="flex space-x-4 items-center justify-end text-gray-500">
        <p className="hidden md:inline cursor-pointer">Become a host</p>
        <GlobeAltIcon className="h-6 cursor-pointer" />
        <div className="flex  border-2 rounded-full p-2 space-x-2 cursor-pointer">
          <MenuIcon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>
      {searchInput && (
        <div className="felx flex-col col-span-3 mx-auto mt-5">
          <DateRangePicker
            ranges={[selectionRange]}
            onChange={handleSelect}
            minDate={new Date()}
            rangeColors={["#FD5B61"]}
          />
          <div className="flex items-center">
            <h2 className="text-2xl pl-2 flex-grow font-semibold">
              {" "}
              Number of Guests
            </h2>
            <UsersIcon className="h-7" />
            <input
              className="w-12 pl-2 text-lg outline-none text-red-400"
              type="number"
              value={numOfGuests}
              onChange={e => setNumOfGuests(parseInt(e.target.value))}
              id=""
              min={1}
            />
          </div>
          <div className="flex mt-3">
            <button className="flex-grow text-gray-500" onClick={resetInput}>
              Cancel
            </button>
            <button onClick={search} className="flex-grow text-red-400">
              Search
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
export default Header;
