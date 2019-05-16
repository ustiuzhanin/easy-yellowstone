import React from 'react';

import Catcher from '../../components/Catcher/Catcher';
import Tours from '../../components/Tours/Tours';
import Features from '../../components/Features/Features';
import Advantages from '../../components/Advantages/Advantages';
import Gallery from '../../components/Gallery/Gallery';
import FullscreenGallery from '../../components/Gallery/FullscreenGallery/FullscreenGallery';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function Home() {
  return (
    <main>
      <Catcher />
      <Features />
      <Tours />
      <Advantages />
      <Gallery />
      <BrowserRouter>
       <Route path='/gallery/' component={FullscreenGallery} />
      </BrowserRouter>
    </main>
  )
}

export default Home
