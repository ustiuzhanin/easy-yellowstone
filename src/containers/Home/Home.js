import React from 'react';

import Catcher from '../../components/Catcher/Catcher';
import Tours from '../../components/Tours/Tours';
import Features from '../../components/Features/Features';
import Advantages from '../../components/Advantages/Advantages';
import Gallery from '../../components/Gallery/Gallery';
import HomeContactsForm from '../../components/Contacts/HomeContactsForm/HomeContactsForm';

function Home() {
  return (
    <main>
      <Catcher />
      <Features />
      <Tours />
      <Advantages />
      <Gallery />
      <HomeContactsForm />
    </main>
  )
}

export default Home
