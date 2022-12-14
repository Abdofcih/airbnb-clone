import Head from "next/head";
import Header from "../components/Header";
import Banner from "../components/Banner";
import SmallCard from "../components/SmallCard";
import MediumCard from "../components/MediumCard";
import LargeCard from "../components/LargeCard";
import Footer from "../components/Footer";

export default function Home({ exploreData, cardsData }) {
  return (
    <div className="">
      <Head>
        <title>Airbnb Clone</title>
        <meta name="description" content="Airbnb clone with nextjs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Header bar */}
      <Header />
      {/* Banner  */}
      <Banner />
      <main className="max-w-6xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold">Explore Nearby</h2>
          {/*                  mobile first                            */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {/* Get some data form the server - API endpoint */}
            {exploreData?.map((item, i) => <SmallCard key={i} {...item} />)}
          </div>
        </section>
        <section className="pt-6">
          <h2 className="text-4xl font-semibold">Live anywhere</h2>
          <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3">
            {cardsData?.map((item, i) => <MediumCard key={i} {...item} />)}
          </div>
        </section>
        <LargeCard
          img="https://links.papareact.com/4cj"
          title="The Greatest Outdoors"
          description="Wishlists curated by Airbnb"
          buttonText="Get Inspired"
        />
      </main>

      <Footer />
    </div>
  );
}

// by being her it tells nextjs that there is server side rendering
export async function getStaticProps() {
  const exploreData = await fetch("https://www.jsonkeeper.com/b/4G1G").then(
    res => res.json()
  );

  const cardsData = await fetch("https://www.jsonkeeper.com/b/VHHT").then(res =>
    res.json()
  );
  return { props: { exploreData, cardsData } };
}
