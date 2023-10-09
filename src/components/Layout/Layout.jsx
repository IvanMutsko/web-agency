import { Scrollbars } from 'react-custom-scrollbars-2';

import Header from '../Header/Header';
import Hero from '../Hero/Hero';
import WhyUs from '../WhyUs/WhyUs';
import Services from '../Services/Services';
import Portfolio from '../Portfolio/Portfolio';
import ContactUs from '../ContactUs/ContactUs';
import Brief from '../Brief/Brief';
import FAQ from '../FAQ/FAQ';
import Footer from '../Footer/Footer';
import Widget from '../Widget/Widget';

import { Main } from './Layout.styled';

const Layout = () => {
  return (
    <Main>
      <Scrollbars autoHeight autoHeightMin={'100vh'}>
        <Header />
        <Hero />
        <WhyUs />
        <Services />
        <Portfolio />
        <ContactUs />
        <Brief />
        <FAQ />
        <Footer />
        <Widget />
      </Scrollbars>
    </Main>
  );
};

export default Layout;
