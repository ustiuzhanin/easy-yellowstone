import React from 'react';

import styles from './Home.module.css'
import Catcher from '../../components/Catcher/Catcher';
import SpecialOffer from '../../components/SpecialOffer/SpecialOffer';
import Tours from '../../components/Tours/Tours';
import Features from '../../components/Features/Features';
import Advantages from '../../components/Advantages/Advantages';
import Gallery from '../../components/Gallery/Gallery';
import HomeContactsForm from '../../components/Contacts/HomeContactsForm/HomeContactsForm';

function Home() {
  return (
    <section>
      <Catcher />
      <SpecialOffer />
      <Features />
      <Tours />
      <Advantages />
      <Gallery />
      <HomeContactsForm />
    </section>
  )
}

export default Home
