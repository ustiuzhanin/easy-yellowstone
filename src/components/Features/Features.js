import React from 'react';

import styles from './Features.module.css';
import img from '../../assets/image.png'

function features() {
  return (
    <section className={styles.features}>
      <div className={styles.wrapper}>
        <img className={styles.img} src={img} alt=""/>
        <h2 className={styles.title}>Lorem Featured Tours</h2>
        <div className={styles.textWrapper}>
          <p className={styles.text}>Based in West Yellowstone, MT we offer private tours of Yellowstone National Park. Our guides get into your vehicle or ours allowing us to provide you with a private and affordable customized tour. No more crowded buses packed with people you don’t know; just you, your friends and family on your own tour.  We specialize in fun, educational, memorable tours of Yellowstone National Park!</p> 
          {/* Lower Loop Tour in Yellowstone for only $525.  Call for details. Now taking reservations for 2019! */}
          <p className={styles.text}>We’re currently offering the Lower Loop Tour in Yellowstone for only $525.
            <br/>
            Call <a className={styles.link} href="tel:4066400226">406-640-0226</a> for details!
          </p>
        </div>
      </div>
    </section>
  )
}

export default features
