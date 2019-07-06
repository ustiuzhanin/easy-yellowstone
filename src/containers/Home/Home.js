import React from 'react';

import Catcher from '../../components/Catcher/Catcher';
import Tours from '../../components/Tours/Tours';
import Features from '../../components/Features/Features';
import Advantages from '../../components/Advantages/Advantages';
import Gallery from '../../components/Gallery/Gallery';
import Reviews from '../../components/Reviews/Reviews';
import HomeContactsForm from '../../components/Contacts/HomeContactsForm/HomeContactsForm';

function Home() {
  return (
    <section>
      <Catcher />
      <Features />
      <Tours />
      <Advantages />
      <Reviews />
      <Gallery />
      <HomeContactsForm />
    </section>
  )
}

export default Home
