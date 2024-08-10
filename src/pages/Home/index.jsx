import Header from "./Header";
import CarouselSection from "./Sections/CarouselSection";
import FondasSection from "./Sections/FondasSection";
import Footer from "./Sections/Footer";
import ManCustomerSection from './Sections/ManCustomerSection/index';
import MejoresSection from './Sections/MejoresSection/index';
import ChefFemaleSection from './Sections/ChefFemaleSection/index';

export default function Home() {
  return (
    <>
      <Header />
      <CarouselSection />
      <FondasSection />
      <ManCustomerSection />
      <MejoresSection />
      <ChefFemaleSection />
      <Footer />
    </>
  )
}