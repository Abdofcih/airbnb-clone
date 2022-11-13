import Image from "next/image";
const SmallCard = ({ img, location, distance }) => {
  return (
    <article className="flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transform transition duration-150 ease-out">
      {/* Left */}
      <div className="relative h-16 w-16">
        <Image src={img} alt={location} layout="fill" className="rounded-lg" />
      </div>
      {/* Right */}
      <div>
        <h2 className="text-lg">{location}</h2>
        <h3 className="text-gray-500">{distance}</h3>
      </div>
    </article>
  );
};

export default SmallCard;
