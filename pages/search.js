import Header from "../components/Header";
import Footer from "../components/Footer";
import { useRouter } from "next/router";
import { format } from "date-fns";
import InfoCard from "../components/InfoCard";
import Map from "../components/Map";
const Search = ({ searchResult }) => {
  const router = useRouter();
  const { location, numOfGuests, startDate, endDate } = router.query;
  const formatedStartDate = format(new Date(startDate), "dd MMMM yy");
  const formatedEndDate = format(new Date(endDate), "dd MMMM yy");
  const range = `${formatedStartDate} - ${formatedEndDate}`;
  return (
    <div>
      <Header placeholder={`${location} | ${range} | ${numOfGuests}`} />
      <main className="flex">
        <section className="flex-grow pt-14 px-6 ">
          <p className="text-xs">
            300+ - {range} - Stays for {numOfGuests} guests
          </p>
          <h1 className="text-3xl font-semibold mt-2 mb-6">
            Stays in {location}
          </h1>
          <div className="flex hidden md:inline-flex space-x-3 mb-5 text-gray-800 whitespace-nowrap">
            <p className="button">Cancelation Flexbility</p>
            <p className="button">Type of place</p>
            <p className="button">Price</p>
            <p></p>
          </div>
          {searchResult?.map((item, i) => <InfoCard key={i} {...item} />)}
        </section>
        <section className="hidden lg:inline-flex xl:min-w-[600px]">
          <Map searchResult={searchResult} />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Search;

export async function getServerSideProps(context) {
  //getServerSideProps
  // use this computations every time the user comes in
  const searchResult = await fetch("https://www.jsonkeeper.com/b/5NPS").then(
    res => res.json()
  );
  return {
    props: {
      searchResult
    }
  };
}
