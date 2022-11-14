import Image from "next/image";

const MediumCard = ({ img, title }) => {
  return (
    <article className="cursor-pointer hover:scale-105 transform transition duration-250 ease-out">
      <div className="relative h-80 w-80">
        <Image src={img} alt={title} layout="fill" className="rounded-xl" />
      </div>
      <h1 className="text-xl font-semibold mt-3">{title}</h1>
    </article>
  );
};

export default MediumCard;
