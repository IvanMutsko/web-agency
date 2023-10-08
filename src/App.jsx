import { BrowserRouter as Router } from 'react-router-dom';
import { Scrollbars } from 'react-custom-scrollbars-2';

import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import WhyUs from './components/WhyUs/WhyUs';
import Services from './components/Services/Services';
import Portfolio from './components/Portfolio/Portfolio';
import ContactUs from './components/ContactUs/ContactUs';
import Brief from './components/Brief/Brief';
import FAQ from './components/FAQ/FAQ';
import Footer from './components/Footer/Footer';
import Widget from './components/Widget/Widget';

import { Main } from './App.styled';

function App() {
  return (
    <Router>
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
    </Router>
  );
}

export default App;
