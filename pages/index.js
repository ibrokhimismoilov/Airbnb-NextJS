import Head from 'next/head';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import Header from '../components/Header';
import LargeCard from '../components/LargeCard';
import MediumCard from '../components/MediumCard';
import SmallCard from '../components/SmallCard';

export async function getStaticProps() {
  const exploreData = await fetch('https://links.papareact.com/pyp').then(res => res.json());
  const cardsData = await fetch('https://links.papareact.com/zp1').then(res => res.json());
  return {
    props: { exploreData, cardsData }
  }
}

export default function Home({ exploreData, cardsData }) {
  return (
    <div className="">
      <Head>
        <title>Ibrokhim | Airbnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Banner />

      <main className='max-w-6xl mx-auto px-3'>

        <section className='pt-6'>
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {exploreData && exploreData.map((item, i) => (
              <SmallCard key={i} {...item} />
            ))}

          </div>
        </section>

        <section className='pt-6'>
          <h2 className="text-4xl font-semibold pb-5">Live Anyware</h2>
          <di className="flex space-x-3 overflow-x-auto scrollbar-hide p-3 -ml-3">
            {cardsData && cardsData.map((item, i) => (
              <MediumCard key={i} {...item} />
            ))}
          </di>
        </section>

        <LargeCard
          img="https://links.papareact.com/4cj"
          title="the Greatest Outdoors"
          description="Wishlists curated by Airbnb"
          buttonText="Get Inspired"
        />

      </main>

      <Footer />
    </div>
  )
}
