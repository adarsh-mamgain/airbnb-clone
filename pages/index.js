import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Main from "../components/Main";

// todo: add the circular font
// todo: make the site responsive
export default function Home() {
  return (
    <div>
      <Head>
        <title>Holiday Homes & Apartment Rentals - Airbnb - Airbnb</title>
        <meta
          name="description"
          content="Holiday Homes & Apartment Rentals - Airbnb - Airbnb"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Main />
      <Footer />
    </div>
  );
}
