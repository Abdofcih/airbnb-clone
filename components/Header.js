import Image from "next/image";
import {
  GlobeAltIcon,
  UserCircleIcon,
  UsersIcon
} from "@heroicons/react/24/solid";
import SearchIcon from "./icons/Search";
import MenuIcon from "./icons/MenuIcon";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
      {/* left section */}
      <div className="relative flex items-center h-10 cursor-pointer my-auto">
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
          type="text"
          className="bg-transparent outline-none flex-grow text-gray-600 placeholder-gray-400"
          placeholder="Start your search"
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
    </header>
  );
};

export default Header;
