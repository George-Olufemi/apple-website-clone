import { Fragment } from 'react';
import { GiftCard } from './components/GiftCard';
import { Hero } from './components/Hero';
import { Navbar } from './nav/Navbar';

function App() {
  return (
    <Fragment>
      <Navbar />
      <Hero />
      <GiftCard />
    </Fragment>
  );
}

export default App
